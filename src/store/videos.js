import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import apiConfig from "../config/api";

const innerLoadVideos = async (path, thunkAPI) => {
    let token;

    try {
      token = thunkAPI.getState().user.user.jwtToken;
    } catch {
      return Promise.reject("No hay token");
    }

    if (!token) return Promise.reject("Token inválido");

    let response = await Axios.get(`${apiConfig.domain}/{path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
}

export const loadVideos = createAsyncThunk("videos/load", async (args, thunkAPI) => {
  let token, page;

  try {
    token = thunkAPI.getState().user.user.jwtToken;
  } catch {
    return Promise.reject("No hay token");
  }

  if (!token) return Promise.reject("Token inválido");

  try {
    page = thunkAPI.getState().videos.data.nextPage;
  } catch {
    page = 1
  }

  let response = await Axios.get(`${apiConfig.domain}/videos?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
);

export const userVideos = createAsyncThunk("videosUser/load", async (args, thunkAPI) => {
    return innerLoadVideos(`users/videos`, thunkAPI);
  }
);

export const getVideo = createAsyncThunk("videos/getVideo", async (videoId, thunkAPI) => {
    let token;
    try {
      token = thunkAPI.getState().user.user.jwtToken;
    } catch {
      return Promise.reject("No hay token");
    }

    if (!token) return Promise.reject("Token inválido");

    let response = await Axios.get(`${apiConfig.domain}/videos/${videoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
);

export const createVideo = createAsyncThunk("videos/create", async (videoData, thunkAPI) => {
    let token;
    try {
      token = thunkAPI.getState().user.user.jwtToken;
    } catch {
      return Promise.reject("No hay token");
    }

    if (!token) return Promise.reject("Token inválido");

    let response = await Axios.post(`${apiConfig.domain}/videos`, videoData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
);

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    status: "not-loaded",
    data: {
      videos: [],
      nextPage: 1,
      total: 1,
    },
    currentVideo: null
  },
  reducers: {},
  extraReducers: {
    [loadVideos.pending]: state => {
        state.status = 'loading'
    },
    [loadVideos.fulfilled]: (state, action) => {
      let { currentPage, nextPage, prevPage, total } = action.payload;
      state.status = "success";
      state.data = {
        currentPage,
        nextPage,
        prevPage,
        total,
        videos: action.payload.videos,
      };
    },
    [loadVideos.rejected]: state => {
        state.status = 'failed'
    },
    [getVideo.pending]: state => {
        state.status = 'loading'
    },
    [getVideo.fulfilled]: (state, action) => {
        state.success = 'success'
        state.currentVideo = action.payload
    },
    [getVideo.rejected]: state => {
        state.status = 'failed'
    },
    [userVideos.pending]: state => {
        state.status = 'loading'
    },
    [userVideos.fulfilled]: (state, action) => {
        state.data.videos = action.payload
    },
    [userVideos.rejected]: state => {
        state.status = 'failed'
    },
  },
});

export default videosSlice.reducer;

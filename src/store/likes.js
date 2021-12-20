import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import apiConfig from "../config/api";

export const likeVideo = createAsyncThunk("likes/create", async (videoId, thunkAPI) => {
    let token;
  
    try {
      token = thunkAPI.getState().user.user.jwtToken;
    } catch {
      return Promise.reject("No hay token");
    }

    if (!token) return Promise.reject("Token inválido");

    let response = await Axios.post(`${apiConfig.domain}/likes`, {
        like: {
            videoId
        }
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);
    return response.data;
})

export const getLikeVideos = createAsyncThunk("get/likes", async (args, thunkAPI) => {
    let token;
  
    try {
      token = thunkAPI.getState().user.user.jwtToken;
    } catch {
      return Promise.reject("No hay token");
    }

    if (!token) return Promise.reject("Token inválido");

    let response = await Axios.get(`${apiConfig.domain}/likes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);
    return response.data;
})

export const deleteLikeVideo = createAsyncThunk("delete/Like", async (videoId, thunkAPI) => {
    let token;
    try {
      token = thunkAPI.getState().user.user.jwtToken;
    } catch {
      return Promise.reject("No hay token");
    }

    if (!token) return Promise.reject("Token inválido");

    let response = await Axios.delete(`${apiConfig.domain}/likes/${videoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
);

const likeSlice = createSlice({
    name: 'likes',
    initialState: {
        status: 'not-loaded',
        data: {}
    },
    extraReducers: {
        [likeVideo.fulfilled]: state => {
            state.status = 'success'
        },
        [getLikeVideos.fulfilled]: (state, action) => {
            state.status = 'success'
            state.data = action.payload
        },
        [deleteLikeVideo.fulfilled]: state => {
            state.status = 'success'
          }
    }
})

export default likeSlice.reducer
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userVideos } from '../store/videos'
import { AppButton as AppButtonTemplate, SmallContainer } from '../theme'
import styled from 'styled-components'
import VideoThumbnail from '../videos/Thumbnail'
import { LogOutButton as LogOutButtonTemplate } from './LogOutButton'

const ProfileHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(6, minmax(auto, 1fr));
    grid-template-rows: 50px;
    grid-template-areas: "imageContainer imageContainer imageContainer imageContainer imageContainer imageContainer"
                        "userInfo userInfo userInfo userInfo userInfo userInfo"
                        "following following followers followers likes likes"
                        "edit edit edit logOut logOut logOut";

    text-align: center;
    padding: ${ ({ theme }) => theme.dims.padding.largePadding };
    & .image-container { 
        grid-area: imageContainer;
    }

    & .info-container { 
        grid-area: userInfo;
    }
`;

const ProfileImage = styled.img`
    max-height: 100%;
    border-radius: 50%;
`;

const Pill = styled.span`
    background-color: ${({ theme }) => theme.colors.gray };
    border-radius: ${({ theme }) => theme.dims.borderRadius.normal };
    font-size: ${({ theme }) => theme.dims.fonts.small };
    padding: ${({ theme }) => theme.dims.padding.largePadding };
    display: inline-block;
`;

const Counter = styled.div`
    grid-area: ${({ area }) => area}
    & .number { 
        font-size: ${({ theme }) => theme.dims.fonts.medium };
        display: block;
    }

    & .description { 
        color: ${ ({ theme }) => theme.colors.silver };
    }
`;

const AppButton = styled(AppButtonTemplate)`
    grid-area: edit;
    display: block;
`;
const LogOutButton = styled(LogOutButtonTemplate)`
    grid-area: logOut;
    display: block;
`;

const VideosContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

export const Profile = (props) => {
    const user = useSelector(state => state.user.user)
    const videos = useSelector(state => state.videos.data)
    const dispatch = useDispatch() 

    useEffect(() => {
        dispatch(
            userVideos()
        )
    }, [dispatch])

    console.log(videos)
    return (
        <SmallContainer>
            <ProfileHeader>
                <div className="image-container">
                    <ProfileImage src="/logo192.png" />
                </div>
                <div className="info-container">
                    <p><strong>@{user.username}</strong></p>
                    <Pill>
                        { videos.length }
                    </Pill>
                </div>
                <Counter area="following">
                    <p className="number">0</p>
                    <p className="description">Siguiendo</p>
                </Counter>
                <Counter area="followers">
                    <p className="number">0</p>
                    <p className="description">Seguidores</p>
                </Counter>
                <Counter area="likes">
                    <p className="number">0</p>
                    <p className="description">Likes</p>
                </Counter>
                <AppButton className="edit">Editar</AppButton>
                <LogOutButton className="logOut">Salir</LogOutButton>
            </ProfileHeader>
            <VideosContainer>
                {
                    videos.length && videos.map((video, idx) => <VideoThumbnail video={video} key={idx} />)
                }
            </VideosContainer>
        </SmallContainer>
    )
}
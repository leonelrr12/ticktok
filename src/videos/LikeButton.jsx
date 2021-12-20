import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteLikeVideo, likeVideo } from '../store/likes'
import { ClearButton, SvgButton } from '../theme'

export const LikeButton = ({ video }) => {

    const dispatch = useDispatch() 

    const doLike = (video) => {
        const { id, isLikedByCurrentUser: isLike } = video
        if(isLike) {
            dispatch(
                deleteLikeVideo(id)
            )
        } else {
            dispatch(
                likeVideo(id)
            )
        }
    }

    return (
        <ClearButton onClick={ () => doLike(video) }>
            <SvgButton src='/heart.svg' active={ video.isLikedByCurrentUser } />
        </ClearButton>
    )
}

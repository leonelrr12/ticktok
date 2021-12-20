import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getVideo } from '../store/videos'
import { Video } from './Video'
import { SmallContainer } from '../theme'

export const VideoShow = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const video = useSelector(state => state.videos.currentVideo)

    useEffect(() => {
        dispatch(
            getVideo(id)
        )
    }, [id, dispatch])

    return (
        <SmallContainer>
            {
                video &&  <Video video={ video } />
            }
        </SmallContainer>
    )
}
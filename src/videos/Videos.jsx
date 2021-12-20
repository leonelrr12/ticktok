import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { loadVideos } from '../store/videos'
import { SmallContainer as SmallContainerTemplate } from '../theme'
import { VideosList } from './VideosList'
import devices from '../theme/breakpoints'

const SmallContainer = styled(SmallContainerTemplate)`
    height: 100%;
    @media ${devices.mediumLaptop}{
        width: ${({ theme }) => theme.dims.widths.medium };
    }
`;

export const Videos = () => {
    const videosState = useSelector(state => state.videos)
    const dispatch = useDispatch() 

    const [loading, setLoading] = useState(false)

    const loadNextPage = async () => {
        setLoading(true)
        await dispatch( loadVideos() )
        setLoading(false)
    }

    return (
        <div>
            <SmallContainer>
                <VideosList 
                    videosState={videosState} 
                    loadNextPage={loadNextPage}
                    loading={loading}
                >
                </VideosList>
            </SmallContainer>
        </div>
    )
}
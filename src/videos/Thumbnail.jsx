import { Link } from "react-router-dom";
import styled from "styled-components";

const Thumbnail = styled.div`
    padding-bottom: 177%;
    margin-botton: ${ ({ theme }) => theme.dims.margin.normal };
    background-image: ${({ video }) => `url(${video.thumbnail})` };
    background-size: cover;
    background-position: center;
`;

const VideoThumbnail = ({video}) => {
    return (
        <Link to={`/videos/${video.id}`}>
            <Thumbnail video={video} />
        </Link>
    )
}

export default VideoThumbnail;
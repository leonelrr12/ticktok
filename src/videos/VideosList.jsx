import { InfiniteLoader, List } from "react-virtualized"
import { Video } from "./Video"


export const VideosList = ({ videosState, loadNextPage, loading }) => {

    const rowRenderer = ({ index, parent, key, style }) => {
        const video = videosState.data.videos[index]
        return (
            video ? 
            <Video key={ key } video={ videosState.data.videos[index] } style={ style } /> 
            : <p>Cargando ...</p>
        )
    }
    
    const loadMoreRows = loading ? ()=>{} : () => {
        loadNextPage()
    }
    const isRowLoaded = ({ index }) => {
        return !!videosState.data.videos[index]
    }

    const totalCount = videosState.data.nextPage ? videosState.data.videos.length + 3 : videosState.data.total
    const videosCount = videosState.data.nextPage ? videosState.data.videos.length + 1 : videosState.data.total

    return (
        <InfiniteLoader
            rowCount={totalCount}
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            minimumBatchSize={1}
            threshold={2}
        >
            {
                ({onRowsRendered, registerChild}) => (
                    <List
                        onRowsRendered={onRowsRendered}
                        ref={registerChild}
                        height={700}
                        width={500}
                        rowHeight={700}
                        rowCount={videosCount}
                        rowRenderer={ rowRenderer }
                    >
                    </List>
                )
            }
        </InfiniteLoader>
    )
}

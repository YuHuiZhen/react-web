import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridTile from '@material-ui/core/ImageListItem'

// 收藏列表 && 排行榜列表 && 歌单列表
export default function List(props) {
 
  //  flex布局 通过改变flex-direction （主轴）
  // flex-wrap 换行方式

  const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto',
    },
  }
  return (
    <>
      <div style={styles.root}>
        {/* too:报错 */}
        <GridList style={styles.gridList} cols={3.2}>
          {props.tilesData?.map((tile) => (
            <GridTile
              key={tile.cover}
              title={tile.name}
              // titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={tile.cover} alt="" />
            </GridTile>
          ))}
        </GridList>
      </div>
    </>
  )
}

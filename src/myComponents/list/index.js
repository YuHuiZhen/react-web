import React, { useEffect, useState } from 'react'
import GridList from '@material-ui/core/GridList'
import GridTile from '@material-ui/core/ImageListItem'

import { getNewestMV } from 'services/mv'

// 收藏列表 && 排行榜列表 && 歌单列表
export default function List(props) {
  const [tilesData, setData] = useState()

  // 展示最新mv
  useEffect(() => {
    getNewestMV().then((res) => {
      setData(res)
    })
  }, [])

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
        <GridList style={styles.gridList} cols={3.2}>
          {tilesData?.map((tile) => (
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

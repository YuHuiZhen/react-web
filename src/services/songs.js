import instance from './axios'

// 获取精品歌单
export function getBestPlaylistTag (){
  return instance.get('/playlist/highquality/tags')
}

// 获取热门歌单
export function getHotPlaylist (){
  return instance.get('/playlist/hot')
}

// 获取精品歌单
export function getBestPlaylist (){
  return instance.get('/top/playlist/highquality')
}

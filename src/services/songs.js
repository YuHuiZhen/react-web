import instance from './axios'

// 获取精品歌单
export function getBestPlaylist (){
  return instance.get('/playlist/highquality/tags')
}
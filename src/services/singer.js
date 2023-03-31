import instance from './axios'

// 获取歌手
export function getSingers({ parmas }) {
  return instance.get('/artist/list', {
    params,
  })
}

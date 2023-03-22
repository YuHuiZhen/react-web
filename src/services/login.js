import instance from './axios'

// 登陆请求
export function login (params){
  return instance.get('login/cellphone',{
    params,
  })
}

// 搜索音乐
export function searchMusic(params){
  return instance.get('/search',{
    params
  })
}

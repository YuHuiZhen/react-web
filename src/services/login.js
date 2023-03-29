import instance from './axios'

// 登陆请求（暂时绕不开验证）
export function login (params){
  return instance.get('login/cellphone',{
    params,
  })
}

const timestamp = new Date().getTime();//有些请求 需要带上时间戳
// 二维码生成key
export function loginQrKey(){
  return instance.get(`/login/qr/key?timestamp=${timestamp}`)
}

// 二维码生成图片（需要先生成key）
export function loginQrCode(params){
  return instance.get(`/login/qr/create?timestamp=${timestamp}`,{
    params,
  })
}

// 搜索音乐
export function searchMusic(params){
  return instance.get('/search',{
    params
  })
}

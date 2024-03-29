import instance from './axios'

// 获取登录状态
export function isLogin (){
  return instance.get('/login/status')
}
// 登陆请求（暂时绕不开验证）
export function login (params){
  return instance.get('/login/cellphone',{
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

// 游客登录
export function touristLogin(){
  return instance.get('/register/anonimous')
}

// 退出
export function logout(){
  return instance.get('/logout')
}

// 获取国家地址列表
export function getAddress(){
  return instance.get('/countries/code/list')
}

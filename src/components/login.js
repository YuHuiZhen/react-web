import React, { useState, useCallback,useRef } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import { loginQrKey, loginQrCode } from 'services/login'
import { getQRCode } from 'utils/utils'

import './index.less'
// import styles from './index.less';

function Login() {
  const [open, setOpen] = useState(false)
  const [url, setUrl] = useState()
  const key = useRef();
  const openLogin = useCallback(async () => {
    // 全局只打开一个登陆弹框
    const res = await loginQrKey()
    // 1. 获取key
    key.current = res.unikey
    // 目前只支持 二维码登陆
    const resp = await loginQrCode({ key })
    const codeurl = await getQRCode(resp.qrurl)
    setUrl(codeurl)
    console.log('codeurl', codeurl)
    setOpen(true)
  }, [key])

  const handleClose = useCallback(() => {
    //todo
    setOpen(false)
  }, [])

  const handleLogin = useCallback(async () => {
    setOpen(false)
  }, [])

  return (
    <>
      {/* 未登录时展示 登录 已登录时展示 个人ID */}
      <Button onClick={openLogin}>登录</Button>
      <Dialog title="Dialog With Actions" open={open}>
        <div className="dialog-wrapper">
          请扫描二维码登录
          <br />
          <img src={url} alt=""></img>
          <div className='login-button-list'>
            <Button onClick={handleLogin}>已扫描</Button>
            <Button onClick={handleClose}>关闭</Button>
          </div>
        </div>
      </Dialog>
    </>
  )
}
export default Login

import React, { useState, useCallback } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import './index.less'
// import styles from './index.less';

function useLogin() {
  const [open, setOpen] = useState(false)

  const openLogin = useCallback(() => {
    // 全局只打开一个登陆弹框
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    //todo
    setOpen(false)
  }, [])

  return (
    <>
      <Button onClick={openLogin}>登录</Button>
      <Dialog title="Dialog With Actions" open={open} className='dialog-wrapper'>
        The actions in this window were passed in as an array of React objects.
        {/* footer上只有提交和取消按钮 */}
        {/* className="login-button-list"  能把类名挂载到div上但是样式不起作用 （尝试加!important依旧） */}
        <TextField hintText="Hint Text" errorText="This field is required" />
        <br />
        <TextField
          hintText="Hint Text"
          errorText="The error text can be as long as you want, it will wrap."
          type="password"
        />
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button primary={true} onClick={handleClose}>
            确认提交
          </Button>
          <Button primary={true} keyboardFocused={true} onClick={handleClose}>
            关闭
          </Button>
        </div>
      </Dialog>
    </>
  )
}
export default useLogin

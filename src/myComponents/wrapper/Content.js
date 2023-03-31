import React, { useEffect } from 'react'
import List from '@/myComponents/list'
import Loading from '@/components/Loading'
import { isLogin } from '@/services/login'

export default function Content() {
  useEffect(() => {
    console.log('查询登录状态')
    // 查询登录状态
    async function checkIsLogin() {
      const res = await isLogin()
      console.log('res～～～', res)
    }
    checkIsLogin()
  }, [])

  return (
    <div className="content-wrapper">
      <Loading>
      </Loading>
      <List />
    </div>
  )
}

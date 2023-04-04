import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import SideBar from '@/myComponents/sideBar'
// import { connect } from 'dva';

import { isLogin } from '@/services/login'
import './index.less'

function Wrapper(props) {
  const { theme } = props;
  console.log('theme',theme)
  useEffect(() => {
    console.log('查询登录状态 isLogin')
    // 查询登录状态 为啥会进到catch里面呢
    isLogin()
      .then((res) => {
        console.log('reszheshi', res)
      })
      .catch((erro) => {
        console.log('erro', erro)
      })
  }, [])

  return (
    <>
      <Header />
      <SideBar />
      <Content />
      <Footer />
    </>
  )
}

export default Wrapper;
// export default connect(({ globalData }) => ({
//   theme: globalData.theme,
// }))(Wrapper);
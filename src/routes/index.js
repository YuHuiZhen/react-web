import React, { useEffect } from 'react'
import { Router, Route } from 'react-router-dom'
import routes from './routes'
import { createBrowserHistory } from 'history'
import { isLogin } from '@/services/login'
import Wrapper from '@/myComponents/wrapper'
// import { Observer } from 'mobx-react-lite'

const history = createBrowserHistory()

function RouterConfig() {
  // 查询登录状态
  // todo 拿不到res 是为什么为什么
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
    <div>
      <Wrapper>
      </Wrapper>
      <Router history={history}>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            ></Route>
          )
        })}
      </Router>
    </div>
  )
}
export default RouterConfig

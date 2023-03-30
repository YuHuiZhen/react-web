import React, { useEffect } from 'react'
import { Router, Route } from 'react-router-dom'
import routes from './routes'
import { createBrowserHistory } from 'history'
import Login from '../components/login'
import SideBar from '../myComponents/sideBar'
import Nav from '../myComponents/nav'
import SongList from '../myComponents/songList'
import { isLogin } from '../services/login'

const history = createBrowserHistory()

function RouterConfig() {

  // 查询登录状态
  useEffect(() => {
    console.log('查询登录状态')
    // 查询登录状态 没有拿到res
    async function checkIsLogin() {
      const res = await isLogin()
      console.log('res～～～', res)
    }
    checkIsLogin()
  }, [])
  return (
      <div>
        <SideBar />
        <Nav />
        <Login />
        <SongList/>
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

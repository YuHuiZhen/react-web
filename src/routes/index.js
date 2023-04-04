import React from 'react'
import { Router, Route } from 'react-router-dom'
import routes from './routes'
import { createBrowserHistory } from 'history'
import Wrapper from '@/myComponents/wrapper'
// import { Observer } from 'mobx-react-lite'

const history = createBrowserHistory()

function RouterConfig() {
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

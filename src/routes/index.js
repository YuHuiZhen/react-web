import { Router, Route } from 'react-router-dom'
import routes from './routes'
import { createBrowserHistory } from 'history'
import login from '../components/login'

const history = createBrowserHistory()

function RouterConfig() {
  return (
    <Router history={history}>
      <nav>
        <ul>
          <li>
            <a to="/" href="/">
              Home
            </a>
          </li>
          <li>
            <a to="/about" href="/about">
              About
            </a>
          </li>
        </ul>
      </nav>
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
      {login()}
    </Router>
  )
}
export default RouterConfig

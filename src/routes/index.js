import { Router, Route } from 'react-router-dom'
import routes from './routes'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

function RouterConfig() {
  return (
    <Router history={history}>
      {/* <Switch> */}
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
      {routes.forEach((route) => {
        ;<Route
          // key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      })}
      {/* </Switch> */}
    </Router>
  )
}
export default RouterConfig

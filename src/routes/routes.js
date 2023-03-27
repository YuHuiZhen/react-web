import Home from './Home';
import MyPage from './MyPage'
const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    component: MyPage,
  },
];
export default routes;

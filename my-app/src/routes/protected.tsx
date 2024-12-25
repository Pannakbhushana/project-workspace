import { Outlet, RouteObject } from 'react-router-dom';

import routes from '../constant/routes';
import Home from '../pages/Home';
import AppLayout from '../pages/app-layout';

const App = () => {
    return (
      <AppLayout >
        <Outlet />
      </AppLayout >
    );
};

export const protectedRoutes: RouteObject[] = [
  {
    path: '',
    element: <App />,
    children: [
      { path: routes.HOME, element: <Home /> },
    ],
  },
];

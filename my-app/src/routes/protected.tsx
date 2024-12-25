import { Outlet, RouteObject } from "react-router-dom";
import { Home } from "../pages";
import React from "react";
import AppLayout from "../app-layout/app-layout";


const App = () =>{
    return (
        <AppLayout >
          <Outlet />
        </AppLayout >
      );
}

export const protectedRoutes: RouteObject[] = [
    {
      path: '',
      element: <App />,
      children: [
        
        { path: '/', element: <Home /> },
        // { path: '*', element: <Navigate to={routes.DASHBOARD} replace /> },
      ],
    },
  ];
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';

export const AppRoutes = () => {
//   const routes = isUserAuthenticated() ? protectedRoutes : publicRoutes;

  const element = useRoutes(protectedRoutes);

  return <>{element}</>;
};

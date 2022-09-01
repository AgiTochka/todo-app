import { useRoutes } from "react-router-dom";
import React from 'react';
import Home from '../pages/home/Home.jsx';
import Login from '../pages/login/Login.jsx';
import Registration from '../pages/registration/Registration.jsx';
import Tasks from '../pages/tasks/Tasks.jsx';
import Welcome from '../pages/welcome/Welcome.jsx';
import Calendar from '../pages/calendar/Calendar.jsx';
import PageNotFound from '../pages/NotFound'

const routes = useRoutes([
  {
    path:'/',
    element: <Welcome/>,
    isPrivate: false,
  },
  {
    path:'/login',
    element: <Login/>,
    isPrivate: false,
  },
  {
    path:'/register',
    element: <Registration/>,
    isPrivate: false,
  },
  {
    path:'/home',
    element: <Home/>,
    isPrivate: true,
  },
  {
    path:'/tasks',
    element: <Tasks/>,
    isPrivate: true,
  },
  {
    path:'/calendar',
    element: <Calendar/>,
    isPrivate: true,
  },
  {
    path:'/*',
    element: <PageNotFound/>,
    isPrivate: true,
  },
]);
return routes;

export default routes



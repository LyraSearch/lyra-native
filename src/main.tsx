import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import App from './app';
import Welcome from './welcome';
import Snack from './snack';
import RnWeb from './rn-web';
import '@unocss/reset/tailwind.css';
import 'uno.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {index: true, element: <Welcome />},
        {path: 'web', element: <RnWeb />},
        {path: 'snack', element: <Snack />},
      ],
    },
  ],
  {basename: '/lyra-native'},
);
ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

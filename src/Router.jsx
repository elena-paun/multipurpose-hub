import React from 'react';
import ConnectedApp from '.';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { Artwork } from './components/Artwork';
import Root from './Root';
import About from './About';
const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <Root />,
    // loader: rootLoader,
    children: [
      {
        path: '/',
        element: <ConnectedApp />,
        // loader: teamLoader,
      },
      {
        path: 'gallery',
        element: <Artwork />,
        // loader: teamLoader,
      },
      // {
      //   path: 'about',
      //   element: <About />,
      //   // loader: teamLoader,
      // },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;
export default Router;

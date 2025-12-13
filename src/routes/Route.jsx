import { Children } from 'react';
import App from './App.jsx';
import New from './pages/New.jsx';
import Details from './pages/Details.jsx';


const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/:id',
        element: <Details/>,
      },
      {
        path: '/new',
        element: <New/>,
      },
    ],
  },
];
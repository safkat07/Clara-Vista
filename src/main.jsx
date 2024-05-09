import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import SmoothScroll from './SmoothScroll';
import router from './Router/Router.jsx'

ReactDOM.render(
  <React.StrictMode>

    {/* <SmoothScroll>
      <RouterProvider router={router} />
    </SmoothScroll> */}
<RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

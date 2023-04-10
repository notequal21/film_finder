import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Hello from './routes/Hello/Hello';
import Similar from './routes/Similar/Similar';
import Emotions from './routes/Emotions/Emotions';
import Condition from './routes/Condition/Condition';
import Result from './routes/Result/Result';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Hello />,
      },
      {
        path: 'similar',
        element: <Similar />,
      },
      {
        path: 'emotions',
        element: <Emotions />,
      },
      {
        path: 'condition',
        element: <Condition />,
      },
      {
        path: 'result',
        element: <Result />,
      },
      {
        path: '*',
        element: <Hello />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

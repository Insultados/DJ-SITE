import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from './auth/login/Login';
import User from './auth/admin/Admin';
import ErrorPage from './error-page';

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Navigate to="/main" />,
    errorElement: <ErrorPage />,  // new
  },
  {
    path: "/DJ-SITE",
    element: <Navigate to="/main" />,
    errorElement: <ErrorPage />,  // new
  },
  {
    path: "/main",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <User />,
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <App />
  <RouterProvider router={router} />
);



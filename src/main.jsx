import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Template/Main';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Home from './Pages/Home/Home/Home';
import './index.css';
import Classes from './Pages/Classes/Classes';
import Instructors from './Pages/Instructors/Instructors';
import Dashboard from './Template/Dashboard';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import AuthProvider from './providers/AuthProvider';
import Loader from './Components/Loader/Loader';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      }
    ]
  },
  {
    path: "/dashboard",
    element : <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <UserDashboard></UserDashboard>
      }
    ]
  },
  {
    path: "/loader",
    element: <Loader></Loader>
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

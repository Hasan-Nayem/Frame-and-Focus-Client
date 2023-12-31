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
import Users from './Pages/Admin/Users/Users';
import PrivateRoutes from './routes/PrivateRoutes';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import ManageClass from './Pages/Instructor/ManageClass/ManageClass';
import AddClass from './Pages/Instructor/AddClass/AddClass';
import ManageClassByAdmin from './Pages/Admin/ManageClassByAdmin/ManageClassByAdmin';
import SelectedClass from './Pages/Student/SelectedClass/SelectedClass';
import EnrolledClass from './Pages/Student/EnrolledClass/EnrolledClass';
import Payments from './Pages/Student/Payments/Payments';
import Pay from './Pages/Student/Pay/Pay';
const queryClient = new QueryClient()
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
        loader: () => fetch('https://frame-and-focus.vercel.app/instructors'),
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
    element : <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [

      {
        path: "/dashboard",
        element: <UserDashboard></UserDashboard>
      },
      //Admin Routes
      {
        path: 'admin/user/manage',
        element : <Users></Users>
      },
      {
        path: 'admin/class/manage',
        element: <ManageClassByAdmin></ManageClassByAdmin>,
      },
      //Instructor Routes
      {
        path: 'instructor/classes/manage',
        element: <ManageClass></ManageClass>
      },
      {
        path: 'instructor/classes/add',
        element: <AddClass></AddClass>
      },
      //Student Routes
      {
        path : 'student/classes/selected',
        element : <SelectedClass></SelectedClass>
      },
      {
        path: 'student/classes/enrolled',
        element: <EnrolledClass></EnrolledClass>
      },
      {
        path: '/dashboard/pay/:id',
        loader: ({params}) => fetch(`https://frame-and-focus.vercel.app/pay/${params.id}`),
        element : <Pay></Pay>
      },
      {
        path: 'student/payments',
        element : <Payments></Payments>
      }
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)

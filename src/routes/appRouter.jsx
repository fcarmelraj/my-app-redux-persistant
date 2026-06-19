import {createBrowserRouter, Navigate} from 'react-router';
import {lazy} from 'react';
import MainLayout from '../Layout/mainLayout';
const Home = lazy(()=>import('../Components/home'));
const About = lazy(()=>import('../Components/about'));
const Counter = lazy(()=>import('../Components/counter'));
const Service = lazy(()=>import('../Components/Service/mainService'));
const ServiceOne = lazy(()=>import('../Components/Service/serviceOne'));
const ServiceTwo = lazy(()=>import('../Components/Service/serviceTwo'));
const ServiceThree = lazy(()=>import('../Components/Service/serviceThree'));
const PageNotFound = lazy(()=>import('../Components/pageNotFound'));
const Login = lazy(()=>import('../Components/Login/login'));
const Register = lazy(()=>import('../Components/Register/register'));
const AuthLayout = lazy(()=>import('../Layout/authlayout'));
const ProtectedRoute = lazy(()=>import('../Components/ProtechedRoute'));

// export const router = createBrowserRouter([
//     {
//         element: <MainLayout/>,
//         children:[
//             {path:'/', element: <Home/>},
//             {path:'/about', element: <About/>},
//             {path:'/counter', element:<Counter/>},            
//             {
//                 path: "/service",
//                 element: <Service />,
//                 children: [
//                     { index: true, element: <ServiceOne /> },
//                     {path:'/service/service-one', element: <ServiceOne/>},
//                     {path:'/service/service-two', element: <ServiceTwo/>},
//                     {path:'/service/service-three', element: <ServiceThree/>},
//                             ]
//             },            

//                 // optional real 404 page route
//     { path: "/pagenotfound", element: <PageNotFound /> },

//     // redirect unknown routes → /404
//     { path: "*", element: <Navigate to="/pagenotfound" replace /> }           
//                  ]
//     },
//     {
//                 // path:'/login',
//                 element: <AuthLayout/>,
//                 children:[
//                     {path:'/login', element:<Login/>},
//                     {path:'/register', element: <Register/>}
//                 ]
//             },
// ])

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: "/home", element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/counter", element: <Counter /> },

          {
            path: "/service",
            element: <Service />,
            children: [
              { index: true, element: <ServiceOne /> },
              { path: "service-one", element: <ServiceOne /> },
              { path: "service-two", element: <ServiceTwo /> },
              { path: "service-three", element: <ServiceThree /> },
            ],
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  { path: "/pagenotfound", element: <PageNotFound /> },
  { path: "*", element: <Navigate to="/pagenotfound" replace /> },
]);
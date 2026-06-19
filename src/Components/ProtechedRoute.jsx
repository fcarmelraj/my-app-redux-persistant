import { Navigate, Outlet } from "react-router";
// import {useSelector} from 'react-redux';
// import {} from ""
const ProtectedRoute = () => {
    // const loginDetails = useSelector((state)=>state.login);
    // const registerDetails = useSelector((state)=>state.register);
    // const isLoggedIn = false;
    // console.log('ProtectedRoute loginDetails',loginDetails,'registerDetails',registerDetails)
    // if(loginDetails.userName ==='test'){alert('Hi I am there')} else{alert('No')}
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
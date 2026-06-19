import { Outlet, useNavigate, Navigate } from "react-router";
import {useSelector} from 'react-redux';
import react,{useEffect} from "react";
function AuthLayout() {
  const loginDetails = useSelector((state)=>state.login);
  const registerDetails = useSelector((state)=>state.register);
  const navigate = useNavigate();
  useEffect(() => {
  const verifiedUser = registerDetails.filter(
    (user) => user.userName === loginDetails.userName
  );
  console.log('localstorag',localStorage.getItem('isLoggedIn'))
  if (
    verifiedUser.length > 0 &&
    loginDetails.userName 
  ) {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/home");
    console.log('calleddddd')
  } else{
    console.log('issues in code')
  }
}, [loginDetails, registerDetails, navigate]);
  console.log('auth layout',loginDetails, registerDetails)
  return (
    <div>
      <h2>Auth Layout</h2>
      <Outlet />
    </div>
  );
}

// function AuthLayout() {
//   const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
//   console.log('isLoggedIn',isLoggedIn)
//   if (isLoggedIn) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Outlet />;
// }

export default AuthLayout;
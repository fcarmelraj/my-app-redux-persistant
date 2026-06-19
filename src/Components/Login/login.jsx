import react,{useState} from "react";
import {Link} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../CreateSlice/loginSlice';
const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    // const loginDetails = useSelector((state)=>state.login)
    const dispatch = useDispatch();
    // console.log('login',loginDetails)

  const handleLogin = () => {
  dispatch(
    login({
      userName,
      password,
      isLoggedIn:true
    })
  );

  console.log(userName, password);
};

    return(<div>
        <fieldset>
            <h2>Login</h2>
            <lable>User Name</lable> <br></br>
            <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} /><br></br>
            <lable>Password</lable>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br></br>
            <button onClick={()=>handleLogin()}>Login</button>        
            <Link to="/register">Register</Link>
        </fieldset>
    </div>)
}

export default Login;
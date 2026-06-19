import react,{useState} from "react";
import {Link, useNavigate} from 'react-router';
import {useDispatch} from 'react-redux';
import {register} from '../../CreateSlice/registerSlice';
const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const registerUser = () =>{
        dispatch(register({userName, email, password}));
        console.log('Successfully Registered!')
        navigate('/login')
    }
    return(<div>
        <h2>Register</h2>
        <fieldset>
            <lable>Name</lable>
            <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} /><br></br>
            <lable>email</lable>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br></br>
            <lable>Password</lable>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br></br>     
            <Link to="/login">Login</Link>
            <button onClick={()=>registerUser()}>Register</button>
        </fieldset>
    </div>)
}

export default Register;
import react from "react";
import {link} from 'react-dom';
import { Link, useNavigate } from "react-router";
import './header.css';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../CreateSlice/loginSlice';
import {persistor} from '../../Store/store';
const Header = () => {
    const guest = useSelector((state) => state.guest);
    const login = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
            dispatch(logout());
       setTimeout(async()=>{
         await persistor.flush(); 
        await persistor.purge();
      localStorage.clear();
        window.location.reload();
        navigate('/login', { replace: true });
       },2000)
      
        
       

        
        console.log('logouttttttt');
        // window.location.reload();
    };
    // console.log('guest',guest,login)
    return(<section class="header">
        <div>
            <div>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/service">Service</Link></li>
        </ul>
        </div>
        <div>               
          {login.userName === "" ? guest : login.userName}
          {login.userName.length > 0 && <button onClick={()=>handleLogout()}>Logout</button>}
        </div>
        </div>
    </section>)
}

export default Header;
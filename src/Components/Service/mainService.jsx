import react from "react";
import { NavLink, Outlet } from "react-router";

const MainService = () => {
    return(<div>
        <h2>Service</h2>
        <div>
            <nav>
                <NavLink to="service-one">Service 1</NavLink>
                <NavLink to="service-two">Service 2</NavLink>
                <NavLink to="service-three">Service 3</NavLink>
            </nav>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>)
}
export default MainService;
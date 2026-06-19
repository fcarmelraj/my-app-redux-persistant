import {Outlet} from 'react-router';
import Header from '../Components/header/header';
import Footer from '../Components/footer';
const MainLayout = () => {
    return(<>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>)
}

export default MainLayout;
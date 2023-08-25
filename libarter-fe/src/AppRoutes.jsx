import { Routes, Route } from 'react-router-dom';
import { routes } from './constants';
import Register from './pages/Register';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import MyOffers from './pages/My Offers';
import Search from './pages/Search';
import About from './pages/About';
import Login from './pages/Login';

const AppRoutes = () => {
    return ( 
        <Routes>
            <Route path={routes.register} element={<Register/>}/>
            <Route path={routes.login} element={<Login/>}/>
            <Route path={routes.forgotPassword} element={<ForgotPassword/>}/>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.about} element={<About/>}/>
            <Route path={routes.myOffers} element={<MyOffers/>}/>
            <Route path={routes.search} element={<Search/>}/>
        </Routes>
    );
}
 
export default AppRoutes;
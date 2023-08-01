import { Routes, Route } from 'react-router-dom';
import { routes } from './constants';
import Register from './pages/Register';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';

const AppRoutes = () => {
    return ( 
        <Routes>
            <Route path={routes.register} element={<Register/>}/>
            <Route path={routes.forgotPassword} element={<ForgotPassword/>}/>
            <Route path={routes.home} element={<Home/>}/>
        </Routes>
    );
}
 
export default AppRoutes;
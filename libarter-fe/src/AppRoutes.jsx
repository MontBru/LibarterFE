import { Routes, Route } from 'react-router-dom';
import { routes } from './constants';
import Register from './pages/Register';

const AppRoutes = () => {
    return ( 
        <Routes>
            <Route path={routes.register} element={<Register/>}/>
            <Route path={routes.forgotPassword} element={<div>to be implemented</div>}/>
            <Route path={routes.home} element={<div>to be implemented</div>}/>
        </Routes>
    );
}
 
export default AppRoutes;
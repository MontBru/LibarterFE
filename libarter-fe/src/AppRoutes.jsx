import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './constants';
import Register from './pages/Register';
import AddBook from './pages/AddBook';
import ForgotPassword from './pages/ForgotPassword';
import MyOffers from './pages/MyOffers';
import Search from './pages/Search';
import About from './pages/About';
import Login from './pages/Login';
import UpdateOffer from './pages/UpdateOffer';
import OfferPage from './pages/OfferPage';

const AppRoutes = () => {
    return ( 
        <Routes>
            <Route path={routes.register} element={<Register/>}/>
            <Route path={routes.login} element={<Login/>}/>
            <Route path={routes.forgotPassword} element={<ForgotPassword/>}/>
            <Route path={routes.addBook} element={<AddBook/>}/>
            <Route path={routes.about} element={<About/>}/>
            <Route path={routes.myOffers} element={<MyOffers/>}/>
            <Route path={routes.search} element={<Search/>}/>
            <Route path={routes.updateOffer} element={<UpdateOffer/>}/>
            <Route path={routes.offerPage} element={<OfferPage/>}/>
        </Routes>
    );
}
 
export default AppRoutes;
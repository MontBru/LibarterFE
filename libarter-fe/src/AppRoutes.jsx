import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './constants';
import Register from './pages/Register';
import AddBook from './pages/AddBook';
import ForgotPassword from './pages/ForgotPassword';
import MyOffers from './pages/MyOffers';
import Search from './pages/Search';
import Login from './pages/Login';
import UpdateOffer from './pages/UpdateOffer';
import OfferPage from './pages/OfferPage';
import ResetPassword from './pages/ResetPassword';
import CheckEmail from './pages/CheckEmail';
import ProfilePage from './pages/ProfilePage';
import ConversationsPage from './pages/ConversationsPage';
import MessagesPage from './pages/MessagesPage';
import RegisterWtihToken from './pages/RegisterWithToken';
import AboutUs from './pages/AboutUs';

const AppRoutes = () => {
    return ( 
        <Routes>
            <Route path={routes.register} element={<RegisterWtihToken/>}/>
            <Route path={`${routes.registerWithToken}/:token`} element={<Register/>}/>
            <Route path={routes.login} element={<Login/>}/>
            <Route path={routes.forgotPassword} element={<ForgotPassword/>}/>
            <Route path={routes.addBook} element={<AddBook/>}/>
            <Route path={routes.myOffers} element={<MyOffers/>}/>
            <Route path={routes.search} element={<Search/>}/>
            <Route path={routes.updateOffer} element={<UpdateOffer/>}/>
            <Route path={routes.checkEmail} element={<CheckEmail/>}/>
            <Route path={`${routes.offerPage}/:offerId`} element={<OfferPage/>}/>
            <Route path={`${routes.resetPassword}/:token`} element={<ResetPassword/>}/>
            <Route path={routes.profilePage} element={<ProfilePage/>}/>
            <Route path={routes.conversations} element={<ConversationsPage/>}/>
            <Route path={`${routes.messages}/:convId`} element={<MessagesPage/>}/>
            <Route path={`${routes.aboutus}`} element={<AboutUs />} />
        </Routes>
    );
}
 
export default AppRoutes;
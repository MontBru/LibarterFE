import React, { useEffect } from 'react';
import CenteredBox from '../components/CenteredBox';
import FormInputComponent from "../components/FormInputComponent";
import { useState } from 'react';
import SubmitButton from '../components/SubmitButton';
import forgotPassword from '../service/public/forgotPassword';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants';
import SendEmail from '../components/SendEmail';

const ForgotPassword = () => {
    return (
        <SendEmail service={forgotPassword} title=""/>
    );
}
 
export default ForgotPassword;
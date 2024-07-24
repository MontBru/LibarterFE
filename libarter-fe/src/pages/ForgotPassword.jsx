import React, { useEffect } from 'react';
import CenteredBox from '../components/CenteredBox';
import FormInputComponent from "../components/FormInputComponent";
import { useState } from 'react';
import SubmitButton from '../components/SubmitButton';
import forgotPassword from '../service/public/forgotPassword';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants';
import SendEmail from '../components/SendEmail';
import languageStore from '../zustand/languageStore';

const ForgotPassword = () => {
    const {language, setLanguage} = languageStore();
    let text = language === "EN"?["Receive Email To Reset Password"]:["Получи Имейл за Смяна на Парола"];
    return (
        <SendEmail service={forgotPassword} title={text[0]}/>
    );
}
 
export default ForgotPassword;
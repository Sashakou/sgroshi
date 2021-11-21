import React from 'react';
import Header from "../header";
// import { Field, reduxForm } from 'redux-form'
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';

const Login = () => {
    let navigate = useNavigate();
    const [showError, setShowError] = useState(false);

    console.log('Login зайшло');
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        // chekPhone(data.phone);
        // checkRu(data.password);
        console.log(chekPhone(data.phone) && checkRu(data.password));
        if(chekPhone(data.phone) && checkRu(data.password)){
            //перенаправляєм на другу сторінку
            //setShowError(false);
            navigate("/inquiries");
        }else{
            //виводим помилку
            setShowError(true);
        }
    };
    let checkRu = (str) => {
        const cyrillicPattern = /[\u0400-\u04FF]/;
        if(cyrillicPattern.test(str)) {
            console.log("введите только латинские символы 🤨");
            return false;
        }else {
            console.log("все ок");
            return true;
        }

    }
    let chekPhone = (str) => {
        console.log(String(str.replace(/[^\d]/g, '')));
        if(String(str.replace(/[^\d]/g, '')).length == 12){
            return true;
        }else {
            return false;
        }
    }
    const closePopupError = (data) => {
        setShowError(false);
    }

    // console.log(watch("phone"));
    // console.log(watch("password"));
    return (
        <>
            <div className="login">
                <div className="innerLogin">
                    <h3>Вхід до системи</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="coverInput ">
                            <label htmlFor="userPhone">Телефон</label>
                            <div>
                                <InputMask mask="+38 999 999 99 99" id="userPhone" {...register("phone", { required: true })} type="phone"/>
                                {errors.phone && <p>Це поле є обов'язковим</p>}
                            </div>
                        </div>
                        <div className="coverInput ">
                            <label htmlFor="userPass">Пароль</label>
                            <div>
                                <input id="userPass" {...register("password", { required: true })} type="password"/>
                                {errors.password && <p>Це поле є обов'язковим</p>}
                            </div>
                        </div>
                        <div className="coverBtn">
                            <button type="submit">Увійти</button>
                        </div>
                        {/*<input type="submit" />*/}
                    </form>
                </div>
            </div>
            {
                showError
                    ?<div className="coverPopupError">
                        <div className="innerBlock">
                            <div className="title alert alert-primary">Неправильний номер телефону або пароль</div>
                            <button className="btn btn-secondary" onClick={closePopupError}>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.59973 8.48521L0 15.0849L1.88562 16.9706L8.48535 10.3708L15.0851 16.9706L16.9707 15.0849L10.371 8.48521L16.9706 1.88562L15.0849 0L8.48535 6.59959L1.88576 0L0.000140161 1.88562L6.59973 8.48521Z" fill="#000000"/>
                                </svg>

                            </button>
                        </div>
                    </div>
                    : <></>
            }
        </>
    )

}

export default Login;
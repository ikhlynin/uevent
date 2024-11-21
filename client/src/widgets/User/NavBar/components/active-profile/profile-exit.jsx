
import React, { useContext } from 'react';
import { Link, useNavigate, } from 'react-router-dom';

import { Context } from "../../../../../";

// import luffy from './assets/luffy.jpg'

import "./style.css"

export const ProfileExit = () => {
    const { store } = useContext(Context)
    let navigate = useNavigate();
    const link = "/profile/" + store.user.id


    const exitFunc = async event => {
        await store.logout()
        navigate('/');
    }

    return (
        <div className='flex_row'>
            <Link to={link} className='profile_btn'>
                <img className='profile_img' src={store.user.img} alt=" aboba" />
            </Link>
            <Link onClick={exitFunc} to="/auth" className='authbtn'>
                Вихід
            </Link>
        </div>
    )
}
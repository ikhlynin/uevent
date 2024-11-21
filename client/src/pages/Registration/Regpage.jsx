import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../../";

import "./style.css"

const Regpage = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [error, setError] = useState('');
    const { store } = useContext(Context)
    let navigate = useNavigate();

    const signupFunc = async event => {
        event.preventDefault();
        const aboba = await store.registration(email, password);

        if (aboba !== true) {
            setError(aboba.response.data.message)
        }
        else {
            navigate('/');
        }
    }

    return (
        <div>
            <form className='auth_page'>
                <span className='auth_pagetitle'>Регістрація</span>

                <div className='auth_login'>
                    <span className='auth_span'>Ел. пошта:</span>
                    <input className='auth_input' required type="text" placeholder='enter email...' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='auth_pass'>
                    <span className='auth_span'>Пароль:</span>
                    <input className='auth_input' required type="text" placeholder='enter password...' onChange={e => setPassword(e.target.value)} />
                </div>

                <div className='auth_error'>{error}</div>

                <div className='aboba'><button onClick={signupFunc} className='reg_button' >Зареєструватися</button></div>
            </form>
        </div>
    )
}
export default Regpage;
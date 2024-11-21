import React, { useState } from 'react';

import "./style.css"

const Recovery = () => {
    const [/*email,*/ setEmail] = useState([]);
    // const [password, setPassword] = useState([]);
    const [error/*, setError*/] = useState('');

    const [viewedEmail, setViewedEmail] = useState(false);
    const [viewedCode, setViewedCode] = useState(false);

    const [/*verification,*/ setVerification] = useState([]);

    const loginFunc = async event => {
        event.preventDefault();
        //тут надо сделать проверку валидна ли почта и 
        //тогда поменять переменную setViewedEmail на true
        setViewedEmail(true)
    }

    const recoveryCode = async event => {
        //тут надо сделать проверку валиден ли коде и 
        //тогда поменять переменную setViewedCode на true
        setViewedCode(true)
    }

    return (
        <div>
            <form className='auth_page'>
                <span className='auth_pagetitle'>Відновлення паролю</span>
                {viewedEmail === false ?
                    <div>
                        <p className='txt_recovery'>Введіть адресу електронної пошти або номер,
                            до якої прив`язаний ваш обліковий запис. </p>
                        <div className='auth_login'>
                            <span className='auth_span'>Ел. пошта:</span>
                            <input className='auth_input' required type="text" placeholder='enter email...' onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='auth_error'>{error}</div>
                        <div className='aboba'><button className='recovery_button' onClick={loginFunc}>Продовжити</button></div>
                    </div> :
                    viewedCode === false ?
                        <div>
                            <p className='txt_recovery'>На Вашу електронну пошту надіслано лист. Введіть 4 цифри які прйшли вам  </p>
                            <div className='auth_login'>
                                <span className='auth_span'>Код активації</span>
                                <input className='auth_input' required type="text" placeholder='enter code...' onChange={e => setVerification(e.target.value)} />
                            </div>
                            <div className='auth_error'>{error}</div>
                            <div className='aboba'><button className='recovery_button' onClick={recoveryCode} >Продовжити</button></div>
                        </div> :
                        <div>
                            <div className='auth_login'>
                                <span className='auth_span'>Введіть новий пароль</span>
                                <input className='auth_input' required type="text" placeholder='enter email...' onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className='auth_login'>
                                <span className='auth_span'>Повторіть новий пароль</span>
                                <input className='auth_input' required type="text" placeholder='enter email...' onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className='auth_error'>{error}</div>
                            <div className='aboba'><button className='recovery_button' onClick={recoveryCode}>Продовжити</button></div>
                        </div>
                }

            </form>
        </div >
    )
}
export default Recovery;
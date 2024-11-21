import React from 'react';
import { Link } from 'react-router-dom'

import "./style.css"

export const AuthButtons = () => {
    return (
        <div>
            <Link to="/auth" className='authbtn'>
                Авторизація
            </Link>
            <Link to="/reg" className='authbtn'>
                Реєстрація
            </Link>
        </div>
    )
}

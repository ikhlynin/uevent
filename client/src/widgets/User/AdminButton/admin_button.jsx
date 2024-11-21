import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./style.css"

export const AdminButton = () => {
    let navigate = useNavigate();

    return (
        <span className='admin_button' onClick={() => {navigate("/admin/panel")}}> Адмін панель </span>
    )
}
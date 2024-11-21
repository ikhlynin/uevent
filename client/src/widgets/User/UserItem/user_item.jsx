import React from 'react';
// import { useNavigate } from 'react-router-dom';
import luffy from '../../../asssets/User/luffy.jpg';
import trashImg from './assets/trash-can.png';

import "./style.css"

export const UserItem = ({ name, email }) => {
    // let navigate = useNavigate();

    return (
        <div className='admin_panel_user_item'>
            <img className='admin_panel_user_avatar' src={luffy} alt="aboba" />
            <div className='admin_panel_col'>
                <p className='admin_panel_user_name'>{name}</p>
                <p className='admin_panel_user_email'>{email}</p>
            </div>
            <div className='admin_panel_user_delete'>
                <img className='admin_panel_user_delete_img' src={trashImg} alt="aboba" />
            </div>
        </div>
    )
}
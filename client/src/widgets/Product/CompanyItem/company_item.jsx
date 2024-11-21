import React from 'react';
import { useNavigate } from 'react-router-dom';
import luffy from '../../../asssets/User/luffy.jpg'

import "./style.css"

const CompanyItem = ({ name, location, email, id, idUs, img }) => {
    let navigate = useNavigate();

    return (
        <div className='item_card'>
            <div className='company-card-white'>
                <img className='companyimg' src={img} alt="aboba" />
                <p className='company-date-text'>{name}</p>
                <p className='company-name-text'>{location}</p>
                <p className='company-location-text'>{email}</p>

                <div className='company-card-pink'>
                    <p className='company-reverse-date'>{location}</p>
                    <p className='company-reverse-location'>{email}</p>
                    <p className='company-reverse-name'>{name}</p>

                    <span className='event-button' onClick={() => { navigate(`/companies/${idUs}/${id}`) }}>Детальніше</span>
                </div>
            </div>
        </div>
    )
}
export default CompanyItem;
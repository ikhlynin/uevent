import React from 'react';
import { Link } from 'react-router-dom'

import "./style.css"

export const NotFoundPage = () => {

    return (
        <div className='box_notfound_page'>
            <p className='text_page'>УПС, даної сторінки не існує</p>
            <Link to="/"><button className='button_home'>Повернутися на головну</button></Link>

        </div>
    )
}
export default NotFoundPage;
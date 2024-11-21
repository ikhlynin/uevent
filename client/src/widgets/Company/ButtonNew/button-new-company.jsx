import React from 'react';
import { Link } from 'react-router-dom'

import "./style.css"

export const NewCompany = () => {
    return (
        <Link className='button_boc_new_company' to='/company/new'>
            Створити компанію
        </Link>
    )
}
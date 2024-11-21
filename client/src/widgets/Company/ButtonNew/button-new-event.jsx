import React from 'react';
import { Link } from 'react-router-dom'

import "./style.css"

export const NewEvent = ({ idComp }) => {
    return (
        <Link className='button_boc_new_event' to={'/event/new/' + idComp}>
            Створити івент
        </Link >
    )
}
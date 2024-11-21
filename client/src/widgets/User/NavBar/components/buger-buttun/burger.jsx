import React from 'react';

import "./style.css"


export const BurgerButton = ({ active, setActive }) => {
    return (
        < div className='burger_bth' onClick={() => setActive(!active)} >

            <span />
        </div>
    )
}
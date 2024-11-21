import React, { useState } from 'react';
import activeSearch from './assets/down.png'
import search from './assets/search.png'
import inactiveSearch from './assets/up.png'

import "./style.css"

export const SearchButton = ({ active, setActive }) => {

    const [isActivesSearch/*, setIActivesSearch*/] = useState(false);
    return (
        < div className='search_bth' onClick={() => setActive(!active)} >

            {isActivesSearch === false ? <img src={activeSearch} alt="aboba" />
                : <img src={inactiveSearch} alt="aboba" />}
            <img src={search} alt="aboba" />
        </div>
    )
}
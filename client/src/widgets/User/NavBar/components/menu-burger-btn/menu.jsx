import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Context } from "../../../../../";

import "./style.css"


export const MenuBurger = ({ active, setActive, items }) => {
    const { store } = useContext(Context)
    let navigate = useNavigate();

    const checkAuth = async event => {
        event.preventDefault();
        if (!localStorage.getItem('token')) {
            navigate('/auth');
        } else {
            navigate('/profile/' + store.user.id);
        }
    }

    return (
        < div className={active ? ' menu_burger active' : ' menu_burger'} onClick={() => setActive(false)} >
            <div className='menu_blur'>
                <div className='menu__content' onClick={e => e.stopPropagation()}>
                    <Link to={`/profile/${store.user.id}`} className='menu__header' onClick={checkAuth}>Особистий кабінет</Link>
                    <ul>
                        {items.map((item, index) =>
                            <li key={index} >
                                <Link to={item.href}> <div className='menu__link'>{item.value}</div> </Link>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

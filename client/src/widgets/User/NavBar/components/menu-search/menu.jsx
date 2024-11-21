import React from 'react';
// import { Link } from 'react-router-dom'
import imgPlace from './assets/place.png'
import imgCalendar from './assets/calendar.png'


import "./style.css"


export const MenuSearch = ({ active, setActive }) => {
    const data = new Date().toISOString().slice(0, 10)
    return (
        < div className={active ? ' menu_search active' : ' menu_search'} onClick={() => setActive(false)} >
            <div className='menu_blur'>
                <div className='menu__content_search' onClick={e => e.stopPropagation()}>
                    <form className='search_form'>
                        <input className='input_form_search' type='text' placeholder='Введіть назву або виконавця' />
                        <div className='place_search'>
                            <img src={imgPlace} alt="aboba" />
                            <select className='select_form_search'>
                                <option>Усі</option>
                                <option>Київ</option>
                                <option>Харків</option>
                                <option>Чернівці</option>
                            </select>
                        </div>

                        <div className='place_search'>
                            <img src={imgCalendar} alt="aboba" />
                            <input className='input_form_search input_form_datew' type='date' placeholder='Введіть назву або виконавця' value={data} />
                        </div>

                        <button className='button_search_form'>Пошук</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

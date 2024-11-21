import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import { EventItem } from '../EventItem'

import "./style.css"

export const SortCategoru = () => {
    const { category } = useParams();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        switch (category) {
            case "concerts":
                return setEvents("Концерти")
            case 'theatre':
                return setEvents("Театри")
            case 'standup':
                return setEvents("Стендапи")
            case 'seminars':
                return setEvents("Семінари")
            case 'sport':
                return setEvents("Спорт")
            default:
                return setEvents("Усі")
        }

    }, [category])


    return (
        <div className='box_product_main_page'>
            <div className='category_prodycts'>{events}</div>
            {/* <EventItem eventItems={eventItems} categoruID={item.id} /> */}
        </div>
    )
}
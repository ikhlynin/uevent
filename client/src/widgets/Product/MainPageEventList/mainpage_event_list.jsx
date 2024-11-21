import React from 'react';
import { Link } from 'react-router-dom';
import arrow from './assets/right-arrow.png'
import EventItem from '../EventItem/event_item';

import "./style.css"

export const MainPageEventList = ({ eventItems, categoruID }) => {
    return (
        <div className='box_one_category_product'>
            {eventItems.slice(0, 5).map((item, index) =>
                <EventItem areYouAuthor={false} key={index} img={item.img} date={item.date} name={item.name} location={item.location} city={item.city} price={item.price} />
            )}
            {eventItems.length > 4 ? <Link to={`/event/${categoruID}`}>
                <div className='all_product_one_catgory_button'>
                    Переглянути усі
                    <img className='arrow_all' src={arrow} alt="aboba" />
                </div>
            </Link> : ''}
        </div>
    )
}
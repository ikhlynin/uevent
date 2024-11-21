import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../..';
import { useParams } from 'react-router-dom';

import Pagination from '../Pagination/pagination';
import EventItem from '../EventItem/event_item';

import "./style.css"

export const ProductItemsCat = () => {
    const [page, setPage] = useState([0]);
    const { store } = useContext(Context)
    const { idUs, id } = useParams();
    const [events, setEvents] = useState([]);
    const [areYouAuthor, setAreYouAuthor] = useState(false);

    useEffect(() => {
        async function getCompanies() {
            const data = await store.getEventOneComp(idUs, id);
            setEvents(data.data)
            if (idUs === store.user.id) { setAreYouAuthor(true) }
        }
        getCompanies();

    }, [idUs, id, events])

    return (
        <div className='box_one_category_product_aboba'>
            <div className='box_one_category_product_c'>
                {events.slice(page * 12, page * 12 + 12).map((item, index) =>
                    <EventItem key={index} areYouAuthor={areYouAuthor} img={item.img} date={`С ${item.dateStart.slice(0, 10)} по ${item.dateEnd.slice(0, 10)}`}
                        name={item.name} idEv={item._id} idOwner={item.owner} location={`Локація: ${item.location}`} city={`Місто: ${item.city}`} price={`Ціна: ${item.price} грн`} />
                )}
            </div>
            <Pagination quantity={events.length} numberForPage={12} current={page} change={setPage} />
        </div>
    )
}
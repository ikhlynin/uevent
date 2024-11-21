import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../..';
import { useParams } from 'react-router-dom';

import Pagination from '../Pagination/pagination';
import EventItem from '../EventItem/event_item';

import "./style.css"

export const ProductItemsCat2 = () => {
    const [page, setPage] = useState([0]);
    const { store } = useContext(Context)
    const { category } = useParams();
    const [events, setEvents] = useState([]);
    const [areYouAuthor, setAreYouAuthor] = useState(false);
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        async function getCompanies() {
            const data = await store.getAllEvent();
            setEvents(data.data)
        }
        getCompanies();

        setFilteredEvents(events.filter((el) => {
            switch (category) {
                case "concerts":
                    return el.category.includes("Концерти")
                case 'theatre':
                    return el.category.includes("Театр")
                case 'standup':
                    return el.category.includes("Стендап")
                case 'seminars':
                    return el.category.includes("Семінари")
                case 'sport':
                    return el.category.includes("Спорт")
                default:
                    return el
            }
        }))

    }, [events])

    return (
        <div className='box_one_category_product_aboba'>
            <div className='box_one_category_product_c'>
                {filteredEvents.slice(page * 12, page * 12 + 12).map((item, index) =>
                    <EventItem key={index} areYouAuthor={areYouAuthor} img={item.img} date={`С ${item.dateStart.slice(0, 10)} по ${item.dateEnd.slice(0, 10)}`}
                        name={item.name} idEv={item._id} idOwner={item.owner} location={`Локація: ${item.location}`} city={`Місто: ${item.city}`} price={`Ціна: ${item.price} грн`} />
                )}
            </div>
            <Pagination quantity={events.length} numberForPage={12} current={page} change={setPage} />
        </div>
    )
}
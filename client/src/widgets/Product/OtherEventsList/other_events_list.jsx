import React, { useState } from 'react';
import Pagination from '../../Product/Pagination/pagination';
import EventItem from '../EventItem/event_item';

const OtherEventsList = ({ organizersEvents, UpperText }) => {
    const [eventsPage, setEventsPage] = useState([0]);
    // const organizersEvents = [{ date: "12.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "200" },
    // { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    // { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
    // { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    // { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
    // { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    // { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
    // { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    // { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" }]

    return (
        <div className='event_opened_subslist'>
            <p className='event_opened_description'>{UpperText}</p>
            <div className='event_opened_flex_row'>
                {organizersEvents.length > 0
                    ?
                    organizersEvents.slice(eventsPage * 3, eventsPage * 3 + 3).map((item, index) =>
                        <EventItem areYouAuthor={false} key={index} img={item.img} date={`С ${item.dateStart.slice(0, 10)} по ${item.dateEnd.slice(0, 10)}`}
                            name={item.name} idEv={item._id} idOwner={item.owner} location={`Локація: ${item.location}`} city={`Місто: ${item.city}`} price={`Ціна: ${item.price} грн`} />
                    ) : ''}

            </div>
            <Pagination quantity={organizersEvents.length} numberForPage={3} current={eventsPage} change={setEventsPage} />
        </div>
    )
}
export default OtherEventsList;
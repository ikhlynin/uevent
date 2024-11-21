import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../..';

const EventItem = ({ areYouAuthor, img, idEv, idOwner, date, name, location, city, price, setCheck }) => {
    const { store } = useContext(Context)
    let navigate = useNavigate();
    let isSubscribed = false;
    const { idUs, id } = useParams();

    const deleteEvent = async event => {
        event.preventDefault();
        navigate('/companies/' + idUs + '/' + id);
        await store.deletEvent(idEv);
    }
    return (
        <div className='item_card'>
            <div className='card-white'>
                <img className='eventimg' src={img} alt="aboba" />
                <p className='event-date-text'>{date}</p>
                <p className='event-name-text'>{name}</p>
                <p className='event-location-text'>{location}</p>
                <p className='event-city-text'>{city}</p>
                <p className='event-price-text'>{price}</p>
                <div className='card-pink'>
                    <p className='event-reverse-date'>{date}</p>
                    <p className='event-reverse-location'>{location}</p>
                    <p className='event-reverse-name'>{name}</p>
                    {areYouAuthor ? <div className='event_flex_col'>
                        <span className='event-button btn2' onClick={() => { navigate(`/event/edit/${idEv}`) }}>Редагувати</span>
                        <span className='event-button btn2' onClick={deleteEvent}>Видалити</span>
                        <span className='event-button btn2' onClick={() => { navigate(`/event/open/${idOwner}/${idEv}`) }}>Переглянути </span>
                    </div>
                        : <span className='event-button' onClick={() => { navigate(`/event/open/${idOwner}/${idEv}`) }}>Придбати</span>
                    }
                </div>
            </div>
        </div>
    )
}
export default EventItem;
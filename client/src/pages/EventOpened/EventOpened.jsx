import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from "../../";

import { NavBar } from '../../widgets/User/NavBar'
import LocationMap from '../../widgets/Product/LocationMap/location_map';
import Comments from '../../widgets/User/Comments/comments';
import SubsList from '../../widgets/User/SubsList/subs_list';
import OtherEventsList from '../../widgets/Product/OtherEventsList/other_events_list';
import luffy from './assets/luffy.jpg';

import "./style.css"

const EventOpened = () => {
    const { store } = useContext(Context)
    const date = new Date().toISOString().slice(0, 10)

    const [isSubscribedVar, setIsSubscribedVar] = useState("false");
    const [buttonText, setButtonText] = useState();
    let navigate = useNavigate();
    const { id, idOwner } = useParams()

    const [img, setImg] = useState();
    const [avatar, setAvatar] = useState(null);
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [type, setType] = useState("Концерти");
    const [startDate, setStartDate] = useState(date);
    const [endDate, setEndDate] = useState(date);
    const [location, setLocation] = useState();
    const [city, setCity] = useState();
    const [price, setPrice] = useState();
    const [dataUserEvent, setUserEvents] = useState([]);
    const [organizersEvents, setOrganizersEvents] = useState([]);

    window.scrollTo(0, 0);

    useEffect(() => {
        async function getCompanies() {
            const data2 = await store.getEventOneUS(idOwner, id);
            const data = await store.getEvent(id);
            const data3 = await store.allSubscriber(id);
            setUserEvents(data3.data)
            setName(data.data.name)
            setDescription(data.data.description)
            setType(data.data.category)
            setStartDate(data.data.dateStart.slice(0, 10))
            setEndDate(data.data.dateEnd.slice(0, 10))
            setLocation(data.data.location)
            setCity(data.data.city)
            setPrice(data.data.price)
            setImg(data.data.img)
            setOrganizersEvents(data2.data)
            if (data3.data[0]._id === store.user.id) {
                setIsSubscribedVar("true");
            }
            else {
                setIsSubscribedVar("false");
            }

            if (isSubscribedVar === "true") {
                setButtonText("Ви підписані");
            }
            else {
                setButtonText(price === "Безкоштовно" ? `${price}` : `${price} грн`);
            }
        }
        getCompanies();
    }, [price, id])

    function onhover() {
        if (isSubscribedVar !== "true")
            setButtonText("Підписатися");
        else
            setButtonText("Відписатися");
    }

    function offhover() {

        if (isSubscribedVar !== "true")
            setButtonText(price === "Безкоштовно" ? `${price}` : `${price} грн`);
        else
            setButtonText("Ви підписані");
    }

    const checkAuth = async event => {
        event.preventDefault();
        if (store.isAuth) {
            switch (isSubscribedVar) {
                case "true": {
                    setIsSubscribedVar("false"); break;
                }
                default: {
                    if (price !== "Безкоштовно")
                        navigate(`/event/payment/${id}`);
                    else
                        setIsSubscribedVar("true");
                }
            }
        }
    }

    return (
        <div>
            <NavBar />

            <div className='event_opened_content'>

                <div>
                    <div className='event_opened_flex_row'>
                        <div>  <img className=' aboba_ev' src={img} alt="aboba" /></div>

                        <div className='event_opened_flex_col c'>
                            <div className='event_opened_name_box'>
                                <p className='event_opened_name'>{name}</p>
                            </div>
                            <p className='event_opened_date'>Дати події: {startDate}-{endDate}</p>
                            <p className='event_opened_date'>Місце проведення: {location}, {city}</p>
                            <p className='event_opened_date'>Категорія: {type}</p>

                            <span className='event_opened_button' onClick={checkAuth} onMouseEnter={onhover} onMouseLeave={offhover}>{buttonText}</span>
                        </div>
                    </div>
                    <div className='event_opened_flex_row'>
                        <LocationMap />
                        <div className='event_opened_flex_col c'>

                            <p className='event_opened_description'>Опис події</p>
                            <p className='event_opened_date aa'>{description}</p>
                        </div>
                    </div>

                </div>

            </div>

            <SubsList dataUserEvent={dataUserEvent} />
            <OtherEventsList organizersEvents={organizersEvents} UpperText={"Інші події цього організатора"} />
            <Comments />
        </div >
    )
}
export default EventOpened;
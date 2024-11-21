import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../..';
import { MainPageEventList } from '../MainPageEventList'

import "./style.css"

export const MainPageCatList = () => {
    const itemsBurger = [
        { id: '1bdehbjjebde', value: "Харків" },
        { id: '1bdehbjjebde', value: "Київ" },
        { id: '1bdehbjjebde', value: "Житомир" },]


    const [eventsPage, setEventsPage] = useState([0]);
    const [events, setEvents] = useState([0]);
    const { store } = useContext(Context)

    useEffect(() => {
        async function getCompanies() {
            const data = await store.getAllEvent();
            setEvents(data.data)
            console.log(data.data)
        }
        getCompanies();

    }, [events])

    const eventItems = [{ date: "12.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "Безкоштовно" },
    { date: "15.04.2023 - 18.04.2023", name: "Абобус", location: "Місце проведення", city: "Київ", price: "100" },
    { date: "25.04.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "150" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "17.05.2023 - 25.05.2023", name: "Абобіще", location: "Місце проведення", city: "Київ", price: "120" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" },
    { date: "02.05.2023", name: "Два абобуси", location: "Місце проведення", city: "Київ", price: "300" }]

    return (
        <div>
            {itemsBurger.map((item, index) =>
                <div className='box_product_main_page' key={index}>
                    <div className='category_prodyct'>{item.value}</div>
                    <MainPageEventList eventItems={events} categoruID={item.id} />
                </div>)}
        </div>
    )
}


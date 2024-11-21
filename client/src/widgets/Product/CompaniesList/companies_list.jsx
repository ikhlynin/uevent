import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from "../../../";

import Pagination from '../../Product/Pagination/pagination';
import CompanyItem from '../CompanyItem/company_item';

import './style.css'
import { Link } from 'react-router-dom';

const CompaniesList = () => {
    const { store } = useContext(Context)
    const [page, setPage] = useState([0]);
    const [companies, setCompanies] = useState([0]);
    const { id } = useParams();
    const companies1 = [{ name: "name", location: "location", email: "aboba@gmail.com" },
    { name: "name", location: "location", email: "aboba@gmail.com" },
    { name: "name", location: "location", email: "aboba@gmail.com" },
    { name: "name", location: "location", email: "aboba@gmail.com" },
    { name: "name", location: "location", email: "aboba@gmail.com" },
    { name: "name", location: "location", email: "aboba@gmail.com" },
    { name: "name", location: "location", email: "aboba@gmail.com" }]


    useEffect(() => {
        async function getCompanies1() {
            const data = await store.getCompanies(id);
            setCompanies(data.data)
        }
        getCompanies1();
    })


    if (companies.length !== 0)
        return (
            <div className='event_opened_subslist'>
                <p className='event_opened_description'>Мої компанії</p>
                <div className='event_opened_flex_row'>
                    {companies.slice(page * 3, page * 3 + 3).map((item, index) =>
                        <CompanyItem name={item.name} key={index} location={item.location} email={item.email} idUs={id} id={item._id} img={item.img} />
                    )}
                </div>
                <Pagination quantity={companies.length} numberForPage={3} current={page} change={setPage} />
            </div>
        )
    else
        return (
            <div className='event_opened_subslist'>
                <p className='event_opened_description'>Мої компанії</p>
                <div className='comp_list_new'>
                    <Link to="/company/new" className='comp_list_new_button'>Створити компанію</Link>
                </div>
                <Pagination quantity={companies.length} numberForPage={3} current={page} change={setPage} />
            </div>
        )
}
export default CompaniesList;
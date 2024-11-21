import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from "../../../";
import { NewCompany, NewEvent } from '../ButtonNew';

import settings from './assets/settings.png'

import "./style.css"

export const MainCardCompany = () => {
    const { store } = useContext(Context)
    const { idUs, id } = useParams();
    const [name, setName] = useState();
    const [imgC, setImg] = useState();
    const [description, setDescription] = useState("ffffffff");
    const [email, setEmail] = useState([]);
    const [location, setLocation] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [isDropdownShown, setIsDropdownShown] = useState(false);
    const [isButtonShow, setIsButtonShow] = useState(true);
    const [areYouAuthor, setAreYouAuthor] = useState(false);

    useEffect(() => {
        async function getCompanies() {
            const data = await store.getCompanies(idUs);
            setCompanies(data.data)
            if (idUs === store.user.id) { setAreYouAuthor(true) }
            const filterCompany = companies.filter((el) => { return el._id.includes(id) })
            setName(filterCompany[0].name)
            setDescription(filterCompany[0].description)
            setEmail(filterCompany[0].email)
            setLocation(filterCompany[0].location)
            setImg(filterCompany[0].img)
        }
        getCompanies();

        companies.length === 6 ? setIsButtonShow(false) : setIsButtonShow(true);
    })

    const showDropdown = event => {
        if (isDropdownShown)
            setIsDropdownShown(false);
        else {
            setIsDropdownShown(true);
        }
    }


    return (
        <div className='card_box_pr'>
            <div>  <img className='img_avatar_pr' src={imgC} alt="aboba" /></div>
            <div className='data_box_cmp'>

                <div className='year_select' onClick={showDropdown}>
                    <p>{name}</p>
                    <div className={isDropdownShown ? 'year_dropdown shown' : 'year_dropdown hidden'}>
                        {companies.map((item, index) =>
                            <Link to={`/companies/${idUs}/${item._id}`} className='year'
                                key={index}>{item.name}</Link>
                        )}
                    </div>
                </div>
                <p className='description_cmp'>Опис: {description}</p>
                <p className='data_cmp'>Імейл: {email}</p>
                <p className='data_cmp'>Локація: {location}</p>
            </div>
            {areYouAuthor ?
                <Link className='setting_link_cmp' to={`/company/edit/${idUs}/${id}`} >
                    <img className='img_setting_cmp' src={settings} />
                </Link> : ''}
            {areYouAuthor ?
                <div>
                    {isButtonShow ? <NewCompany /> : ""}
                    <NewEvent idComp={id} />
                </div>
                : ''}

        </div >
    )
}
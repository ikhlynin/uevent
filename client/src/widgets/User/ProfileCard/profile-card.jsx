import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../../..";
import CompaniesList from '../../Product/CompaniesList/companies_list';
import settings from './assets/settings.png'

import "./style.css"
import OtherEventsList2 from '../../Product/OtherEventsList/other_events_list2';

export const ProfileCard = () => {
    const { store } = useContext(Context)

    const UpperText1 = "Історія покупок"
    // const UpperText2 = "Мої компанії"
    const countMassege = 0;// количство непрочитаніх сообщ
    const [dataHistory, setDataHistory] = useState([]);
    useEffect(() => {
        async function getCompanies() {
            const data2 = await store.getHistory(store.user.id);
            setDataHistory(data2.data)
        }
        getCompanies();
    }, [])

    return (
        <div>
            <div className='card_box_pr'>
                <div>  <img className='img_avatar_pr' src={store.user.img} alt="aboba" /></div>
                <div className='data_user_pr'>
                    <p className='name_user_pr'>{store.user.name}</p>
                    <p className='status_user_pr'>Статус:{store.user.status}</p>
                </div>
                <div className='box_link_button_pr'>
                    <Link className='message_link_pr' to='/notifications'>
                        <div className='count_message_block_pr'>
                            {countMassege > 99 ? <p>99+</p> : <p>{countMassege}</p>}
                        </div>
                    </Link>
                    <Link className='setting_link_cmp' to='/profile/settings'>
                        <img className='img_setting_cmp' src={settings} alt="aboba" />
                    </Link>
                </div>
            </div>
            <OtherEventsList2 UpperText={UpperText1} dataHistory={dataHistory} />
            {/* <OtherEventsList UpperText={UpperText1} /> */}
            <CompaniesList />
        </div>)


}
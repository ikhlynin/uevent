import React from 'react';

import "./style.css"

export const Notifications = () => {
const messagesList = [/*{ name: "frfr", date: "2023-04-19-2023-04-19", location: "event location" }*/]

    return (
        <div className='notif_box'>
            <p className='notif_upper_text'>Сповіщення</p>
            <div className='notif_message_box'>
                {messagesList.map(item =>
                    <div className='notif_message_item'>
                        <div className='notif_column'>
                            <div className='notif_row'>
                                <p className='notif_date'>{item.date}</p>
                                <p className='notif_location'>{item.location}</p>
                            </div>
                            <p className='notif_name'>{item.name} скоро почнеться!</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
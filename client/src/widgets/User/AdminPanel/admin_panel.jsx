import React, { useState } from 'react';
import { UserItem } from '../UserItem'
// import { useNavigate } from 'react-router-dom';

import "./style.css"

const userList = [{ name: "Максим", email: "mocusu@mailto.plus" },
{ name: "Денчік", email: "gehopij464@lieboe.com" },
{ name: "Артем", email: "kakala8721@hrisland.com" },
{ name: "Луффі", email: "perahe6526@momoshe.com" },
{ name: "aboba2", email: "apple1213243@gmail.com" },
{ name: "aboba3", email: "sdasw3423rdas@gmail.com" },
{ name: "aboba4", email: "grape121@gmail.com" }]

export const AdminPanel = () => {
    const [select, setSelect] = useState('name');
    const [search, setSearch] = useState('');
    // let navigate = useNavigate();

    const filteredUserList = userList.filter((el) => {
        if (search === '') {
            return el;
        }
        else {
            if (select === 'name')
                return el.name.toLowerCase().includes(search.toLowerCase())
            else
                return el.email.toLowerCase().includes(search.toLowerCase())
        }
    })

    return (
        <div className='admin_panel_box'>
            <p className='admin_panel_uppertext'>Список користувачів</p>

            <div className='admin_panel_listbox'>
                <input className='admin_panel_input' type="text" placeholder='search users...' value={search} onChange={e => setSearch(e.target.value)} />
                <select className='admin_panel_select' value={select} onChange={e => setSelect(e.target.value)}>
                    <option value="name">by name</option>
                    <option value="email">by email</option>
                </select>
            </div>

            <div className='admin_panel_listbox'>
                {filteredUserList.map((item, index) =>
                    <UserItem name={item.name} email={item.email} key={index} />
                )}
            </div>
        </div>
    )
}
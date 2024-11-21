import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../../../";

import "./style.css"

export const ProfileSettingsForm = () => {
    const { store } = useContext(Context)
    const [error, setError] = useState(store.user.name);
    let navigate = useNavigate();


    const [userName, setUserName] = useState(store.user.name);
    const [userStatus, setUserStatus] = useState(store.user.status ? store.user.status : '');
    const [userEmail, setUserEmail] = useState(store.user.email)
    const [img, setImg] = useState(null);
    const [avatar, setAvatar] = useState(null);

    const updateUser = async event => {
        event.preventDefault();
        const errorMessage = await store.updateUser(img, userName, userStatus);
        if (errorMessage !== true) {
            setError(errorMessage.response.data.message)
        }
        else {
            navigate('/profile/' + store.user.id);
        }

    }

    const onChangePicture = e => {
        setImg(e.target.files[0])
        setAvatar(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <form className='profset_box'>
            <p className='profset_upper_text'>Налаштування профілю</p>
            {avatar ?
                <img className='profset_avatar' src={avatar} alt="aboba" /> :
                <img className='profset_avatar' src={store.user.img} alt="aboba" />
            }
            {/* <img className='profset_avatar' src={store.user.img} alt="aboba" /> */}
            <label className="profset_avatar_label">
                Загрузити аватар
                {/* e => setImg(e.target.files[0]) */}
                <input type="file" name="file" accept="image/*,.png,.jpg" onChange={onChangePicture} id="file_in" className="profset_avatar_input" />
            </label>

            <div className='profset_editable_box'>
                <div className='profset_row'>
                    <div className='profset_col'>
                        <p className='pofset_input_text'>Ім'я: </p>
                        <p className='pofset_input_text'>Статус: </p>
                        <p className='pofset_input_text'>Імейл: </p>
                    </div>
                    <div className='profset_col'>
                        <input className='profset_input' placeholder='current name' type="text" value={userName} onChange={e => setUserName(e.target.value)} />
                        <input className='profset_input' placeholder='current status' type="text" value={userStatus} onChange={e => setUserStatus(e.target.value)} />
                        <input className='profset_input' placeholder='current email' type="text" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
                    </div>
                </div>
            </div>
            <button className='profset_button' onClick={updateUser} >Змінити данні</button>

        </form>
    )
}

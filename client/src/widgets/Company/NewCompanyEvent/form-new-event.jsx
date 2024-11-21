import React, { useState, useContext } from 'react';
import { Context } from "../../../";
import { useParams, useNavigate } from 'react-router-dom';

import "./style.css"

export const FormNewEvent = () => {
    const date = new Date().toISOString().slice(0, 10)
    const { store } = useContext(Context)
    const [error, setError] = useState();
    let { idComp } = useParams();
    let navigate = useNavigate();

    const [imgC, setImg] = useState();
    const [avatar, setAvatar] = useState(null);

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [type, setType] = useState("Концерти");
    const [startDate, setStartDate] = useState(date);
    const [endDate, setEndDate] = useState(date);
    const [location, setLocation] = useState();
    const [city, setCity] = useState();
    const [price, setPrice] = useState();

    const newEvent = async event => {
        event.preventDefault();
        const errorMessage = await store.newEvent(imgC, name, description, type, startDate, endDate, location, city, price, idComp);
        if (errorMessage.response !== undefined) {
            setError(errorMessage.response.data.message)
        }
        else {
            navigate('/companies/' + errorMessage.owner + '/' + errorMessage.company);
        }

    }

    const onChangePicture = e => {
        setImg(e.target.files[0])
        setAvatar(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className='card_box_pr'>
            <form className='form_cmp'>
                <div className='header_form_cmp'>Новий івент</div>
                <div className='update_avatar_form_cmp'>
                    <div>
                        {avatar ?
                            <img className='profset_avatar' src={avatar} alt="aboba" />
                            : <div className='profset_avatar'> </div>

                        }
                    </div>
                    <label className="feedback_label">
                        Загрузити файл
                        <input type="file" id="file_in" accept="image/*,.png,.jpg" className="feedback_file" onChange={onChangePicture} />
                    </label>
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Назва івенту:</span>
                    <input className='input_from_cmp' onChange={e => setName(e.target.value)} required type="text" placeholder='Введіть назву компанії' />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Опис івенту</span>
                    <input className='input_from_cmp' onChange={e => setDescription(e.target.value)} required type="text" placeholder='Введіть опис компанії' />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Тип </span>
                    <select className='input_from_cmp' onChange={e => setType(e.target.value)} name="" id="">
                        <option value="Концерти">Концерти</option>
                        <option value="Театр">Театр</option>
                        <option value="Стендап">Стендап</option>
                        <option value="Семінари та тренінги">Семінари та тренінги</option>
                        <option value="Спорт">Спорт</option>
                    </select>
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Дата початку </span>
                    <input className='input_from_cmp' onChange={e => setStartDate(e.target.value)} type="date" id="start" name="trip-start" value={startDate} />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Дата кінця </span>
                    <input className='input_from_cmp' onChange={e => setEndDate(e.target.value)} type="date" id="start" name="trip-start" value={endDate} />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Локація:</span>
                    <input className='input_from_cmp' onChange={e => setLocation(e.target.value)} required type="text" placeholder='Введіть локацію' />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Місто:</span>
                    <input className='input_from_cmp' onChange={e => setCity(e.target.value)} required type="text" placeholder='Введіть локацію' />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Координати</span>
                    <input className='input_from_cmp' required type="text" placeholder='Введіть координати місця' />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Ціна:</span>
                    <input className='input_from_cmp' onChange={e => setPrice(e.target.value)} required type="number" placeholder='Введіть локацію' />
                </div>

                <button className='update_button_form_cmp' onClick={newEvent}>Створити івент</button>
            </form>
        </div>
    )
}
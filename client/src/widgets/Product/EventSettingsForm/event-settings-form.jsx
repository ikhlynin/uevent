import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Context } from "../../../";

export const EventSettingsForm = () => {
    const date = new Date().toISOString().slice(0, 10)
    const { store } = useContext(Context)
    let navigate = useNavigate();
    const { id } = useParams()

    const [error, setError] = useState();
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
    const [dataEvent, setEvents] = useState();

    const updateEvent = async event => {
        event.preventDefault();
        const errorMessage = await store.updateEvent(img, id, name, description, type, startDate, endDate, location, city, price);
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

    useEffect(() => {
        async function getCompanies() {
            const data = await store.getEvent(id);
            setName(data.data.name)
            setDescription(data.data.description)
            setType(data.data.category)
            setStartDate(data.data.dateStart.slice(0, 10))
            setEndDate(data.data.dateEnd.slice(0, 10))
            setLocation(data.data.location)
            setCity(data.data.city)
            setPrice(data.data.price)
            setImg(data.data.img)
        }
        getCompanies();
    }, [])

    return (
        <div className='card_box_pr'>
            <form className='form_cmp'>
                <div className='header_form_cmp'>Налаштування івенту</div>
                <div className='update_avatar_form_cmp'>
                    <div>
                        {avatar ?
                            <img className='profset_avatar' src={avatar} alt="aboba" />
                            : <img className='profset_avatar' src={img} alt="aboba" />

                        }
                    </div>
                    <label className="feedback_label">
                        Загрузити файл
                        <input type="file" id="file_in" accept="image/*,.png,.jpg" className="feedback_file" onChange={onChangePicture} />
                    </label>
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Назва івенту:</span>
                    <input className='input_from_cmp' onChange={e => setName(e.target.value)} required type="text" placeholder='Введіть назву компанії' value={name} />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Опис івенту</span>
                    <input className='input_from_cmp' onChange={e => setDescription(e.target.value)} required type="text" placeholder='Введіть опис компанії' value={description} />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Тип </span>
                    <select className='input_from_cmp' onChange={e => setType(e.target.value)} value={type}>
                        <option value="Концерти">Концерти</option>
                        <option value="Театр">Театр</option>
                        <option value="Стендап">Стендап</option>
                        <option value="Семінари">Семінари</option>
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
                    <input className='input_from_cmp' onChange={e => setLocation(e.target.value)} required type="text" placeholder='Введіть локацію' value={location} />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Місто:</span>
                    <input className='input_from_cmp' onChange={e => setCity(e.target.value)} required type="text" placeholder='Введіть локацію' value={city} />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Координати:</span>
                    <input className='input_from_cmp' required type="text" placeholder='Введіть координати' value={"49.986909, 36.381207"} />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Ціна:</span>
                    <input className='input_from_cmp' onChange={e => setPrice(e.target.value)} required type="number" placeholder='Введіть локацію' value={price} />
                </div>

                <button className='update_button_form_cmp' onClick={updateEvent}>Змінити інформацію</button>
            </form>
        </div>
    )
}
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from "../../../";
import { useNavigate } from 'react-router-dom';

import "./style.css"

export const FormCompany = () => {
    const { store } = useContext(Context)
    const { idUs, id } = useParams();
    let navigate = useNavigate();

    const [error, setError] = useState();
    const [imgC, setImg] = useState();
    const [avatar, setAvatar] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState([]);
    const [location, setLocation] = useState([]);

    const updateCompany = async event => {
        event.preventDefault();

        const errorMessage = await store.updateCompany(imgC, id, name, description, email, location);

        if (errorMessage.response !== undefined) {
            setError(errorMessage.response.data.message)
        }
        else {
            navigate('/companies/' + idUs + '/' + id);

        }
    }
    const deleteCompany = async event => {
        event.preventDefault();
        navigate('/profile/' + idUs);
        await store.deletCompany(id);
    }

    const onChangePicture = e => {
        setImg(e.target.files[0])
        setAvatar(URL.createObjectURL(e.target.files[0]));
    };


    useEffect(() => {
        async function getCompanies() {
            const data = await store.getCompany(id, idUs);
            setName(data.data.name)
            setDescription(data.data.description)
            setEmail(data.data.email)
            setLocation(data.data.location)
            setImg(data.data.img)
        }
        getCompanies();
    }, [])

    return (
        <div className='card_box_pr'>
            <form className='form_cmp'>
                <div className='header_form_cmp'>Дані компанії</div>
                <div className='update_avatar_form_cmp'>
                    <div>
                        {avatar ?
                            <img className='profset_avatar' src={avatar} alt="aboba" /> :
                            <img className='profset_avatar' src={imgC} alt="aboba" />
                        }
                        {/* <img className='img_avatar_pr' src={imgC} alt="aboba" /> */}
                    </div>
                    {/*  <input className='input_file_from_cmp' type="file" /> */}
                    <label className="feedback_label">
                        Загрузити файл
                        <input type="file" id="file_in" accept="image/*,.png,.jpg" className="feedback_file" onChange={onChangePicture} />
                    </label>
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Назва компанії:</span>
                    <input className='input_from_cmp' required type="text" value={name} placeholder='Введіть назву компанії' onChange={e => setName(e.target.value)} />
                </div>

                <div className='comp_error_cmp'>{error}</div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Опис компанї:</span>
                    <input className='input_from_cmp' required type="text" value={description} placeholder='Введіть опис компанії' onChange={e => setDescription(e.target.value)} />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Еmail:</span>
                    <input className='input_from_cmp' required type="text" value={email} placeholder='Введіь email' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Локація:</span>
                    <input className='input_from_cmp' required type="text" value={location} placeholder='Введіть локацію' onChange={e => setLocation(e.target.value)} />
                </div>
                <div className='box_input_from_cmp'>
                    <button className='update_button_form_cmp' onClick={deleteCompany} >Видалити</button>
                    <button className='update_button_form_cmp' onClick={updateCompany} >Змінити данні</button>
                </div>
            </form>
        </div>
    )
}
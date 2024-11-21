import React, { useState, useContext } from 'react';
import { Context } from "../../../";
import { useNavigate } from 'react-router-dom';

import "./style.css"

export const FormNewCompany = () => {

    const { store } = useContext(Context)
    const [error, setError] = useState();
    let navigate = useNavigate();

    const [imgC, setImg] = useState();
    const [avatar, setAvatar] = useState(null);
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [email, setEmail] = useState([]);
    const [location, setLocation] = useState([]);


    const newCompany = async event => {
        event.preventDefault();
        const errorMessage = await store.newCompany(imgC, name, description, email, location);
        if (errorMessage.response !== undefined) {
            setError(errorMessage.response.data.message)
        }
        else {
            navigate('/companies/' + errorMessage.owner + '/' + errorMessage.id);

        }

    }

    const onChangePicture = e => {
        setImg(e.target.files[0])
        setAvatar(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className='card_box_pr'>
            <form className='form_cmp'>
                <div className='header_form_cmp'>Нова компанія</div>
                <div className='update_avatar_form_cmp'>
                    <div>
                        {avatar ?
                            <img className='profset_avatar' src={avatar} alt="aboba" />
                            : <div className='profset_avatar'> </div>

                        }
                        {/* <img className='img_avatar_pr' src={imgC} alt="aboba" /> */}
                    </div>
                    {/* <div>  <img className='img_avatar_pr' src={companyAvatar} alt="aboba" /></div> */}
                    {/*  <input className='input_file_from_cmp' type="file" /> */}
                    <label className="feedback_label">
                        Загрузити файл
                        <input type="file" id="file_in" accept="image/*,.png,.jpg" className="feedback_file" onChange={onChangePicture} />
                    </label>
                </div>

                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Назва компанії:</span>
                    <input className='input_from_cmp' required type="text" placeholder='Введіть назву компанії' onChange={e => setName(e.target.value)} />
                </div>
                <div className='comp_error_cmp'>{error}</div>
                <div className=' box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Опис компанї:</span>
                    <input className='input_from_cmp' required type="text" placeholder='Введіть опис компанії' onChange={e => setDescription(e.target.value)} />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Еmail:</span>
                    <input className='input_from_cmp' required type="email" placeholder='Введіь email' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Локація:</span>
                    <input className='input_from_cmp' required type="text" placeholder='Введіть локацію' onChange={e => setLocation(e.target.value)} />
                </div>

                <button className='update_button_form_cmp' onClick={newCompany}>Створити компаію</button>
            </form>
        </div>
    )
}
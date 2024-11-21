import React from 'react';
import { Link } from 'react-router-dom';
import inImg from './assets/in.jpg';
import instImg from './assets/inst.jpg';
import tvImg from './assets/tv.jpg';

import "./style.css"

export const Footer = () => {
    return (
        <div className='footer_box'>
            <div className='footer_space_betw'>
                <div className='footer_col'>
                    <Link to='/' className='home_nema'>ᑗᙍᐻᙍᘉᖶ</Link>
                    <div className='footer_row'>
                        <img className='footer_img' src={instImg} alt="aboba" />
                        <img className='footer_img' src={tvImg} alt="aboba" />
                        <img className='footer_img' src={inImg} alt="aboba" />
                    </div>
                </div>
                <div className='footer_col'>
                    <p className='footer_contacts_text'>Інформація для зв'язку:</p>
                    <p className='footer_contacts_text_grey'>+38(057)738-11-05</p>
                    <p className='footer_contacts_text_grey'>вул Академіка Павлова, 46</p>
                </div>
            </div>
        </div>
    )
}

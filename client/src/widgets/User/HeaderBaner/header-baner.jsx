import React/*, { useState, Component }*/ from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forest from './assets/natureforesttreesfog.jpg'
import flowers from './assets/flowers.jpg'
import edvard from './assets/edvard.jpg'
// import { Link } from 'react-router-dom'

import "./style.css"

export const HeaderBaner = () => {
    return (
        <div className='headerbanner'>
            <Carousel>
                <Carousel.Item>
                    <img src={forest} alt="aboba" className='bannerimg' />
                    <Carousel.Caption>
                        <h3>Кепмінг</h3>
                        <p>Спорт, с.Волохів Яр</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={flowers} alt="aboba" className='bannerimg' />
                    <Carousel.Caption>
                        <h3>Йога на свіжому повітрі</h3>
                        <p>Спорт, м.Харків</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={edvard} alt="aboba" className='bannerimg' />
                    <Carousel.Caption>
                        <h3>Як не спати ночами</h3>
                        <p>Семінар, м.Харків</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel >
        </div>
    )
}
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Context } from "../../";
import GooglePayButton from '@google-pay/button-react'

import "./style.css"

export const PaymentPage = () => {
    const { id } = useParams();
    const { store } = useContext(Context)
    // const { date, name, location, city, price } = useParams();
    const [idOwner, setIdOwner] = useState();
    const [eventName, setEventName] = useState();
    const [price, setPrice] = useState();
    const [yourName, setYourName] = useState();
    const [surname, setSurname] = useState();
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [promocode, setPromocode] = useState('10');
    const [thirdname, setThirdname] = useState();
    const [isVisible, setIsVisible] = useState();
    let navigate = useNavigate();

    const createOrder = async event => {
        const errorMessage = await store.payEvent(store.user.id, eventName, yourName, surname, promocode, isVisible, id, price);
        if (errorMessage.response !== undefined) {
            // setError(errorMessage.response.data.message)
        }
        else {
            navigate(`/event/open/${idOwner}/${id}`);

        }
    }
    useEffect(() => {
        async function getCompanies() {
            const data = await store.getEvent(id);
            setEventName(data.data.name)
            setPrice(data.data.price)
            setDateStart(data.data.dateStart)
            setDateEnd(data.data.dateEnd)
            setIdOwner(data.data.owner)
        }
        getCompanies();
    }, [])
    return (
        <div className='pay_box'>

            <form className='form_cmp'>
                <p className='pay_uppertext'>Оплата івенту {eventName}</p>

                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Ім'я:</span>
                    <input className='input_from_cmp' required type="text" placeholder="Введіть ім'я" onChange={e => setYourName(e.target.value)} />
                </div>
                <div className=' box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Призвище:</span>
                    <input className='input_from_cmp' required type="text" placeholder='Введіть призвище' onChange={e => setSurname(e.target.value)} />
                </div>
                <div className=' box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Побатькові:</span>
                    <input className='input_from_cmp' required type="text" placeholder='Введіть побатькові' onChange={e => setThirdname(e.target.value)} />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp'>Промокод:</span>
                    <input className='input_from_cmp' required type="text" placeholder="Введіть ім'я" onChange={e => setPromocode(e.target.value)} />
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp d'>Івент: {eventName}</span>
                </div>
                <div className='box_input_from_cmp'>
                    <span className='span_input_from_cmp d'>Початок івенту: {dateStart.slice(0, 10)} по {dateEnd.slice(0, 10)}</span>
                </div>
                <div className='box_input_from_cmp'>
                    <select name="isVis" id="isVis" onChange={e => setIsVisible(e.target.value)}>
                        <option value="yes">Відображати мене на вкладці івенту</option>
                        <option value="no">Не відображати мене на вкладці івенту</option>
                    </select>
                    <label for="isVisible"></label>
                </div>
                <div className='pay_margin box_input_from_cmp'>

                    <GooglePayButton
                        environment="TEST"
                        paymentRequest={{
                            apiVersion: 2,
                            apiVersionMinor: 0,
                            allowedPaymentMethods: [
                                {
                                    type: 'CARD',
                                    parameters: {
                                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                    },
                                    tokenizationSpecification: {
                                        type: 'PAYMENT_GATEWAY',
                                        parameters: {
                                            gateway: 'example',
                                            gatewayMerchantId: 'exampleGatewayMerchantId',
                                        },
                                    },
                                },
                            ],
                            merchantInfo: {
                                merchantId: '12345678901234567890',
                                merchantName: 'Demo Merchant',
                            },
                            transactionInfo: {
                                totalPriceStatus: 'FINAL',
                                totalPriceLabel: 'Total',
                                totalPrice: `${price}`,
                                currencyCode: 'UAH',
                                countryCode: 'UA',
                            },
                            shippingAddressRequired: true,
                            callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
                        }}
                        onLoadPaymentData={createOrder}
                        onPaymentAuthorized={paymentData => {
                            return { transactionState: 'SUCCESS' }
                        }
                        }
                        onPaymentDataChanged={paymentData => {
                            return {}
                        }
                        }
                        existingPaymentMethodRequired='false'
                        buttonColor='black'
                        buttonType='Buy'
                    />
                </div>



            </form>




        </div>
    )
}
export default PaymentPage;
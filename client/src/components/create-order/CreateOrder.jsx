import './createOrder.css';
import { ItemButton } from '../item-button/ItemButton';

export const CreateOrder = () => {
    return (
        <div className='createOrder-cont'>
            <h2>
                Create <br /> 
                <span>Order</span>
            </h2>
            <div className='createOrder-cont-desc'>
                <p>
                    Lorem ipsum dolor, sitf amet consectetur adipisicing elit. Amet veritatis odit
                    tempora temporibus animi! Natus mollitia corporis nesciunt porro iste!
                </p>
                <div className='submitOrder-cont'>
                    <ItemButton 
                        title={'WhattsApp'}
                    />
                    <ItemButton 
                        title={'Telegram'}
                    />
                    <ItemButton 
                        title={'Zayavka'}
                    />
                </div>
            </div>
        </div>
    )
}
import './createOrder.css';
import { ItemButton } from '../item-button/ItemButton';

export const CreateOrder = () => {
    return (
        <section className='createOrder-cont' id='contacts'>
            <h2>
                ՊԱՏՎԻՐԵԼ <br /> 
                <span>ՀՐԱՎԵՐ</span>
            </h2>
            <div className='createOrder-cont-desc'>
                <p>
                    Էլեկտրոնային հրավեր պատվիրելու համար անհրաժեշտ է գրել մեզ ակնթարթային մեսենջերներից մեկում
                    կամ թողնել հարցում, և մենք կկապվենք ձեզ հետ։
                </p>
                <div className='submitOrder-cont'>
                    <ItemButton 
                        title={'WhattsApp'}
                        dark={true}
                    />
                    <ItemButton 
                        title={'Telegram'}
                        dark={true}
                    />
                    <ItemButton 
                        title={'Պատվիրել'}
                        dark={true}
                    />
                </div>
            </div>
        </section>
    )
}
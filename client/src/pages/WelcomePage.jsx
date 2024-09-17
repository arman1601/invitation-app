import './styles/welcomePage.css';
import { ItemButton } from '../components/item-button/ItemButton';
import { useState } from 'react';
import { Modal } from '../components/modal/Modal';

export const WelcomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='welcomePage-cont'>
                <h1>THE SEVICES <br /> WE OFFER </h1>
                <div className='welcomePage-desc'>
                    <p>
                        We are an award-winning design agency that enables <br /> brands to make their mark in history
                    </p>
                    <ItemButton title={'click me'} onClick={() => setIsOpen(true)}/>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};
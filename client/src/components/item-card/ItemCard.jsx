import './itemCard.css';
import { ItemButton } from '../item-button/ItemButton';

export const ItemCard = () => {
    return (
        <div className='itemCard-cont'>
            <div className='image'>
                <img src='/img/mockup1.png' alt='img'/>
                <p>Memories - 15000AMD</p>
            </div>
            <div className='itemCard-buttons'>
                <ItemButton title={'demo'} />
                <ItemButton title={'buy'} />
            </div>
        </div>
    )
}
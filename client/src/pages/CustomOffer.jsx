import './styles/customOffer.css';
import { CustomOfferDesc } from '../components/custom-offer-desc/CustomOfferDesc';
import { CreateOrder } from '../components/create-order/CreateOrder';

export const CustomOffer = () => {
    return (
        <div className='customOffer-cont'>
            <CustomOfferDesc 
                title={'Personal'}
                li1={'Lorem ipsum dolor sit amet consectetur adipisicing elit.cum accusantium alias deserunt voluptatibus'}
                li2={' A modi tenetur qui, deleniti iusto unde est'}
                li3={'enim corporis, expedita cum'}
                price={9500}
                priceText={'Price Is'}
            />
            <CustomOfferDesc 
                title={'Personal'}
                li1={'Lorem ipsum dolor sit amet consectetur adipisicing elit.cum accusantium alias deserunt voluptatibus'}
                li2={' A modi tenetur qui, deleniti iusto unde est'}
                li3={'enim corporis, expedita cum'}
                price={9500}
                priceText={'Price Is'}
            />
            <CreateOrder />
        </div>
    )
}
import './styles/customOffer.css';
import { CustomOfferDesc } from '../components/custom-offer-desc/CustomOfferDesc';
import { CreateOrder } from '../components/create-order/CreateOrder';

export const CustomOffer = () => {
    return (
        <div className='customOffer-cont'>
            <CustomOfferDesc 
                title={'ԱՆՀԱՏԱԿԱՆ'}
                subTitle={'ԴԻԶԱՅՆ'}
                li1={'Ձեզ համար անհատական ​​դիզայնով նոր հրավերի անհատական ​​մշակում'}
                li2={'Ձեր ցանկացած ցանկությունն իրականացնելու ունակություն'}
                li3={'Срок создания: 5-10 дней'}
                price={'50000 др.'}
            />
            <CustomOfferDesc 
                title={'ԼՐԱՑՈՒՑԻՉ'}
                subTitle={'ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ'}
                li1={'Լրացուցիչ բլոկի ինտեգրում ցանկացած դասավորության մեջ'}
                li2={' A modi tenetur qui, deleniti iusto unde est'}
                li3={'enim corporis, expedita cum'}
                price={9500}
                priceText={'Price Is'}
            />
            <CreateOrder />
        </div>
    )
}
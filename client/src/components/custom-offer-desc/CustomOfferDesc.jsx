import './customOfferDesc.css';

export const CustomOfferDesc = ({title,subTitle,li1,li2,li3,price,priceText}) => {
    return (
        <div className="personalMaket">
            <h1>{title}</h1> 
            <span>{subTitle}</span>
            <div className='personalMaket_desc'>
                <div className='hr'>
                    <ul>
                        <li>{li1}</li>
                        <li>{li2}</li>
                        <li>{li3}</li>
                    </ul>
                </div>
                <div className='personalMaket_desc_price'>
                    <h2>Արժեքը սկսած</h2>
                    <h3>{price}</h3>
                </div>
            </div>
        </div>
    )
}
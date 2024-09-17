import './customOfferDesc.css';

export const CustomOfferDesc = ({title,li1,li2,li3,price,priceText}) => {
    return (
        <div className="personalMaket">
            <h1>{title}</h1> 
            <span>Maket</span>
            <div className='personalMaket_desc'>
                <div>
                    <ul>
                        <li>{li1}</li>
                        <li>{li2}</li>
                        <li>{li3}</li>
                    </ul>
                </div>
                {/* <div>
                    <hr />
                </div> */}
                <div className='personalMaket_desc_price'>
                    <h2>{priceText} </h2>
                    <p>-</p>
                    <h3>{price}</h3>
                </div>
            </div>
        </div>
    )
}
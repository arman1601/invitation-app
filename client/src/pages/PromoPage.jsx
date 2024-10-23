import './styles/promoPage.css';

export const PromoPage = () => {
    return (
        <section className='promo-cont' id='main'>
            <div className='promo-cont-text'>
                <h1>INVITE ME</h1>
                <p>ՀՐԱՎԵՐՆԵՐ, որոնց մասին խոսում են բոլորը</p>
            </div>
            <div className='promo-cont-slider'>
                <div className='slider-inner'>
                    <img src='/img/site-mockup.jpg' alt='alt' />
                </div>
            </div>
        </section>
    );
};

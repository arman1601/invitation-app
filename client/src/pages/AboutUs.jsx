import './styles/aboutUs.css';

export const AboutUs = () => {
    return (
        <div className='aboutUs-cont'>
            <div className='aboutUs-desc'>
                <div>
                    <h3>ընտրելով էլեկտրոնային</h3>
                    <h2>ՀՐԱՎԻՐԱՏՈՄՍԵՐ</h2>
                </div>
                <ul>
                    <li>Ձեռք բերելով էլեկտրոնային հրավեր՝ դուք ստանում եք 1 տարի գործող անձնական հղում</li>
                    <li>Միջոցառման մասին բոլոր տեղեկությունները մեկ հղումով՝ ամսաթիվ, վայր, հագուստի կոդը, RSVP և այլն:</li>
                    <li>Excel աղյուսակը հարմարեցված է ձեզ համար հյուրերի պատասխաններով:</li>
                    <li>Ճիշտ է աշխատում ցանկացած հեռախոսի, նոութբուքի և համակարգչի վրա:</li>
                </ul>
            </div>
            <img src='./img/iphone.png' alt='image' />
        </div>
    )
}
import './styles/informationPage.css';
import { HashLink as Link } from 'react-router-hash-link';
export const InformationPage = () => {
    return (
        <section className='informationPage-cont'>
            <ul>
                <li>Առցանց հրավեր ստեղծելը հեշտ է:</li>
                <li>
                    Ընտրեք ձևանմուշ
                    <span>կամ ստեղծել ձեր սեփականը</span>
                </li>
                <li>
                    Անհատականացրեք այն
                    <span>ավելացրեք ձեր անունները, հարսանիքի ամսաթիվը և գտնվելու վայրը</span>
                </li>
                <li>
                    Ավելացրեք յուրահատկություն
                    <span>վերբեռնել լուսանկարներ և տառատեսակներ, փոխել գույները կամ դիզայնի այլ տարրեր</span>
                </li>
                <li>
                    Պատրաստ
                    <span>վերբեռնել լուսանկարներ</span>
                </li>
                <li>
                    <Link smooth to={'#catalog'}>
                        <button type='submit'>Սկսի՛ր</button>
                    </Link>
                </li>
            </ul>
        </section>
    )
}
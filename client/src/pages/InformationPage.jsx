import './styles/informationPage.css';

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
                    <button type='submit'>Սկսի՛ր</button>
                </li>
            </ul>
        </section>
    )
}
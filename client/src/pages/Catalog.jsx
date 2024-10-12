import './styles/catalog.css';
import { ItemCard } from '../components/item-card/ItemCard';

export const Catalog = () => {
    return (
        <div className='productList-cont'>
            <h1>ԸՆՏՐԵՔ<br /> <span>ՀՐԱՎԵՐ</span></h1>
            <div className='productList-items'>
                <ul>
                    <li>Հարսանիք</li>
                    <li>Բացիկներ</li>
                    <li>Տարեդարձ</li>
                </ul>
                <div className='itemCard'>
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
            </div>
        </div>
    )
}
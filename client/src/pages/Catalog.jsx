import './styles/catalog.css';
import { ItemCard } from '../components/item-card/ItemCard';

export const Catalog = () => {
    return (
        <div className='productList-cont'>
            <h1>HARSANIQI HRAVER</h1>
            <div className='productList-items'>
                <ul>
                    <li>Wedding</li>
                    <li>Otkritki</li>
                    <li>Den Rojdenya</li>
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
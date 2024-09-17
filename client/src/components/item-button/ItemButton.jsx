import './itemButton.css';

export const ItemButton = ({title,color,onClick}) => {
    return (
        <button type='submit' className='item-button'onClick={onClick ? onClick : undefined} >
            {title}
        </button>
    );
};
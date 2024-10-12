import './itemButton.css';

export const ItemButton = ({title,color,onClick,dark}) => {
    return (
        <button 
            type='submit'
            className={dark ? `item-button item-button-dark` :'item-button'}
            onClick={onClick ? onClick : undefined} 
        >
            {title}
        </button>
    );
};
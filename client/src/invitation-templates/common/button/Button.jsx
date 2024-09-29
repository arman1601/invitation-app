import './button.css';

const Button = ({handleClick, text}) => {
    return (
        <button type='submit' onClick={handleClick ? handleClick : null}>{text}</button>
    );
};

export default Button;
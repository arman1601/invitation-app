import './details.css';

const Details = ({ iconClass, heading, putImage, text, children }) => {
  return (
    <div className='template1-details-cont'>
      <i className={`fas ${iconClass}`}></i>
      <h3 className='template1-details-heading'>{heading}</h3>
      {text && <p>{text}</p>}
      {children}
      <div className={putImage ? 'details-background' : ''}>
        
      </div>
    </div>
  );
};

export default Details;

import useTimer from '../../../hooks/useTimer.js';
import './timer.css'; // Стандартные стили (по умолчанию)

const Timer = ({ eventDate, customStyles = {} }) => {
  const timeLeft = useTimer(eventDate);

  return (
    <div className="countdown-container" style={customStyles.container}>
      <div className="countdown-item" style={customStyles.item}>
        <span className="countdown-value" style={customStyles.value}>
          {timeLeft.days || '0'}
        </span>
        <span className="countdown-label" style={customStyles.label}>
          Days
        </span>
      </div>
      <div className="countdown-item" style={customStyles.item}>
        <span className="countdown-value" style={customStyles.value}>
          {timeLeft.hours || '0'}
        </span>
        <span className="countdown-label" style={customStyles.label}>
          Hours
        </span>
      </div>
      <div className="countdown-item" style={customStyles.item}>
        <span className="countdown-value" style={customStyles.value}>
          {timeLeft.minutes || '0'}
        </span>
        <span className="countdown-label" style={customStyles.label}>
          Minutes
        </span>
      </div>
    </div>
  );
};

export default Timer;

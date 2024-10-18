import { useState, useEffect } from 'react';

const useTimer = (eventDate) => {
  const calculateTimeLeft = () => {
    const difference = new Date(eventDate) - new Date();
    
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // Обновляем каждую минуту

    return () => clearInterval(timer); // Очищаем таймер при размонтировании компонента
  }, [eventDate]);

  return timeLeft;
};

export default useTimer;

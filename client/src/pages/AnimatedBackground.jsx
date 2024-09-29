import React, { useEffect, useRef } from 'react';
import './styles/animatedBackground.css';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const overlayRef = useRef(null);
  const particlesRef = useRef([]); // Храним частицы в ref, чтобы избежать пересоздания

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const overlay = overlayRef.current;
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * overlay.clientWidth; // Начальное положение внутри overlay
        this.y = Math.random() * overlay.clientHeight; // Начальное положение внутри overlay
        this.radius = Math.random() * 5 + 2;
        this.speedX = Math.random() * 0.2;
        this.speedY = Math.random() * 0.2;
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const colors = ['rgba(255, 0, 0, 0.7)', 'rgba(0, 0, 255, 0.7)', 'rgba(128, 0, 128, 0.7)'];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Ограничиваем движение шариков в пределах overlay
        if (this.x < this.radius || this.x > overlay.clientWidth - this.radius) {
          this.speedX *= -1;
        }
        if (this.y < this.radius || this.y > overlay.clientHeight - this.radius) {
          this.speedY *= -1;
        }
      }

      draw() {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
      }
    }

    const init = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });
      context.filter = 'none'; // Сбрасываем эффект размытия после рисования
      requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      if (overlay) { // Проверяем, что overlay существует
        canvas.width = overlay.clientWidth; // Устанавливаем ширину canvas равной ширине overlay
        canvas.height = overlay.clientHeight; // Устанавливаем высоту canvas равной высоте overlay
        init(); // Инициализируем частицы только после изменения размера
      }
    };

    resizeCanvas(); // Устанавливаем размеры при первом рендере
    animate(); // Запускаем анимацию

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="background-container">
      <canvas ref={canvasRef} />
      <div className="overlay" ref={overlayRef}>
        <h1 className="hello-world">Hello World</h1>
      </div>
    </div>
  );
};

export default AnimatedBackground;

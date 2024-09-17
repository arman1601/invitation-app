import { Suspense } from 'react';
import AppRouter from './Router'; // Импортируете ваш созданный роутер
import './App.css';

const App = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <AppRouter />
    </Suspense>
  );
};

export default App;

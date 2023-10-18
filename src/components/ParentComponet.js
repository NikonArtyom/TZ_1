import '../css/ParentCss.css';
import React, { useState } from 'react';
import ChildComponent from '../components/toDo/ChildComponent';
import SiblingComponent from '../components/toDo/SiblingComponent';

function App() {

  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const resetCounter = () => setCounter(0);
  const randomNum = () => setCounter(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  const dicrement = () => counter > 0 ? setCounter(counter - 1) : 0;

  return (
    <div className='parent'>

      <div className='counter'>
        <p>{counter}</p>
        <button onClick={increment}>Увеличить на 1</button>
        <button onClick={resetCounter}>Сбросить к 0</button>
        <button onClick={randomNum}>Случайное число</button>
        <button onClick={dicrement}>Уменьшить на 1</button>
      </div>

      <div className='props'>
        <ChildComponent name={'Atyom'} counter={counter} />
      </div>

      <div className='text'>
        <SiblingComponent />
      </div>

    </div>
  );
}

export default App;

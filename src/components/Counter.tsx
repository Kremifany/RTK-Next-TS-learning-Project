'use client';
import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div className='max-w-3xl mx-auto flex flex-col justify-center items-center text-white'>
      <h2 className='scroll-m-20 pb-6 text-4xl font-semibold tracking-tight first:mt-0'>
        Redux counter
      </h2>
      <div className='py-4'>
        <div className='flex items-center space-x-6'>
          <button onClick={handleDecrement}>
            <Minus className='w-8 h-8 ' />
          </button>
          <p className='scroll-m-20  pb-2 text-6xl font-semibold tracking-tight first:mt-0'>
            {counter}
          </p>
          <button onClick={handleIncrement}>
            <Plus className='w-8 h-8 ' />
          </button>
        </div>
      </div>
    </div>
  );
}

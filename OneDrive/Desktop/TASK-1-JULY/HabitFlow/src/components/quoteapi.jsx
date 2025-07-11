// src/components/MotivationalQuote.jsx
import { useContext, useEffect, useState } from 'react';

import { HabitContext } from '../context/HabitContext';

const quoteapi = () => {
  const {quote,author} = useContext(HabitContext)
  

  return (
    <div className='dark:bg-teal-900 h-full p-8'>
    <div className=" bg-gray-900  dark:bg-teal-50  text-start p-6  rounded-lg shadow  max-sm:w-[300px] mx-auto max-w-2xl">
        <h2 className='text-transparent bg-clip-text bg-gradient-to-r italic text-center from-teal-500 via-green-500 to-yellow-500'>Quote Of The Day</h2>
      <p className="text-lg italic text-white dark:text-teal-950">
        "{quote}"
      </p>
      <p className="mt-4 text-sm text-teal-600 font-semibold">— {author}</p>
    </div>
    </div>)
}

export default quoteapi
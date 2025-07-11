// src/hooks/useDarkMode.js
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
 function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}


const DarkMode = () => {
    const [darkMode, setDarkMode] = useDarkMode();
  return (
     <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {darkMode ? (
        <FaSun className="text-yellow-400 text-xl" />
      ) : (
        <FaMoon className="text-gray-800 text-xl" />
      )}
    </button>
  )
}

export default DarkMode
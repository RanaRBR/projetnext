"use client"; 
import { useTheme } from '@/context/ThemeContext';
import { HiMiniMoon } from 'react-icons/hi2';
import { IoSunny } from 'react-icons/io5';

const DarkMode = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-black hover:text-yellow-600 flex items-center"
    >
      {isDarkMode ? (
        <IoSunny className="text-2xl" />
      ) : (
        <HiMiniMoon className="text-2xl" />
      )}
    </button>
  );
};

export default DarkMode;

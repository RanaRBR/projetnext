// "use client";
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setIsDarkMode(savedTheme === 'dark');
//     }
//   }, []);

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => {
//       const newMode = !prevMode;
//       localStorage.setItem('theme', newMode ? 'dark' : 'light');
//       return newMode;
//     });
//   };

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   return useContext(ThemeContext);
// };
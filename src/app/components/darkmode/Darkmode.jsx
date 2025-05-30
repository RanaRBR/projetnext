// // "use client"; 
// // import { useTheme } from '@/context/ThemeContext';
// // import { HiMiniMoon } from 'react-icons/hi2';
// // import { IoSunny } from 'react-icons/io5';

// // const DarkMode = () => {
// //   const { isDarkMode, toggleTheme } = useTheme();

// //   return (
// //     <button
// //       onClick={toggleTheme}
// //       className="text-black hover:text-yellow-600 flex items-center"
// //     >
// //       {isDarkMode ? (
// //         <IoSunny className="text-2xl" />
// //       ) : (
// //         <HiMiniMoon className="text-2xl" />
// //       )}
// //     </button>
// //   );
// // };

// // export default DarkMode;


// "use client";
// import React, { useEffect, useState } from 'react';
// import { HiMiniMoon } from 'react-icons/hi2';
// import { IoSunny } from 'react-icons/io5';

// const DarkMode = () => {
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setIsDarkMode(savedTheme === 'dark');
//       document.body.classList.toggle('dark', savedTheme === 'dark'); 
//     }
//   }, []);

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => {
//       const newMode = !prevMode;
//       localStorage.setItem('theme', newMode ? 'dark' : 'light');
//       document.body.classList.toggle('dark', newMode); 
//       return newMode;
//     });
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="text-black hover:text-yellow-600 flex items-center"
//     >
//       {isDarkMode ? (
//         <IoSunny className="text-2xl" />
//       ) : (
//         <HiMiniMoon className="text-2xl" />
//       )}
//     </button>
//   );
// };

// export default DarkMode;

// "use client"

// import { useDispatch, useSelector } from "react-redux"
// // import { appuyer } from "../../features/darkmode/darkmodeSlice"
// import { FaSun, FaMoon } from "react-icons/fa"

// const DarkMode = () => {
//   const dispatch = useDispatch()
//   const dark = useSelector((state) => state.darkmode.value)

//   const toggleDark = () => {
//     dispatch(appuyer())
//   }

//   return (
//     <button
//       onClick={toggleDark}
//       className="ml-4 p-2 text-xl hover:text-yellow-500 transition duration-300"
//       aria-label="Changer le thème"
//     >
//       {dark ? <FaSun className="animate-spin-slow" /> : <FaMoon />}
//     </button>
//   )
// }

// export default DarkMode

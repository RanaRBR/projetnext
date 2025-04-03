"use client";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { serif } from "@/font";
import "./Carousel.sass";

const Carousel = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ranarbr.github.io/apiPlants/data.json"
        );
        const apiData = await response.json();

        console.log("Données reçues :", apiData);

        const plantData = apiData.plants;

        if (Array.isArray(plantData)) {
          const dataS = plantData.map(({ id, ...rest }) => rest);
          setData(dataS);
        } else {
          console.error(
            "L'API ne retourne pas un tableau dans 'plants' :",
            apiData
          );
        }
      } catch (error) {
        console.error("Erreur lors du chargement de l'API:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [data.length]);

  const nextElement = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevElement = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  if (data.length === 0) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex flex-col items-center justify-center"
          >
            <img
              src={item.image}
              alt={`image-${index}`}
              className="rounded-md w-[500px] h-[400px] object-cover"
            />
            <div className="text-center mt-4 text-black">
              <h2
                className={`${serif.className} antialiased text-2xl font-semibold`}
              >
                {item.name}
              </h2>
              <p className={`${serif.className} antialiased text-base p-2`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevElement}
        className="absolute left-42 top-1/2 transform -translate-y-1/1 bg-yellow-400 text-white rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg  px-3 py-3  "
      >
        <FaChevronLeft className="text-2xl text-black" />
      </button>
      <button
        onClick={nextElement}
        className="absolute right-42 top-1/2 transform -translate-y-1/1 bg-yellow-400 text-white rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg  px-3 py-3 "
      >
        <FaChevronRight className="text-2xl text-black" />
      </button>
    </div>
  );
};

export default Carousel;

// "use client";
// import { useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { serif } from "@/font";
// import "./Carousel.sass";

// const Carousel = () => {
//   const [data, setData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://ranarbr.github.io/apiPlants/data.json"
//         );
//         const apiData = await response.json();

//         console.log("Données reçues :", apiData);

//         const plantData = apiData.plants;

//         if (Array.isArray(plantData)) {
//           const dataS = plantData.map(({ id, ...rest }) => rest);
//           setData(dataS);
//         } else {
//           console.error(
//             "L'API ne retourne pas un tableau dans 'plants' :",
//             apiData
//           );
//         }
//       } catch (error) {
//         console.error("Erreur lors du chargement de l'API:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 5000); 

//     return () => clearInterval(interval); 
//   }, [data.length]);

//   const nextElement = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//   };

//   const prevElement = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
//   };

//   if (data.length === 0) {
//     return <div>Chargement...</div>;
//   }

//   return (
//     <div className="carousel-container relative w-full max-w-4xl mx-auto overflow-hidden">
//       <div
//         className="carousel-images flex transition-transform ease-in-out duration-500"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="carousel-item w-full flex-shrink-0 flex flex-col items-center justify-center"
//           >
//             <img
//               src={item.image}
//               alt={`image-${index}`}
//               className="rounded-md w-[500px] h-[400px] object-cover"
//             />
//             <div className="text-center mt-4 text-black">
//               <h2
//                 className={`${serif.className} antialiased text-2xl font-semibold`}
//               >
//                 {item.name}
//               </h2>
//               <p className={`${serif.className} antialiased text-base p-2`}>
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={prevElement}
//         className="carousel-button absolute left-10 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg px-3 py-3"
//       >
//         <FaChevronLeft className="text-2xl text-black" />
//       </button>
//       <button
//         onClick={nextElement}
//         className="carousel-button absolute right-10 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg px-3 py-3"
//       >
//         <FaChevronRight className="text-2xl text-black" />
//       </button>
//     </div>
//   );
// };

// export default Carousel;









// "use client";
// import { useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { serif } from "@/font";
// import "./Carousel.sass";

// const Carousel = () => {
//   const [data, setData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://ranarbr.github.io/apiPlants/data.json"
//         );
//         const apiData = await response.json();
//         const plantData = apiData.plants;
//         if (Array.isArray(plantData)) {
//           const dataS = plantData.map(({ id, ...rest }) => rest);
//           setData(dataS);
//         }
//       } catch (error) {
//         console.error("Erreur lors du chargement de l'API:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [data.length]);

//   const nextElement = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//   };

//   const prevElement = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
//   };

//   if (data.length === 0) {
//     return <div>Chargement...</div>;
//   }

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
//       <div
//         className="flex transition-transform ease-in-out duration-500"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center px-4"
//           >
//             <img
//               src={item.image}
//               alt={`image-${index}`}
//               className="rounded-md w-full sm:w-[250px] md:w-[350px] lg:w-[450px] h-auto object-cover"
//             />
//             <div className="text-content mt-4 text-black">
//               <h2 className="font-semibold text-lg sm:text-sm md:text-lg lg:text-xl">
//                 {item.name}
//               </h2>
//               <p className="text-base sm:text-xs md:text-sm lg:text-base p-2">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={prevElement}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg px-3 py-3"
//       >
//         <FaChevronLeft className="text-2xl text-black" />
//       </button>

//       <button
//         onClick={nextElement}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg px-3 py-3"
//       >
//         <FaChevronRight className="text-2xl text-black" />
//       </button>
//     </div>
//   );
// };

// export default Carousel;



// "use client";
// import { useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { serif } from "@/font";
// import "./Carousel.sass";

// const Carousel = () => {
//   const [data, setData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://ranarbr.github.io/apiPlants/data.json"
//         );
//         const apiData = await response.json();

//         console.log("Données reçues :", apiData);

//         const plantData = apiData.plants;

//         if (Array.isArray(plantData)) {
//           const dataS = plantData.map(({ id, ...rest }) => rest);
//           setData(dataS);
//         } else {
//           console.error(
//             "L'API ne retourne pas un tableau dans 'plants' :",
//             apiData
//           );
//         }
//       } catch (error) {
//         console.error("Erreur lors du chargement de l'API:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 5000); 

//     return () => clearInterval(interval); 
//   }, [data.length]);

//   const nextElement = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//   };

//   const prevElement = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
//   };

//   if (data.length === 0) {
//     return <div>Chargement...</div>;
//   }

//   return (
//     <div className="carrou relative w-full max-w-4xl mx-auto overflow-hidden">
//       <div
//         className="flex transition-transform ease-in-out duration-500"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="w-full flex-shrink-0 flex flex-col items-center justify-center"
//           >
//             <img
//               src={item.image}
//               alt={`image-${index}`}
//               className="rounded-md w-[500px] h-[400px] object-cover"
// />
//             <div className="text-center mt-4 text-black">
//               <h2
//                 className={`${serif.className} antialiased text-2xl font-semibold`}
//               >
//                 {item.name}
//               </h2>
//               <p className={`${serif.className} antialiased text-base p-2`}>
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={prevElement}
//         className="btnC absolute left-42 top-1/2 transform -translate-y-1/1 bg-yellow-400 text-white rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg  px-3 py-3  "
//       >
//         <FaChevronLeft className="btnC text-2xl text-black" />
//       </button>
//       <button
//         onClick={nextElement}
//         className="btnC2 absolute right-42 top-1/2 transform -translate-y-1/1 bg-yellow-400 text-white rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg  px-3 py-3 "
//       >
//         <FaChevronRight className="btnC2  text-2xl text-black" />
//       </button>
//     </div>
//   );
// };

// export default Carousel;

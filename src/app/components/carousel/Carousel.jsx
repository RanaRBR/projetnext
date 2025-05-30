/* eslint-disable react/no-unescaped-entities */
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
    <div className="relative lg:w-full max-w-4xl mx-auto overflow-hidden md:p-0 w-2/3  ">
      <div
        className="flex transition-transform ease-in-out duration-500 md:p-0"
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
              className="rounded-md lg:w-[500px] lg:h-[400px] object-cover w-[350px] h-[350px]"
            />
            <div className="text-center mt-4 text-black">
              <h2
                className={`${serif.className} antialiased text-2xl font-semibold`}
              >
                {item.name}
              </h2>
              <p className={`${serif.className} antialiased text-base mx-auto lg:p-2 p-15`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevElement}
        className="btnC absolute left-42 top-1/2 transform -translate-y-1/1 bg-yellow-400 text-white rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg  px-3 py-3  "
      >
        <FaChevronLeft className="text-2xl text-black" />
      </button>
      <button
        onClick={nextElement}
        className="btnC absolute right-42 top-1/2 transform -translate-y-1/1 bg-yellow-400 text-white rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg  px-3 py-3 "
      >
        <FaChevronRight className="text-2xl text-black" />
      </button>
    </div>
  );
};

export default Carousel;

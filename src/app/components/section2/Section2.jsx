"use client";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { cinzel } from "@/font";

const Section2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ranarbr.github.io/apiPlants/data.json");
        const apiData = await response.json();
        const plantData = apiData.plants;

        if (Array.isArray(plantData) && plantData.length >= 8) {
          setData(plantData.slice(4, 8)); 
        } else {
          console.error("L'API ne retourne pas assez de données");
        }
      } catch (error) {
        console.error("Erreur lors du chargement de l'API :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center text-xl">Chargement...</div>;

  if (data.length < 4) return <div className="text-center text-xl text-red-500">Pas assez de données</div>;

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className={`${cinzel.className} antialised text-4xl font-semibold text-black p-8`}>
        Idées de cadeaux...
      </h1>

      <div className="grid grid-cols-2 gap-4 max-w-5xl pb-20">
        <div className="col-span-1 row-span-2 relative shadow-md shadow-black ">
          <img src={data[0].image} alt={data[0].name} className="rounded-sm w-full h-full object-cover" />
          <div className="absolute left-5 top-7 transform -translate-y-1/2 bg-yellow-400 text-white rounded-full px-3 py-3 
              transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg">
            <FaEye size={18} />
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-2 gap-4">
          {data.slice(1, 3).map((plant, index) => (
            <div key={index} className="relative shadow-md shadow-black">
              <img src={plant.image} alt={plant.name} className="rounded-sm w-full h-40 object-cover" />
              <div className="absolute left-5 top-7 transform -translate-y-1/2 bg-yellow-400 text-white rounded-full px-3 py-3 
                  transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg">
                <FaEye size={18} />
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-1 relative shadow-md shadow-black">
          <img src={data[3].image} alt={data[3].name} className="rounded-sm w-full h-56 object-cover" />
          <div className="absolute left-5 top-7 transform -translate-y-1/2 bg-yellow-400 text-white rounded-full px-3 py-3 
              transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg">
            <FaEye size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

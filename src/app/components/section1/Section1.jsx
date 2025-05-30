/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import { cinzel } from "@/font";
import { IoPricetagsOutline } from "react-icons/io5";
import { serif } from "@/font";
import { RiPlantLine } from "react-icons/ri";
import "./Section1.sass";
import Link from "next/link";

function Section1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch("https://ranarbr.github.io/apiPlants/data.json");
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const apiData = await response.json();
        if (isMounted) {
          setData(apiData.plants);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-15">
      <h1 className={`${cinzel.className} antialiased text-4xl font-semibold text-black p-8 lg:text-center`}>
        Les favoris de nos clients
      </h1>

      {loading ? (
        <p className="text-lg font-semibold text-gray-700">Chargement des données...</p>
      ) : error ? (
        <p className="text-lg font-semibold text-red-500">Erreur : {error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-10 pb-10">
          {data.slice(9, 13).map((item) => (
            <div key={item.id} className="allR relative rounded-2xl p-4 bg-white shadow-md">
              <div className="absolute top-4 left-4 flex items-center gap-1 bg-[rgb(174,182,169)] p-1 rounded-sm shadow-md">
                <IoPricetagsOutline className="text-white text-lg" />
                <p className="text-white text-sm font-semibold">Promo</p>
              </div>

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto max-h-60 object-cover rounded-md mb-2"
              />

              <h2 className={`${serif.className} antialiased text-2xl font-semibold text-center p-5`}>
                {item.name}
              </h2>

              <div className="flex items-center gap-1 p-1 font-bold pill">
                <p>La Green Trend</p>
                <RiPlantLine className="text-2xl mb-1" />
              </div>

              <p className="text-xl text-yellow-500 p-2">
                {item.prices && item.prices.Petite ? (
                  <>
                    <span className="text-black text-xl font-bold">
                      <del>{item.prices.Petite.toFixed(2)}€</del>
                    </span>
                    <span className="ml-2 font-bold">{(item.prices.Petite * 0.8).toFixed(2)}€</span>
                  </>
                ) : (
                  <span className="text-gray-500">Prix non disponible</span>
                )}
              </p>

              <Link href={`/produits/${item.id}`}>
                  <button
                    className="bg-yellow-400 hover:bg-yellow-600 text-black px-6 rounded-full mt-3 w-full flex justify-center items-center py-2 mb-5"
                  >
                    En savoir plus
                  </button>
                </Link>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Section1;

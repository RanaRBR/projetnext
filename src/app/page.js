"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Carousel from "./components/carousel/Carousel";

const Home = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("https://ranarbr.github.io/apiPlants/data.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.plants)) {
          const planteAleatoire = data.plants.sort(() => 0.5 - Math.random());
          setPlants(planteAleatoire.slice(0, 5));
        }
      })
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-zinc-900 text-black">
      <div className="flex flex-col items-center justify-center min-h-screen ">
            <h1 className="text-4xl font-semibold text-white p-8">Nos produits tendance</h1>
            <Carousel plants={plants} />
        </div>
      <Link href="/products" className="hover:underline mt-5">Voir nos produits</Link>
      <Link href="/contact" className="hover:underline mt-2">Contactez-nous</Link>
    </div>
  );
};

export default Home;

/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Carousel from "./components/carousel/Carousel";
import { cinzel } from "@/font";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import ElementReassurance from "./components/elementReassurance/ElementReassurance";

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
    <div className="flex flex-col items-center justify-center min-h-screen w-full dark:bg-white text-black padNav ">
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <h1
          className={`${cinzel.className} antialiased text-4xl font-semibold text-black mt-20 mb-10`}
        >
          Les incontournables
        </h1>
        <Carousel plants={plants} />
      </div>
      <ElementReassurance/>
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Home;

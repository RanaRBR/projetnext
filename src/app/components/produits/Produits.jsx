"use client";
import { useEffect, useState } from "react";
import { cinzel } from "@/font";
import Panier from "../panier/Panier";

export default function Produits() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [panier, setPanier] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    fetch("https://ranarbr.github.io/apiPlants/data.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.plants) {
          setPlants(data.plants);
          setLoading(false);
        } else {
          throw new Error("Structure de données inattendue");
        }
      })
      .catch((error) => {
        console.error("Erreur de chargement :", error);
        setError(
          "Il y a eu un problème avec le chargement des plantes. Veuillez réessayer."
        );
        setLoading(false);
      });
  }, []);

  const ajouterAuPanier = (plant, taille) => {
    const prix =
      taille === "Petite" ? plant.prices.Petite : plant.prices.Grande;
    const existe = panier.find(
      (item) => item.id === plant.id && item.taille === taille
    );

    setPanier((prevPanier) => {
      if (existe) {
        return prevPanier.map((item) =>
          item.id === plant.id && item.taille === taille
            ? { ...item, quantite: item.quantite + 1 }
            : item
        );
      } else {
        return [...prevPanier, { ...plant, quantite: 1, taille, prix }];
      }
    });
  };

  if (loading) {
    return (
      <p className="text-center text-gray-500">Chargement des plantes...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!isMounted) {
    return null;
  }

  return (
    <div className="container mx-auto p-10">
      <h1
        className={`${cinzel.className} antialiased text-4xl font-semibold text-black p-8 text-center`}
      >
        Nos Plantes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="shadow-xl shadow-black rounded-md p-4 bg-white"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{plant.name}</h2>
            <p className="text-sm text-gray-600">
              🌿 Catégorie : {plant.category}
            </p>

            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name={`taille-${plant.id}`}
                  value="Petite"
                  className="form-radio text-yellow-500"
                />
                <span className="ml-2">Petite - {plant.prices.Petite}€</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name={`taille-${plant.id}`}
                  value="Grande"
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Grande - {plant.prices.Grande}€</span>
              </label>
            </div>

            <button
              onClick={() => {
                const selectedSize = document.querySelector(
                  `input[name="taille-${plant.id}"]:checked`
                );
                if (selectedSize) {
                  ajouterAuPanier(plant, selectedSize.value);
                } else {
                  alert("Veuillez sélectionner une taille.");
                }
              }}
              className="bg-yellow-500 hover:bg-yellow-700 text-black px-4 py-2 rounded-full mt-3"
            >
              Adopter la plante
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

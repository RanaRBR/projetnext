"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cinzel } from "@/font";

const Details = () => {
  const router = useRouter();
  const { id } = router.query; // Récupération de l'ID de la plante depuis l'URL
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    if (!id) return;

    fetch("https://ranarbr.github.io/apiPlants/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedPlant = data.plants.find((p) => p.id == id);
        if (selectedPlant) {
          setPlant(selectedPlant);
        } else {
          setError("Plante non trouvée.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur :", error);
        setError("Impossible de charger les détails de la plante.");
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Veuillez sélectionner une taille.");
      return;
    }
    const plantToAdd = {
      id: plant.id,
      name: plant.name,
      size: selectedSize,
      prix: plant.prices[selectedSize],
      image: plant.image,
    };

    // Récupérer le panier existant dans localStorage
    const panier = JSON.parse(localStorage.getItem("panier")) || [];
    panier.push(plantToAdd);
    localStorage.setItem("panier", JSON.stringify(panier)); // Sauvegarder le panier

    alert("Plante ajoutée au panier !");
  };

  if (loading)
    return <p className="text-center text-gray-500">Chargement...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!plant)
    return <p className="text-center text-gray-500">Plante non trouvée.</p>;

  return (
    <div className="container mx-auto bg-white shadow-lg rounded-lg padNav">
      <h1
        className={`${cinzel.className} antialiased text-4xl font-semibold text-black mt-20`}
      >
        {plant.name}
      </h1>
      <img
        src={plant.image}
        alt={plant.name}
        className="w-full h-80 object-cover rounded-lg mt-4"
      />
      <div className="mt-4">
        <label className="block mb-2">Choisissez une taille :</label>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">Sélectionnez une taille</option>
          <option value="Petite">Petite</option>
          <option value="Grande">Grande</option>
        </select>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg mt-4"
      >
        Ajouter au panier
      </button>
    </div>
  );
};

export default Details;

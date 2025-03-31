"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Details() {
    
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch("https://ranarbr.github.io/apiPlants/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedPlant = data.plants.find((p) => p.id == id);
        if (selectedPlant) {
          setPlant(selectedPlant);
        } else {
          setError("Plante non trouvée");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur :", error);
        setError("Impossible de charger les détails de la plante.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Chargement...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!plant) return <p className="text-center text-gray-500">Plante non trouvée.</p>;

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-green-700">{plant.name}</h1>
      <img
        src={plant.image}
        alt={plant.name}
        className="w-full h-80 object-cover rounded-lg mt-4"
      />
      <div className="mt-6 text-gray-700">
        <p><strong>Description :</strong> {plant.description}</p>
        <p><strong>Catégorie :</strong> {plant.category}</p>
        <p><strong>Entretien :</strong> {plant.maintenance}</p>
        <p><strong>Lumière :</strong> {plant.light}</p>
      </div>
      <div className="mt-4 text-black">
        <h2 className="text-xl font-semibold">Prix :</h2>
        <p>🌱 Petite : {plant.prices.Petite}€</p>
        <p>🌳 Grande : {plant.prices.Grande}€</p>
      </div>
      <button
        onClick={() => router.back()}
        className="bg-gray-600 hover:bg-gray-800 text-white px-6 py-2 rounded-lg mt-4"
      >
        Retour
      </button>
    </div>
  );
}

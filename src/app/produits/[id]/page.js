/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { enriquita } from "@/font";
import { CiDiscount1 } from "react-icons/ci";

export default function Details() {
  const { id } = useParams();
  const router = useRouter();
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

  if (loading)
    return <p className="text-center text-gray-500">Chargement...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!plant)
    return <p className="text-center text-gray-500">Plante non trouvée.</p>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Veuillez sélectionner une taille.");
      return;
    }
    const plantToAdd = {
      ...plant,
      size: selectedSize,
      prix: plant.prices[selectedSize],
      image: plant.image,   
      name: plant.name,   
    };

    const currentCart = JSON.parse(localStorage.getItem("panier")) || [];
    currentCart.push(plantToAdd);
    localStorage.setItem("panier", JSON.stringify(currentCart));

    console.log("Plante ajoutée au panier : ", plantToAdd);
  };

  return (
    <div className="container mx-auto p-6 bg-white padNav">
      <h2 className={`${enriquita.className} antialiased w-full flex items-center font-semibold p-5 text-black text-4xl`}>
        {plant.name}
      </h2>

      <div className="flex flex-wrap w-full gap-8 lg:flex-nowrap p-5">
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-[400px] rounded-lg object-cover"
          />
          <div className="mt-6 text-gray-700 w-full">
            <p><strong>Description :</strong> {plant.description}</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div className="bg-red-100 h-[100px] w-[520px] rounded-sm p-3">
            <p className="flex items-center gap-2 text-black font-bold mt-3 ">
              <CiDiscount1 className="text-3xl mt-2" />
              Produit expédié par Green Store 🌱 <br />
              Achetez 2 plantes et bénéficiez de 15% de réduction !
            </p>
          </div>
          <div className="text-gray-700 w-full">
            <p><strong>Catégorie :</strong> {plant.category}</p>
            <p><strong>Entretien :</strong> {plant.maintenance}</p>
            <p><strong>Luminosité :</strong> {plant.light}</p>
          </div>
          <div className="mt-4 text-black">
            <div className="flex flex-col items-start mt-2">
              <label className="text-black flex items-center gap-2">
                <input
                  type="radio"
                  name="size"
                  value="Petite"
                  checked={selectedSize === "Petite"}
                  onChange={() => setSelectedSize("Petite")}
                />
                Petite - {plant.prices.Petite}€
              </label>
              <label className="text-black flex items-center gap-2">
                <input
                  type="radio"
                  name="size"
                  value="Grande"
                  checked={selectedSize === "Grande"}
                  onChange={() => setSelectedSize("Grande")}
                />
                Grande - {plant.prices.Grande}€
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-start pt-5">
            <button
              onClick={handleAddToCart}
              className="bg-yellow-400 hover:bg-yellow-600 text-black px-6 py-2 rounded-full w-[180px] h-[40px] font-semibold cursor-pointer "
            >
              Adopter la plante
            </button>

            <button
              onClick={() => router.back()}
              className="bg-yellow-400 hover:bg-yellow-600 text-black px-6 py-2 rounded-full w-[120px] cursor-pointer"
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


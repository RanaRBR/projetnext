"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cinzel } from "@/font";
import Searchbar from "../components/searchBar/SearchBar";
import { TiArrowSortedDown } from "react-icons/ti";
import Link from "next/link";

export default function Produits() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const router = useRouter();

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
        setError("Problème de chargement des plantes. Veuillez réessayer.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center text-gray-500">Chargement...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const filteredPlants = plants
    .filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((plant) =>
      categoryFilter
        ? plant.category.toLowerCase().includes(categoryFilter.toLowerCase())
        : true
    );

  const sortedPlants = filteredPlants.sort((a, b) => {
    if (priceSort === "asc") {
      return a.prices.Petite - b.prices.Petite;
    } else if (priceSort === "desc") {
      return b.prices.Petite - a.prices.Petite;
    }
    return 0;
  });

  return (
    <div className="padNav">
      <div className="container mx-auto p-15 bg-white">
        <h1
          className={`${cinzel.className} text-4xl font-semibold text-black p-8 text-center`}
        >
          Nos Plantes
        </h1>

        <Searchbar search={setSearchTerm} />

        <div className="flex justify-end items-center p-5">
          <div className="flex gap-4">
            <div className="relative ">
              <select
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300  focus:border-yellow-400 
           focus:ring-1 focus:ring-yellow-300 transition duration-200 
           rounded-sm shadow-sm text-gray-700 placeholder-gray-400 
           appearance-none outline-none"
              >
                <option value="">Prix</option>
                <option value="asc">Prix croissant</option>
                <option value="desc">Prix décroissant</option>
              </select>
              <TiArrowSortedDown className="absolute right-2 top-2 text-2xl cursor-pointer text-yellow-500" />
            </div>

            <div className="relative">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300  focus:border-yellow-400 
           focus:ring-1 focus:ring-yellow-300 transition duration-200 
           rounded-sm shadow-sm text-gray-700 placeholder-gray-400 
           appearance-none outline-none"
              >
                <option value="">Catégorie</option>
                <option value="plante d'intérieur">Plante d'intérieur</option>
                <option value="plante d'extérieur">Plante d'extérieur</option>
                <option value="cactus">Cactus</option>
                <option value="succulente">Succulente</option>
              </select>
              <TiArrowSortedDown className="absolute right-2 top-2 text-yellow-500 text-2xl cursor-pointer " />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 p-8">
          {sortedPlants.length > 0 ? (
            sortedPlants.map((plant) => (
              <div
                key={plant.id}
                className="shadow-xl shadow-black rounded-md bg-white p-5"
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2 text-black">
                  {plant.name}
                </h3>
                <p className="text-sm text-gray-600">
                  🌿 Catégorie : {plant.category}
                </p>
                <p className="text-black">🌱 Petite : {plant.prices.Petite}€</p>
                <p className="text-black">🌳 Grande : {plant.prices.Grande}€</p>

                <Link href={`/produits/${plant.id}`}>
                  <button
                    className="bg-yellow-400 hover:bg-yellow-600 text-black px-6 rounded-full mt-3 w-full flex justify-center items-center py-2 mb-5 cursor-pointer"
                  >
                    Découvrir
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Aucune plante trouvée.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

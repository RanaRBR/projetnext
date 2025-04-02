
// "use client";
// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { enriquita } from "@/font";

// export default function Details() {
//   const { id } = useParams();
//   const router = useRouter();
//   const [plant, setPlant] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(""); // Pour gérer la taille sélectionnée

//   useEffect(() => {
//     if (!id) return;

//     fetch("https://ranarbr.github.io/apiPlants/data.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const selectedPlant = data.plants.find((p) => p.id == id);
//         if (selectedPlant) {
//           setPlant(selectedPlant);
//         } else {
//           setError("Plante non trouvée.");
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Erreur :", error);
//         setError("Impossible de charger les détails de la plante.");
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading)
//     return <p className="text-center text-gray-500">Chargement...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;
//   if (!plant)
//     return <p className="text-center text-gray-500">Plante non trouvée.</p>;

//   // Fonction pour ajouter au panier
//   const handleAddToCart = () => {
//     if (!selectedSize) {
//       alert("Veuillez sélectionner une taille.");
//       return;
//     }
//     // Ajoute la plante au panier avec la taille sélectionnée
//     const plantToAdd = {
//       ...plant,
//       size: selectedSize, // Ajoute la taille sélectionnée
//       prix: plant.prices[selectedSize], // Le prix dépend de la taille choisie
//     };
//     // Tu peux gérer l'ajout au panier ici, par exemple en appelant une fonction qui met à jour l'état du panier
//     console.log("Plante ajoutée au panier : ", plantToAdd);
//   };

//   return (
//     <div className="container mx-auto p-6 bg-white">
//       <h2
//         className={`${enriquita.className} antialiased w-full flex items-center text-2xl font-semibold p-5 text-black`}
//       >
//         {plant.name}
//       </h2>
//       <img
//         src={plant.image}
//         alt={plant.name}
//         className="w-[400px] h-[400px] rounded-lg mt-4 object-cover"
//       />

//       <div className="mt-10 text-gray-700 w-100">
//         <p>
//           <strong>Description :</strong> {plant.description}
//         </p>
//         <p className="mt-5">
//           <strong>Catégorie :</strong> {plant.category}
//         </p>
//         <p>
//           <strong>Entretien :</strong> {plant.maintenance}
//         </p>
//         <p>
//           <strong>Lumière :</strong> {plant.light}
//         </p>
//       </div>

//       {/* Section Prix et Choix de Taille fusionnée */}
//       <div className="mt-4 text-black">

//         {/* Choix de la taille */}
//         <div className="flex gap-4 items-center mt-2">
//           <label className="text-black flex items-center gap-2">
//             <input
//               type="radio"
//               name="size"
//               value="Petite"
//               checked={selectedSize === "Petite"}
//               onChange={() => setSelectedSize("Petite")}
//             />
//             Petite - {plant.prices.Petite}€
//           </label>
//           <label className="text-black flex items-center gap-2">
//             <input
//               type="radio"
//               name="size"
//               value="Grande"
//               checked={selectedSize === "Grande"}
//               onChange={() => setSelectedSize("Grande")}
//             />
//             Grande - {plant.prices.Grande}€
//           </label>
//         </div>
//       </div>

//       <div className="flex flex-col gap-4 items-start pt-5">
//         <button
//           onClick={handleAddToCart}
//           className="bg-yellow-400 hover:bg-yellow-600 text-black px-6 py-2 rounded-full w-auto"
//         >
//           Adopter la plante
//         </button>

//         <button
//           onClick={() => router.back()}
//           className="bg-yellow-400 hover:bg-yellow-600 text-black px-6 py-2 rounded-full w-auto"
//         >
//           Retour
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { enriquita } from "@/font";

export default function Details() {
  const { id } = useParams();
  const router = useRouter();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState(""); // Pour gérer la taille sélectionnée

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

  // Fonction pour ajouter au panier
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Veuillez sélectionner une taille.");
      return;
    }
    // Ajoute la plante au panier avec la taille sélectionnée
    const plantToAdd = {
      ...plant,
      size: selectedSize, // Ajoute la taille sélectionnée
      prix: plant.prices[selectedSize], // Le prix dépend de la taille choisie
    };
    // Tu peux gérer l'ajout au panier ici, par exemple en appelant une fonction qui met à jour l'état du panier
    console.log("Plante ajoutée au panier : ", plantToAdd);
  };

  return (
    <div className="container mx-auto p-6 bg-white">
      <h2
        className={`${enriquita.className} antialiased w-full flex items-center text-2xl font-semibold p-5 text-black`}
      >
        {plant.name}
      </h2>

      {/* Conteneur avec flex pour l'image et les détails */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-8">
        {/* Image à gauche */}
        <img
          src={plant.image}
          alt={plant.name}
          className="w-[400px] h-[400px] rounded-lg mt-4 object-cover"
        />

        {/* Détails à droite (en haut) */}
        <div className="mt-6 lg:mt-0 text-gray-700 w-full lg:w-auto">
          <p>
            <strong>Catégorie :</strong> {plant.category}
          </p>
          <p>
            <strong>Entretien :</strong> {plant.maintenance}
          </p>
          <p>
            <strong>Lumière :</strong> {plant.light}
          </p>
        </div>
        <div className="mt-4 text-black">
        <h2 className="text-xl font-semibold">Prix :</h2>

        {/* Choix de la taille */}
        <div className="flex gap-4 items-center mt-2">
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

      <div className="flex flex-col gap-4 items-start pt-5">
        <button
          onClick={handleAddToCart}
          className="bg-yellow-400 hover:bg-yellow-600 text-black px-6 py-2 rounded-full w-auto"
        >
          Adopter la plante
        </button>

        <button
          onClick={() => router.back()}
          className="bg-yellow-400 hover:bg-yellow-600 text-black px-6 py-2 rounded-full w-auto"
        >
          Retour
        </button>
      </div>
      </div>

      {/* Description sous l'image */}
      <div className="mt-6 text-gray-700">
        <p>
          <strong>Description :</strong> {plant.description}
        </p>
      </div>

      {/* Section Prix et Choix de Taille fusionnée */}
      
    </div>
  );
}

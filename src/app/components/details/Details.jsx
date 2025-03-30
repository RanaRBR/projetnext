// // // 'use client';

// // // import { useEffect, useState } from "react";
// // // import { cinzel } from "@/font";

// // // export default function Details() {

// // //   const [plants, setPlants] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     fetch("https://ranarbr.github.io/apiPlants/data.json")
// // //       .then((response) => response.json())
// // //       .then((data) => {
// // //         setPlants(data.plants);
// // //         setLoading(false);
// // //       })
// // //       .catch((error) => console.error("Erreur de chargement :", error));
// // //   }, []);

// // //   if (loading) {
// // //     return <p>Chargement des plantes...</p>;
// // //   }

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h1 className="{`${cinzel.className} antialised  text-4xl font-semibold text-black mt-20`}">Nos Plantes</h1>
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // //         {plants.map((plant) => (
// // //           <div key={plant.id} className="shadow-xl shadow-black rounded-md p-4  bg-white">
// // //             <img
// // //               src={plant.image}
// // //               alt={plant.name}
// // //               className="w-full h-48 object-cover rounded-md"
// // //             />
// // //             <h2 className="text-xl font-semibold mt-2">{plant.name}</h2>
// // //             <p className="text-gray-700 text-sm mt-1">{plant.description}</p>
// // //             <p className="text-sm text-gray-600 mt-2">🌞 Lumière : {plant.light}</p>
// // //             <p className="text-sm text-gray-600">🌿 Catégorie : {plant.category}</p>
// // //             <p className="text-sm text-gray-600">🛠 Entretien : {plant.maintenance}</p>
// // //             <p className="text-sm text-gray-600">📏 Taille : {plant.size.small} cm - {plant.size.large} cm</p>
// // //           </div>

          
          
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useEffect, useState } from "react";
// // import { cinzel } from "@/font";

// // export default function Details() {
// //   const [plants, setPlants] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [panier, setPanier] = useState([]);

// //   useEffect(() => {
// //     fetch("https://ranarbr.github.io/apiPlants/data.json")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setPlants(data.plants);
// //         setLoading(false);
// //       })
// //       .catch((error) => console.error("Erreur de chargement :", error));
// //   }, []);

// //   const ajouterAuPanier = (plant) => {
// //     setPanier([...panier, plant]);
// //     alert(`${plant.name} a été ajouté au panier !`);
// //   };

// //   if (loading) {
// //     return <p>Chargement des plantes...</p>;
// //   }

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className={`${cinzel.className} antialiased text-4xl font-semibold text-black mt-20`}>
// //         Nos Plantes
// //       </h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
// //         {plants.map((plant) => (
// //           <div key={plant.id} className="shadow-xl shadow-black rounded-md p-4 bg-white">
// //             <img
// //               src={plant.image}
// //               alt={plant.name}
// //               className="w-full h-48 object-cover rounded-md"
// //             />
// //             <h2 className="text-xl font-semibold mt-2">{plant.name}</h2>
// //             <p className="text-gray-700 text-sm mt-1">{plant.description}</p>
// //             <p className="text-sm text-gray-600 mt-2">🌞 Lumière : {plant.light}</p>
// //             <p className="text-sm text-gray-600">🌿 Catégorie : {plant.category}</p>
// //             <p className="text-sm text-gray-600">🛠 Entretien : {plant.maintenance}</p>
// //             <p className="text-sm text-gray-600">
// //               📏 Taille : {plant.size?.small || "?"} cm - {plant.size?.large || "?"} cm
// //             </p>
// //             <p className="text-sm text-gray-600">📦 Stock : {plant.stock}</p>

// //             <button
// //               disabled={plant.stock === 0}
// //               onClick={() => ajouterAuPanier(plant)}
// //               className={`btn-ajouter border-1 px-4 py-2 rounded-full cursor-pointer w-full text-xl mt-3 ${
// //                 plant.stock === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 text-white"
// //               }`}
// //             >
// //               {plant.stock === 0 ? "En rupture de stock" : "Ajouter"}
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// "use client";
// import { useEffect, useState } from "react";
// import { cinzel } from "@/font";

// export default function Details() {
//   const [plants, setPlants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [panier, setPanier] = useState([]);

//   useEffect(() => {
//     fetch("https://ranarbr.github.io/apiPlants/data.json")
//       .then((response) => response.json())
//       .then((data) => {
//         setPlants(data.plants);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Erreur de chargement :", error));
//   }, []);

//   const ajouterAuPanier = (plant, taille) => {
//     setPanier((prevPanier) => {
//       const prix = taille === "petite" ? plant.prix.small : plant.prix.large;
//       const existe = prevPanier.find(
//         (item) => item.id === plant.id && item.taille === taille
//       );
//       if (existe) {
//         return prevPanier.map((item) =>
//           item.id === plant.id && item.taille === taille
//             ? { ...item, quantite: item.quantite + 1 }
//             : item
//         );
//       } else {
//         return [...prevPanier, { ...plant, quantite: 1, taille, prix }];
//       }
//     });
//   };

//   const totalPrix = panier.reduce((total, item) => total + item.prix * item.quantite, 0);

//   if (loading) {
//     return <p>Chargement des plantes...</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className={`${cinzel.className} antialiased text-4xl font-semibold text-black mt-20`}>
//         Nos Plantes
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
//         {plants.map((plant) => (
//           <div key={plant.id} className="shadow-xl shadow-black rounded-md p-4 bg-white">
//             <img
//               src={plant.image}
//               alt={plant.name}
//               className="w-full h-48 object-cover rounded-md"
//             />
//             <h2 className="text-xl font-semibold mt-2">{plant.name}</h2>
//             <p className="text-gray-700 text-sm mt-1">{plant.description}</p>
//             <p className="text-sm text-gray-600 mt-2">🌞 Lumière : {plant.light}</p>
//             <p className="text-sm text-gray-600">🌿 Catégorie : {plant.category}</p>
//             <p className="text-sm text-gray-600">🛠 Entretien : {plant.maintenance}</p>
//             <p className="text-sm text-gray-600">📏 Taille : {plant.size.small} cm - {plant.size.large} cm</p>

//             <div className="flex justify-between mt-3">
//               <button
//                 onClick={() => ajouterAuPanier(plant, "petite")}
//                 className="bg-green-500 text-white px-3 py-1 rounded-md"
//               >
//                 Ajouter (Petite - {plant.prix.small}€)
//               </button>
//               <button
//                 onClick={() => ajouterAuPanier(plant, "grande")}
//                 className="bg-blue-500 text-white px-3 py-1 rounded-md"
//               >
//                 Ajouter (Grande - {plant.prix.large}€)
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-10 p-4 border-t">
//         <h2 className="text-2xl font-semibold">🛒 Panier</h2>
//         {panier.length === 0 ? (
//           <p className="text-gray-600">Votre panier est vide.</p>
//         ) : (
//           <ul className="mt-4">
//             {panier.map((item) => (
//               <li key={`${item.id}-${item.taille}`} className="flex justify-between items-center p-2 border-b">
//                 <span>
//                   {item.name} ({item.taille}) x{item.quantite}
//                 </span>
//                 <span>{item.prix * item.quantite}€</span>
//               </li>
//             ))}
//           </ul>
//         )}
//         <p className="text-xl font-bold mt-4">Total : {totalPrix}€</p>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";
// import { cinzel } from "@/font";
// import Panier from "../panier/Panier";

// export default function Details() {
//   const [plants, setPlants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [panier, setPanier] = useState([]);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     fetch("https://ranarbr.github.io/apiPlants/data.json")
//       .then((response) => response.json())
//       .then((data) => {
//         setPlants(data.plants);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Erreur de chargement :", error));
//   }, []);

//   const ajouterAuPanier = (plant, taille) => {
//     setPanier((prevPanier) => {
//       const prix = taille === "petite" ? plant.prix.small : plant.prix.large;
//       const existe = prevPanier.find(
//         (item) => item.id === plant.id && item.taille === taille
//       );
//       if (existe) {
//         return prevPanier.map((item) =>
//           item.id === plant.id && item.taille === taille
//             ? { ...item, quantite: item.quantite + 1 }
//             : item
//         );
//       } else {
//         return [...prevPanier, { ...plant, quantite: 1, taille, prix }];
//       }
//     });
//   };

//   if (loading) {
//     return <p>Chargement des plantes...</p>;
//   }

//   if (!isMounted) {
//     return null; // Empêche le rendu côté serveur pour éviter l'erreur de hydration
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className={`${cinzel.className} antialiased text-4xl font-semibold text-black mt-20`}>
//         Nos Plantes
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
//         {plants.map((plant) => (
//           <div key={plant.id} className="shadow-xl shadow-black rounded-md p-4 bg-white">
//             <img
//               src={plant.image}
//               alt={plant.name}
//               className="w-full h-48 object-cover rounded-md"
//             />
//             <h2 className="text-xl font-semibold mt-2">{plant.name}</h2>
//             <p className="text-gray-700 text-sm mt-1">{plant.description}</p>
//             <p className="text-sm text-gray-600 mt-2">🌞 Lumière : {plant.light}</p>
//             <p className="text-sm text-gray-600">🌿 Catégorie : {plant.category}</p>
//             <p className="text-sm text-gray-600">🛠 Entretien : {plant.maintenance}</p>
//             <p className="text-sm text-gray-600">
//               📏 Taille : {plant.size?.small ? `${plant.size.small} cm` : "Non précisé"} - {plant.size?.large ? `${plant.size.large} cm` : "Non précisé"}
//             </p>

//             <div className="flex justify-between mt-3">
//               <button
//                 onClick={() => ajouterAuPanier(plant, "petite")}
//                 className="bg-green-500 text-white px-3 py-1 rounded-md"
//               >
//                 Ajouter (Petite - {plant.prix.small}€)
//               </button>
//               <button
//                 onClick={() => ajouterAuPanier(plant, "grande")}
//                 className="bg-blue-500 text-white px-3 py-1 rounded-md"
//               >
//                 Ajouter (Grande - {plant.prix.large}€)
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Affichage du panier */}
//       <Panier panier={panier} setPanier={setPanier} />
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { cinzel } from "@/font";
import Panier from "../panier/Panier";

export default function Details() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [panier, setPanier] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    fetch("https://ranarbr.github.io/apiPlants/data.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.plants && Array.isArray(data.plants)) {
          setPlants(data.plants);
          setLoading(false);
        } else {
          console.error("Les données sont mal formées.");
          setLoading(false);
        }
      })
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  const ajouterAuPanier = (plant, taille) => {
    setPanier((prevPanier) => {
      const prix = taille === "petite" ? plant.prix.small : plant.prix.large;
      const existe = prevPanier.find(
        (item) => item.id === plant.id && item.taille === taille
      );
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
    return <p>Chargement des plantes...</p>;
  }

  if (!isMounted) {
    return null;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className={`${cinzel.className} antialiased text-4xl font-semibold text-black mt-20`}>
        Nos Plantes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {plants.map((plant) => (
          <div key={plant.id} className="shadow-xl shadow-black rounded-md p-4 bg-white">
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{plant.name}</h2>
            <p className="text-gray-700 text-sm mt-1">{plant.description}</p>
            <p className="text-sm text-gray-600 mt-2">🌞 Lumière : {plant.light}</p>
            <p className="text-sm text-gray-600">🌿 Catégorie : {plant.category}</p>
            <p className="text-sm text-gray-600">🛠 Entretien : {plant.maintenance}</p>
            <p className="text-sm text-gray-600">
              📏 Taille : {plant.size?.small ? `${plant.size.small} cm` : "Non précisé"} - {plant.size?.large ? `${plant.size.large} cm` : "Non précisé"}
            </p>

            <div className="flex justify-between mt-3">
              <button
                onClick={() => ajouterAuPanier(plant, "petite")}
                className="bg-green-500 text-white px-3 py-1 rounded-md"
              >
                Ajouter (Petite - {plant.prix.small}€)
              </button>
              <button
                onClick={() => ajouterAuPanier(plant, "grande")}
                className="bg-blue-500 text-white px-3 py-1 rounded-md"
              >
                Ajouter (Grande - {plant.prix.large}€)
              </button>
            </div>
          </div>
        ))}
      </div>

      <Panier panier={panier} setPanier={setPanier} />
    </div>
  );
}

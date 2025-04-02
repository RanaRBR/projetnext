// "use client";
// import React, { useEffect, useState } from "react";

// export default function Panier() {
//   const [panier, setPanier] = useState([]);

//   useEffect(() => {
//     const panierStocké = JSON.parse(localStorage.getItem("panier")) || [];
//     setPanier(panierStocké);
//   }, []);

//   const removeItem = (id) => {
//     const newPanier = panier.filter((item) => item.id !== id);
//     setPanier(newPanier);
//     localStorage.setItem("panier", JSON.stringify(newPanier));
//   };

//   return (
//     <div className="container mx-auto p-6 bg-white text-black">
//       <h2 className="text-2xl font-bold mb-4">Votre Panier</h2>
//       {panier.length === 0 ? <p>Le panier est vide.</p> : panier.map((item) => (
//         <div key={item.id} className="flex justify-between items-center p-4 border-b">
//           <div className="flex items-center">
//             <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
//             <p>{item.name} - {item.size} - {item.prix}€</p>
//           </div>
//           <button onClick={() => removeItem(item.id)} className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">Supprimer</button>
//         </div>
//       ))}
//     </div>
//   );
// }



// "use client";
// import React, { useEffect, useState } from "react";

// export default function Panier() {
//   const [panier, setPanier] = useState([]);

//   useEffect(() => {
//     const panierStocké = JSON.parse(localStorage.getItem("panier")) || [];
//     setPanier(panierStocké);
//   }, []);

//   // Supprimer un produit spécifique du panier
//   const removeItem = (id) => {
//     const newPanier = panier.filter((item) => item.id !== id);
//     setPanier(newPanier);
//     localStorage.setItem("panier", JSON.stringify(newPanier));
//   };

//   // Supprimer tous les produits du panier
//   const removeAllItems = () => {
//     setPanier([]);
//     localStorage.setItem("panier", JSON.stringify([]));
//   };

//   return (
//     <div className="container mx-auto p-6 bg-white text-black">
//       <h2 className="text-2xl font-bold mb-4">Votre Panier</h2>
      
//       {panier.length === 0 ? (
//         <p>Le panier est vide.</p>
//       ) : (
//         <>
//           {/* Affichage des produits du panier */}
//           {panier.map((item, index) => (
//             <div key={`${item.id}-${item.size}-${index}`} className="flex justify-between items-center p-4 border-b">
//               <div className="flex items-center">
//                 <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
//                 <p>{item.name} - {item.size} - {item.prix}€</p>
//               </div>
//               <button 
//                 onClick={() => removeItem(item.id)} 
//                 className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
//               >
//                 Supprimer
//               </button>
//             </div>
//           ))}
          
//           {/* Bouton pour supprimer tous les produits */}
//           <button
//             onClick={removeAllItems}
//             className="bg-yellow-600 text-white px-6 py-2 rounded-full mt-4"
//           >
//             Supprimer tout
//           </button>
//         </>
//       )}
//     </div>
//   );
// }


// "use client";
// import React, { useEffect, useState } from "react";

// export default function Panier() {
//   const [panier, setPanier] = useState([]);

//   useEffect(() => {
//     const panierStocké = JSON.parse(localStorage.getItem("panier")) || [];
//     setPanier(panierStocké);
//   }, []);

//   // Supprimer une pièce d'un produit spécifique
//   const removeOneItem = (id, size) => {
//     const newPanier = panier.map((item) => {
//       if (item.id === id && item.size === size) {
//         if (item.count > 1) {
//           return { ...item, count: item.count - 1 }; // Réduire le compteur
//         } else {
//           return null; // Si le compteur est à 1, on marque l'élément pour suppression
//         }
//       }
//       return item;
//     }).filter(item => item !== null); // On enlève les éléments qui ont été supprimés

//     setPanier(newPanier);
//     localStorage.setItem("panier", JSON.stringify(newPanier));
//   };

//   // Supprimer toutes les pièces d'un produit spécifique
//   const removeAllItems = (id, size) => {
//     const newPanier = panier.filter((item) => !(item.id === id && item.size === size));
//     setPanier(newPanier);
//     localStorage.setItem("panier", JSON.stringify(newPanier));
//   };

//   // Regrouper les produits par ID et compter leurs occurrences
//   const groupedPanier = panier.reduce((acc, item) => {
//     const found = acc.find((el) => el.id === item.id && el.size === item.size);
//     if (found) {
//       found.count += 1;
//     } else {
//       acc.push({ ...item, count: 1 });
//     }
//     return acc;
//   }, []);

//   return (
//     <div className="container mx-auto p-6 bg-white text-black">
//       <h2 className="text-2xl font-bold mb-4">Votre Panier</h2>

//       {groupedPanier.length === 0 ? (
//         <p>Le panier est vide.</p>
//       ) : (
//         <>
//           {/* Affichage des produits avec un compteur */}
//           {groupedPanier.map((item) => (
//             <div key={`${item.id}-${item.size}`} className="flex justify-between items-center p-4 border-b">
//               <div className="flex items-center">
//                 <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
//                 <p>{item.name} - {item.size} - {item.prix}€</p>
//                 <span className="ml-2 text-sm text-gray-600">x {item.count}</span> {/* Compteur */}
//               </div>

//               <div className="flex space-x-4">
//                 {/* Bouton pour supprimer une pièce */}
//                 <button 
//                   onClick={() => removeOneItem(item.id, item.size)} 
//                   className="bg-yellow-500 text-white px-4 py-2 rounded cursor-pointer"
//                 >
//                   Supprimer
//                 </button>
                
//                 {/* Bouton pour supprimer toutes les pièces du produit */}
//                 <button 
//                   onClick={() => removeAllItems(item.id, item.size)} 
//                   className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
//                 >
//                   Supprimer tout
//                 </button>
//               </div>
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";

export default function Panier() {
  const [panier, setPanier] = useState([]);

  useEffect(() => {
    const panierStocké = JSON.parse(localStorage.getItem("panier")) || [];
    setPanier(panierStocké);
  }, []);

  const removeItem = (id) => {
    const newPanier = panier.filter((item) => item.id !== id);
    setPanier(newPanier);
    localStorage.setItem("panier", JSON.stringify(newPanier));
  };

  const removeAllItems = () => {
    setPanier([]);
    localStorage.setItem("panier", JSON.stringify([]));
  };

  return (
    <div className="container mx-auto p-6 bg-white text-black">
      <h2 className="text-2xl font-bold mb-4">Votre Panier</h2>
      {panier.length === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        panier.map((item, index) => (
          <div key={`${item.id}-${index}`} className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover mr-4"
              />
              <p>
                {item.name} - {item.size} - {item.prix}€ - Quantité : {item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
            >
              Supprimer
            </button>
          </div>
        ))
      )}
      {panier.length > 0 && (
        <button
          onClick={removeAllItems}
          className="bg-red-700 text-white px-6 py-2 mt-4 rounded cursor-pointer"
        >
          Supprimer tout
        </button>
      )}
    </div>
  );
}

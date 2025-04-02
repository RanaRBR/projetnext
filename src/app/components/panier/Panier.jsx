// import { FaCartShopping } from "react-icons/fa6";

// function Panier({ panier, setPanier }) {
//   const supprimerDuPanier = (id) => {
//     setPanier(panier.filter((item) => item.id !== id));
//   };

//   const total = panier.reduce(
//     (acc, item) => acc + item.prix * item.quantite,
//     0
//   );

//   return (
//     <div className="p-6 bg-white shadow-xl rounded-lg max-w-3xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Votre Panier</h2>

//       {panier.length === 0 ? (
//         <p className="text-center text-xl text-gray-600">Le panier est vide.</p>
//       ) : (
//         <div className="space-y-4">
//           {panier.map((item) => (
//             <div
//               key={item.id}
//               className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-md"
//             >
//               <div className="flex items-center gap-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//                 <div>
//                   <p className="font-semibold">{item.name}</p>
//                   <p className="text-sm text-gray-600">Taille: {item.taille}</p>
//                   <p className="text-sm text-gray-600">Prix: {item.prix}€</p>
//                   <p className="text-sm text-gray-600">
//                     Quantité: {item.quantite}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 className="w-6 h-6 cursor-pointer"
//                 onClick={() => supprimerDuPanier(item.id)}
//               >
//                 <FaCartShopping />
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

    
//     </div>
//   );
// }

// export default Panier;


// import { FaCartShopping } from "react-icons/fa6";
// import React from "react";

// function Panier({ panier, setPanier }) {
//   // Fonction pour supprimer un item du panier en fonction de son id
//   const supprimerDuPanier = (id) => {
//     setPanier(panier.filter((item) => item.id !== id));
//   };

//   // Calcul du total, avec une vérification que panier est un tableau valide
//   const total = Array.isArray(panier)
//     ? panier.reduce((acc, item) => acc + item.prix * item.quantite, 0)
//     : 0;

//   return (
//     <div className="p-6 bg-white shadow-xl rounded-lg max-w-3xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Votre Panier</h2>

//       {/* Vérification de la longueur du panier */}
//       {panier.length === 0 ? (
//         <p className="text-center text-xl text-gray-600">Le panier est vide.</p>
//       ) : (
//         <div className="space-y-4">
//           {/* Affichage des items du panier */}
//           {panier.map((item) => (
//             <div
//               key={item.id}
//               className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-md"
//             >
//               <div className="flex items-center gap-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//                 <div>
//                   <p className="font-semibold">{item.name}</p>
//                   <p className="text-sm text-gray-600">Taille: {item.taille || "N/A"}</p>
//                   <p className="text-sm text-gray-600">Prix: {item.prix || 0}€</p>
//                   <p className="text-sm text-gray-600">
//                     Quantité: {item.quantite || 0}
//                   </p>
//                 </div>
//               </div>
//               {/* Bouton pour supprimer l'item du panier */}
//               <button
//                 className="w-6 h-6 cursor-pointer"
//                 onClick={() => supprimerDuPanier(item.id)}
//               >
//                 <FaCartShopping />
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Affichage du total si le panier n'est pas vide */}
//       {panier.length > 0 && (
//         <div className="mt-4">
//           <p className="font-semibold text-lg">Total: {total.toFixed(2)}€</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Panier;




import { FaCartShopping } from "react-icons/fa6";
import React from "react";

function Panier({ panier = [], setPanier }) {  // Valeur par défaut pour panier
  // Fonction pour supprimer un item du panier en fonction de son id
  const supprimerDuPanier = (id) => {
    setPanier(panier.filter((item) => item.id !== id));
  };

  // Calcul du total, avec une vérification que panier est un tableau valide
  const total = panier.reduce(
    (acc, item) => acc + item.prix * item.quantite,
    0
  );

  return (
    <div className="p-6 bg-white shadow-xl rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Votre Panier</h2>

      {/* Vérification de la longueur du panier */}
      {panier.length === 0 ? (
        <p className="text-center text-xl text-gray-600">Le panier est vide.</p>
      ) : (
        <div className="space-y-4">
          {/* Affichage des items du panier */}
          {panier.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">Taille: {item.taille || "N/A"}</p>
                  <p className="text-sm text-gray-600">Prix: {item.prix || 0}€</p>
                  <p className="text-sm text-gray-600">
                    Quantité: {item.quantite || 0}
                  </p>
                </div>
              </div>
              {/* Bouton pour supprimer l'item du panier */}
              <button
                className="w-6 h-6 cursor-pointer"
                onClick={() => supprimerDuPanier(item.id)}
              >
                <FaCartShopping />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Affichage du total si le panier n'est pas vide */}
      {panier.length > 0 && (
        <div className="mt-4">
          <p className="font-semibold text-lg">Total: {total.toFixed(2)}€</p>
        </div>
      )}
    </div>
  );
}

export default Panier;

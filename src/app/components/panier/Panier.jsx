// "use client";
// import './Panier.sass'
// import { FaShoppingCart } from "react-icons/fa";


// function Panier({ euro, panierCount, toggleSidebar }) {
//     return (
//         <div className='flex justify-center items-center gap-15'>
          
//           <div className="flex items-center">
//           <Link href="/cart" className="text-black hover:text-yellow-600 flex items-center">
//             <FaShoppingCart className="mr-5 text-xl" />
//           </Link>
//         </div>
//             <div className='relative cursor-pointer' onClick={toggleSidebar}>
//                 <img src={cart} alt="Panier" className='w-7' />
//                 {panierCount > 0 && (
//                     <span className='absolute top-3 left-4 bg-red-600 text-white text-xs px-2 rounded-full'>
//                         {panierCount}
//                     </span>
//                 )}
//             </div>

//             <div className='flex items-center gap-1'>
//                 <img src={euroIcon} alt="Euro" className='w-6' />
//                 <span className='text-2xl font-semibold'>{euro.toFixed(2)}</span>
//             </div>
//         </div>
//     )
// }

// "use client";
// import { useEffect, useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";

// function Panier({ panier = [], setPanier }) {
//   const [totalPrix, setTotalPrix] = useState(0);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (isMounted) {
//       setTotalPrix(panier.reduce((total, item) => total + item.prix * item.quantite, 0));
//     }
//   }, [panier, isMounted]);

//   const supprimerDuPanier = (id, taille) => {
//     setPanier((prevPanier) => prevPanier.filter((item) => !(item.id === id && item.taille === taille)));
//   };

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <div className="mt-10 p-4 border-t">
//       <h2 className="text-2xl font-semibold">🛒 Panier</h2>
//       {panier.length === 0 ? (
//         <p className="text-gray-600">Votre panier est vide.</p>
//       ) : (
//         <ul className="mt-4">
//           {panier.map((item) => (
//             <li key={`${item.id}-${item.taille}`} className="flex justify-between items-center p-2 border-b">
//               <span>
//                 {item.name} ({item.taille}) x{item.quantite}
//               </span>
//               <span>{item.prix * item.quantite}€</span>
//               <button onClick={() => supprimerDuPanier(item.id, item.taille)} className="text-red-500 ml-4">❌</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       <p className="text-xl font-bold mt-4">Total : {totalPrix}€</p>
//     </div>
//   );
// }

// export default Panier;
"use client";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

function Panier({ panier = [], setPanier }) {
  const [totalPrix, setTotalPrix] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setTotalPrix(panier.reduce((total, item) => total + item.prix * item.quantite, 0));
    }
  }, [panier, isMounted]);

  const supprimerDuPanier = (id, taille) => {
    setPanier((prevPanier) => prevPanier.filter((item) => !(item.id === id && item.taille === taille)));
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mt-10 p-4 border-t">
      <h2 className="text-2xl font-semibold">Panier</h2>
      {panier.length === 0 ? (
        <p className="text-gray-600">Votre panier est vide.</p>
      ) : (
        <ul className="mt-4">
          {panier.map((item) => (
            <li key={`${item.id}-${item.taille}`} className="flex justify-between items-center p-2 border-b">
              <span>
                {item.name} ({item.taille}) x{item.quantite}
              </span>
              <span>{item.prix * item.quantite}€</span>
              <button onClick={() => supprimerDuPanier(item.id, item.taille)} className="text-red-500 ml-4">❌</button>
            </li>
          ))}
        </ul>
      )}
      <p className="text-xl font-bold mt-4">Total : {totalPrix}€</p>
    </div>
  );
}

export default Panier;

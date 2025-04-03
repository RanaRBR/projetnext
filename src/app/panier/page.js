"use client";
import React, { useEffect, useState } from "react";
import { cinzel } from "@/font";


const Panier = () => {
  const [panier, setPanier] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("panier")) || [];
    setPanier(savedCart);
  }, []);

  const groupByProduct = (cart) => {
    const grouped = [];
    cart.forEach((item) => {
      const existingItem = grouped.find((p) => p.id === item.id && p.size === item.size);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        grouped.push({ ...item, qty: 1 });
      }
    });
    return grouped;
  };

  const supprimerUn = (id, size) => {
    const index = panier.findIndex((item) => item.id === id && item.size === size);
    if (index !== -1) {
      const newPanier = [...panier];
      newPanier.splice(index, 1);
      setPanier(newPanier);
      localStorage.setItem("panier", JSON.stringify(newPanier));
    }
  };

  const supprimerTout = (id, size) => {
    const newPanier = panier.filter((item) => !(item.id === id && item.size === size));
    setPanier(newPanier);
    localStorage.setItem("panier", JSON.stringify(newPanier));
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg padNav flex-col flex-grow h-screen">
      <h1
             className={`${cinzel.className} text-4xl font-semibold text-black p-8 text-center`}
           >
             Mon panier
           </h1>

      {panier.length === 0 ? (
        <p className="text-center text-gray-500">Votre panier est vide.</p>
      ) : (
        <ul className="space-y-6">
          {groupByProduct(panier).map((item, index) => (
            <li key={index} className="flex items-center justify-around border-b pb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <p className="text-lg font-semibold">{item.name} ({item.size})</p>
                  <p className="text-gray-600">{item.prix}€ x {item.qty}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => supprimerUn(item.id, item.size)}
                  className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Supprimer
                </button>
                <button
                  onClick={() => supprimerTout(item.id, item.size)}
                  className="bg-red-700 hover:bg-red-900 text-white px-4 py-2 rounded"
                >
                  Supprimer tout
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Panier;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DarkMode from "../darkmode/Darkmode";
import { enriquita } from "@/font";
import "./Navbar.sass";
import Panier from "../panier/Panier"; 
import { FaCartShopping } from "react-icons/fa6"; 

const Navbar = ({ panier = [], setPanier }) => {
  const [panierVisible, setPanierVisible] = useState(false);

  const togglePanier = () => {
    setPanierVisible(!panierVisible);
  };

  return (
    <nav className="car flex items-center font-semibold">
      <div
        className={`${enriquita.className} antialiased  w-full flex items-center shadow-2xl shadow-black px-8 `}
      >
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/assets/images/logo2.png"
              alt="Logo"
              width={150}
              height={150}
              className="mr-5"
            />
          </Link>
        </div>
        <div className="flex-grow flex justify-center">
          <ul className="flex space-x-10 m-0 p-0 text-xl items-center">
            <li>
              <Link href="/" className="text-black hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/produits" className="text-black hover:text-yellow-600">
                Produits
              </Link>
            </li>
            <li>
              <Link href="/entretien" className="text-black hover:text-yellow-600">
                Entretien
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black hover:text-yellow-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center px-3">
          {/* <button
            onClick={togglePanier}
            className="text-black hover:text-yellow-600 flex items-center px-4 py-2 text-xl"
          >
            <FaCartShopping className="mr-2" />
             ({panier.length})
          </button> */}
        </div>
        <Panier/>
        <DarkMode />
      </div>
      {panierVisible && <Panier panier={panier} setPanier={setPanier} />}
    </nav>
  );
};

export default Navbar;
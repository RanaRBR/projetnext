/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { enriquita } from "@/font";
import "./Navbar.sass";
import DarkMode from "../darkmode/Darkmode";

const Navbar = () => {
  const [panier, setPanier] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const updatePanier = () => {
      const savedCart = JSON.parse(localStorage.getItem("panier")) || [];
      setPanier(savedCart);
    };

    updatePanier();
    window.addEventListener("storage", updatePanier);
    return () => window.removeEventListener("storage", updatePanier);
  }, []);

  return (
    <nav className="car flex items-center font-semibold fixed top-0 left-0 w-full z-50">
      <div className={`${enriquita.className} antialiased w-full flex items-center shadow-lg shadow-black px-8`}>
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/assets/images/logo2.png" alt="Logo" width={120} height={120} className="mr-5" />
          </Link>
        </div>

        <div className={`navbar-links ${menuOpen ? "open" : ""} w-full md:flex md:justify-center`}>
          <ul className="flex space-x-10 m-0 p-0 text-xl items-center justify-center w-full">
            <li><Link href="/" className="text-black hover:text-yellow-600" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/produits" className="text-black hover:text-yellow-600" onClick={() => setMenuOpen(false)}>Produits</Link></li>
            <li><Link href="/entretien" className="text-black hover:text-yellow-600" onClick={() => setMenuOpen(false)}>Entretien</Link></li>
            <li><Link href="/contact" className="text-black hover:text-yellow-600" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>

        <div className="flex items-center px-3 relative">
          <button
            onClick={() => router.push("/panier")}
            className="text-black hover:text-yellow-600 flex items-center px-4 py-2 text-xl cursor-pointer relative"
          >
            <FaCartShopping className="mr-2 text-2xl" />
            {panier.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {panier.length}
              </span>
            )}
          </button>
        </div>
        {/* <DarkMode /> */}

        <button className={`burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

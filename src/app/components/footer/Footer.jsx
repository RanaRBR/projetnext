"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiPinterest } from "react-icons/si";
import { enriquita } from "@/font";
import { useTheme } from "@/context/ThemeContext";
import "./Footer.sass";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={` car w-full flex items-center justify-between px-10 py-4 font-semibold  ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex space-x-5 text-xl text-black">
        <Link href="/cart" className="hover:text-yellow-600">
          <FaFacebook />
        </Link>
        <Link href="/cart" className="hover:text-yellow-600">
          <FaSquareInstagram />
        </Link>
        <Link href="/cart" className="hover:text-yellow-600">
          <SiPinterest />
        </Link>
      </div>

      <div>
        <ul className="flex space-x-10 text-xl text-black">
          <li>
            <Link href="/blog" className="hover:text-yellow-600">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/entretien" className="hover:text-yellow-600">
              Entretien
            </Link>
          </li>
          <li>
            <Link href="/politique" className="hover:text-yellow-600">
              Politique de confidentialité
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <Link href="/">
        <Image
          src="/assets/images/logo2.png"
          alt="Logo"
          width={150}
          height={150}
        />
      </Link>
    </footer>
  );
};

export default Footer;

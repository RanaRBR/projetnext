import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { HiMiniMoon } from "react-icons/hi2";
import { IoSunny } from "react-icons/io5";
import { enriquita } from "@/font";
import "./Navbar.sass"

const Navbar = () => {
  return (
    <nav className="bg-stone-300 flex items-center shadow-2xl shadow-black car">
      <div className={`${enriquita.className} antialiased shadow-2xl shadow-stone-400 w-full flex items-center`}>
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
              <Link href="/products" className="text-black hover:text-yellow-600">
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
        <div className="flex items-center">
          <Link
            href="/cart"
            className="text-black hover:text-yellow-600 flex items-center"
          >
            <FaShoppingCart className="mr-5 text-xl" />
          </Link>

          <Link
            href="/cart"
            className="text-black hover:text-yellow-600 flex items-center"
          >
            <HiMiniMoon className="mr-5 text-xl" />
          </Link>

          <Link
            href="/cart"
            className="text-black hover:text-yellow-600 flex items-center"
          >
            <IoSunny className="mr-5 text-xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
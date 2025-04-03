// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { FaFacebook } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { SiPinterest } from "react-icons/si";
// import { enriquita } from "@/font";
// // import { useTheme } from "@/context/ThemeContext";
// import "./Footer.sass";
// import DarkMode from "../darkmode/Darkmode";

// const Footer = () => {
//   // const { isDarkMode } = useTheme();

//   return (
//     <footer
//       className={` car w-full flex items-center justify-between px-10 py-4 font-semibold mt-auto ${
//       DarkMode ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
//       <div className="flex space-x-5 text-xl text-black">
//         <Link href="/cart" className="hover:text-yellow-600">
//           <FaFacebook />
//         </Link>
//         <Link href="/cart" className="hover:text-yellow-600">
//           <FaSquareInstagram />
//         </Link>
//         <Link href="/cart" className="hover:text-yellow-600">
//           <SiPinterest />
//         </Link>
//       </div>

//       <div>
//         <ul className="flex space-x-10 text-xl text-black lisF">
//           <li>
//             <Link href="/blog" className="hover:text-yellow-600">
//               Blog
//             </Link>
//           </li>
//           <li>
//             <Link href="/entretien" className="hover:text-yellow-600">
//               Entretien
//             </Link>
//           </li>
//           <li>
//             <Link href="/politique" className="hover:text-yellow-600">
//               Politique de confidentialité
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="hover:text-yellow-600">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <Link href="/">
//         <Image
//           src="/assets/images/logo2.png"
//           alt="Logo"
//           width={120}
//           height={120}
//         />
//       </Link>
//     </footer>
//   );
// };

// export default Footer;

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { FaFacebook } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { SiPinterest } from "react-icons/si";
// import { enriquita } from "@/font";
// // import { useTheme } from "@/context/ThemeContext";
// import "./Footer.sass";
// import DarkMode from "../darkmode/Darkmode";

// const Footer = () => {
//   // const { isDarkMode } = useTheme();

//   return (
//     <footer
//       className={`car w-full flex flex-col sm:flex-row items-start justify-between px-6 py-2 font-semibold mt-auto ${
//         DarkMode ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
//       {/* Footer Links */}
//       <div className="mb-4 sm:mb-0">
//         <ul className="flex flex-col sm:flex-row sm:space-x-10 space-y-2 sm:space-y-0 text-xl text-black text-left">
//           <li>
//             <Link href="/blog" className="hover:text-yellow-600">
//               Blog
//             </Link>
//           </li>
//           <li>
//             <Link href="/entretien" className="hover:text-yellow-600">
//               Entretien
//             </Link>
//           </li>
//           <li>
//             <Link href="/politique" className="hover:text-yellow-600">
//               Politique de confidentialité
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="hover:text-yellow-600">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Logo */}
//       <Link href="/">
//         <Image
//           src="/assets/images/logo2.png"
//           alt="Logo"
//           width={120}
//           height={120}
//           className="mt-4 sm:mt-0"
//         />
//       </Link>

//       {/* Social Media Links - Alignés à droite */}
//       <div className="flex space-x-5 text-xl text-black mb-4 sm:mb-0 ml-auto">
//         <Link href="/cart" className="hover:text-yellow-600">
//           <FaFacebook />
//         </Link>
//         <Link href="/cart" className="hover:text-yellow-600">
//           <FaSquareInstagram />
//         </Link>
//         <Link href="/cart" className="hover:text-yellow-600">
//           <SiPinterest />
//         </Link>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiPinterest } from "react-icons/si";
import { enriquita } from "@/font";
// import { useTheme } from "@/context/ThemeContext";
import "./Footer.sass";
import DarkMode from "../darkmode/Darkmode";

const Footer = () => {
  // const { isDarkMode } = useTheme();

  return (
    <footer
      className={`car w-full flex flex-col sm:flex-row items-center justify-between px-6 py-4 font-semibold mt-auto ${
        DarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="mb-4 sm:mb-0">
        <Image
          src="/assets/images/logo2.png"
          alt="Logo"
          width={120}
          height={120}
        />
      </Link>

      {/* Footer Links */}
      <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-0">
        <ul className="flex flex-col sm:flex-row sm:space-x-10 space-y-2 sm:space-y-0 text-xl text-black text-center">
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

      {/* Social Media Links */}
      <div className="flex space-x-5 text-xl text-black mb-4 sm:mb-0">
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
    </footer>
  );
};

export default Footer;
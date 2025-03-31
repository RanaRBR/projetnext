// export default function Blog() {

//     return (
//       <div className="max-w-4xl mx-auto p-6 text-gray-800">
//         <h1 className="text-3xl font-bold text-green-700 mb-6">Green Store : Quand la nature s’invite chez vous</h1>
        
//         <p className="mb-4">
//           Dans un monde où la nature semble parfois lointaine, <strong>Green Store</strong> redonne vie aux intérieurs en proposant une sélection unique de plantes qui transforment chaque espace en un havre de verdure. Depuis son ouverture, cette boutique s’est imposée comme une référence pour tous les amoureux de plantes, qu'ils soient jardiniers en herbe ou collectionneurs avertis.
//         </p>
  
//         <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-3">Une collection unique et responsable</h2>
//         <p className="mb-4">
//           Derrière <strong>Green Store</strong>, une mission claire : offrir des plantes de qualité tout en respectant l’environnement. Chaque variété est soigneusement sélectionnée pour s’adapter aux différents intérieurs et modes de vie. <strong>Des succulentes aux fougères tropicales en passant par des cactus majestueux</strong>, le choix est vaste et accessible à tous.
//         </p>
//         <p className="mb-4">
//           La boutique propose également une sélection de plantes "purificatrices d'air", comme le <strong>Ficus Lyrata</strong> ou le <strong>Spathiphyllum</strong>, idéales pour améliorer la qualité de l'air intérieur. Sans oublier les amateurs de jardinage urbain, qui peuvent trouver une gamme de plantes dédiée aux petits espaces et aux balcons.
//         </p>
  
//         <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-3">Des pots artisanaux et atypiques venus du Portugal</h2>
//         <p className="mb-4">
//           Chez <strong>Green Store</strong>, les plantes s’accompagnent de pots uniques qui ajoutent une touche de caractère à chaque intérieur. La boutique met en avant une collection exclusive de <strong>pots artisanaux et atypiques</strong>, réalisés à la main par des artisans portugais. Ces pièces, aux formes organiques et aux finitions authentiques, apportent une véritable identité visuelle et une note d’authenticité à chaque plante.
//         </p>
//         <p className="mb-4">
//           Que ce soit en céramique brute, en terre cuite patinée ou aux motifs inspirés de la tradition portugaise, chaque pot raconte une histoire.
//         </p>
  
//         <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-3">Conseils personnalisés et engagement écologique</h2>
//         <p className="mb-4">
//           Au-delà de la vente, <strong>Green Store</strong> mise sur l’accompagnement. "Nous voulons que nos clients repartent avec une plante qu'ils sauront entretenir", explique <strong>Sophie Dupont</strong>, fondatrice de la boutique. Des conseils sur mesure sont prodigués en magasin et sur les réseaux sociaux, où une communauté engagée partage astuces et expériences.
//         </p>
//         <p className="mb-4">
//           L'engagement écologique est aussi au cœur du projet : les pots sont en matières recyclées ou artisanales, les emballages sont biodégradables et les fournisseurs sont soigneusement choisis pour leur approche durable. "Chaque plante a une histoire, et nous voulons que cette histoire commence de la manière la plus respectueuse possible".
//         </p>
  
//         <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-3">Un lieu d’inspiration et de bien-être</h2>
//         <p className="mb-4">
//           En franchissant la porte de <strong>Green Store</strong>, c'est un véritable voyage sensoriel qui s'opère. L’ambiance chaleureuse, l’odeur subtile des feuillages et la lumière douce créent un cadre apaisant. La boutique organise régulièrement des ateliers sur l’entretien des plantes, la création de terrariums ou encore l’art de la bouture, permettant à chacun de développer ses talents de jardinier.
//         </p>
//         <p className="mb-6">
//           <strong>Green Store</strong>, bien plus qu’une simple boutique, c’est une invitation à ramener un peu de nature chez soi. Une adresse incontournable pour tous ceux qui rêvent d’un intérieur vivant et inspirant.
//         </p>
  
//         <p className="text-center font-semibold text-green-700">
//           *Retrouvez Green Store en boutique et sur Instagram @GreenStorePlantes*
//         </p>
//       </div>
//     );
//   }



import { cinzel } from "@/font";
import { enriquita } from "@/font";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="container mx-auto bg-white text-black p-20">
      <h1 className={`${cinzel.className} antialiased text-4xl font-semibold text-black mt-20`}>
        Green Store : Quand la nature s’invite chez vous
      </h1>

      <div className="section-container mt-10 flex flex-wrap justify-between">
        <div className="text-section w-full md:w-1/2 px-4 mb-10">
          <p>
            Dans un monde où la nature semble parfois lointaine, <strong>Green Store</strong> redonne vie aux intérieurs en proposant une sélection unique de plantes qui transforment chaque espace en un havre de verdure. Depuis son ouverture, cette boutique s’est imposée comme une référence pour tous les amoureux de plantes, qu'ils soient jardiniers en herbe ou collectionneurs avertis.
          </p>
        </div>
        <div className="image-section w-full md:w-1/2 px-4 mb-10 flex justify-center items-center">
          <Image
            src="/assets/images/greenstore.jpg"
            alt="Green Store boutique"
            width={500}
            height={300}
            className="rounded-md shadow-lg"
          />
        </div>
      </div>

      <h2 className={`${enriquita.className} antialiased text-2xl font-semibold p-5`}>
        🌿 Une collection unique et responsable
      </h2>
      <p>
        Derrière <strong>Green Store</strong>, une mission claire : offrir des plantes de qualité tout en respectant l’environnement. Chaque variété est soigneusement sélectionnée pour s’adapter aux différents intérieurs et modes de vie.
      </p>

      <div className="section-container mt-10 flex flex-wrap justify-between">
        <div className="image-section w-full md:w-1/2 px-4 mb-10 flex justify-center items-center">
          <Image
            src="/assets/images/plantes.jpg"
            alt="Plantes Green Store"
            width={500}
            height={300}
            className="rounded-md shadow-lg"
          />
        </div>
        <div className="text-section w-full md:w-1/2 px-4 mb-10">
          <p>
            La boutique propose une sélection de plantes "purificatrices d'air", comme le <strong>Ficus Lyrata</strong> ou le <strong>Spathiphyllum</strong>, idéales pour améliorer la qualité de l'air intérieur.
          </p>
        </div>
      </div>

      <h2 className={`${enriquita.className} antialiased text-2xl font-semibold p-5`}>
        🏺 Des pots artisanaux et atypiques venus du Portugal
      </h2>
      <p>
        Chez <strong>Green Store</strong>, les plantes s’accompagnent de pots uniques qui ajoutent une touche de caractère à chaque intérieur. Ces pièces, aux formes organiques et aux finitions authentiques, sont réalisées à la main par des artisans portugais.
      </p>

      <div className="image-section w-full px-4 mb-10 flex justify-center items-center">
        <Image
          src="/assets/images/pots-artisanaux.jpg"
          alt="Pots artisanaux du Portugal"
          width={500}
          height={300}
          className="rounded-md shadow-lg"
        />
      </div>

      <h2 className={`${enriquita.className} antialiased text-2xl font-semibold p-5`}>
        🌍 Conseils personnalisés et engagement écologique
      </h2>
      <p>
        Au-delà de la vente, <strong>Green Store</strong> mise sur l’accompagnement. "Nous voulons que nos clients repartent avec une plante qu'ils sauront entretenir", explique <strong>Sophie Dupont</strong>, fondatrice de la boutique.
      </p>
      <p>
        L'engagement écologique est aussi au cœur du projet : pots en matières recyclées, emballages biodégradables, et fournisseurs soigneusement choisis pour leur approche durable.
      </p>

      <h2 className={`${enriquita.className} antialiased text-2xl font-semibold p-5`}>
        🌿 Un lieu d’inspiration et de bien-être
      </h2>
      <p>
        En franchissant la porte de <strong>Green Store</strong>, c'est un véritable voyage sensoriel qui s'opère. La boutique organise régulièrement des ateliers sur l’entretien des plantes, la création de terrariums et l’art de la bouture.
      </p>

      <p className="mt-10 text-lg font-semibold">
        Retrouvez Green Store en boutique et sur Instagram <strong>@GreenStorePlantes</strong>.
      </p>
    </div>
  );
};

export default Blog;


  
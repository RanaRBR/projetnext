import { cinzel } from "@/font";
import { enriquita } from "@/font";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="container mx-auto bg-white text-black p-10 padNav">
      <h1
        className={`${cinzel.className} antialiased text-4xl font-semibold text-black mt-20 w-full text-center`}
      >
        Green Store : La nature s'invite dans votre intérieur...
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
        <div className="text-section w-full text-center md:col-span-2">
          <p className=" max-w-3xl mx-auto text-lg mb-20 " >
            Dans un monde où la nature semble parfois lointaine,{" "}
            <strong>Green Store</strong> redonne vie aux intérieurs en proposant
            une sélection unique de plantes qui transforment chaque espace en un
            havre de verdure. Depuis son ouverture, cette boutique s’est imposée
            comme une référence pour tous les amoureux de plantes, qu'ils soient
            jardiniers en herbe ou collectionneurs avertis. Véritable temple du
            design botanique, cette enseigne belge propose une gamme
            exceptionnelle de plantes et de pots au style raffiné.
          </p>
        </div>
      </div>

      <h2
        className={`${enriquita.className} antialiased text-2xl font-semibold p-5 mx-20`}
      >
        🌿 Une collection unique et responsable
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mb-20">
        <div className="image-section flex justify-center items-center">
          <Image
            src="/assets/images/blog.jpg"
            alt="Green Store boutique"
            width={400}
            height={300}
            className="rounded-md shadow-lg"
          />
        </div>
        <p className="w-full md:w-1/2 px-4 mb-5 mx-20">
          Récemment, le magazine belge <strong>Gael</strong> a interviewé Lucas
          Moreau, fondateur de Green Store, une enseigne qui révolutionne la
          décoration végétale. Dans cet échange passionnant, il partage son
          parcours, sa passion pour les plantes et son engagement pour un design
          écoresponsable. Derrière <strong>Green Store</strong>, une mission
          claire : offrir des plantes de qualité tout en respectant
          l’environnement. Chaque variété est soigneusement sélectionnée pour
          s’adapter aux différents intérieurs et modes de vie.
        </p>
      </div>

      <h2
        className={`${enriquita.className} antialiased text-2xl font-semibold p-5 mx-20`}
      >
        🏺 Des pots artisanaux et atypiques venus du Portugal
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="image-section flex justify-center items-center order-2 md:order-1">
          <Image
            src="/assets/images/pot.jpg"
            alt="Pots artisanaux du Portugal"
            width={400}
            height={400}
            className="rounded-md shadow-lg"
          />
        </div>
        <p className="w-full md:w-1/2 px-4 mb-10 mx-30">
          Chez <strong>Green Store</strong>, les plantes s’accompagnent de pots
          uniques qui ajoutent une touche de caractère à chaque intérieur. Ces
          pièces, aux formes organiques et aux finitions authentiques, sont
          réalisées à la main par des artisans portugais. Entre minimalisme
          scandinave et artisanat traditionnel, Green Store propose une
          collection exclusive de pots en céramique, en béton brut et en
          matériaux recyclés. "Nous collaborons avec des artisans et designers
          belges pour proposer des modèles à la fois modernes et intemporels.
          Céramique artisanale, béton minimaliste ou matériaux recyclés, chaque
          pot est pensé pour mettre en valeur la plante et s’intégrer
          parfaitement à différents styles de décoration."
        </p>
      </div>

      <h2
        className={`${enriquita.className} antialiased text-2xl font-semibold p-5 mx-20 mt-10`}
      >
        🌍 Conseils personnalisés et engagement écologique
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mx-20">
        <div className="image-section flex justify-center items-center">
          <Image
            src="/assets/images/eco.jpg"
            alt="Pots artisanaux du Portugal"
            width={500}
            height={500}
            className="rounded-md shadow-lg"
          />
        </div>
        <p className="w-full md:w-1/2 mx-20 mb-10">
          Au-delà de la vente, <strong>Green Store</strong> mise sur
          l’accompagnement. "Nous voulons que nos clients repartent avec une
          plante qu'ils sauront entretenir", explique{" "}
          <strong>Sophie Dupont</strong>, fondatrice de la boutique.
          L'engagement écologique est aussi au cœur du projet : pots en matières
          recyclées, emballages biodégradables, et fournisseurs soigneusement
          choisis pour leur approche durable.
        </p>
      </div>

      <h2
        className={`${enriquita.className} antialiased text-2xl font-semibold p-5 mx-20 mt-15`}
      >
        🌿 Un lieu d’inspiration et de bien-être
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mx-30">
        <div className="image-section flex justify-center items-center order-2 md:order-1">
          <Image
            src="/assets/images/atelier.jpg"
            alt="Atelier Green Store"
            width={400}
            height={400}
            className="rounded-md shadow-lg"
          />
        </div>
        <p className="w-full md:w-1/2 px-4 mb-10 mx-20">
          Green Store ne se limite pas à la vente de plantes : c'est une
          véritable philosophie de vie qui encourage un retour à l'essentiel.
          Avec une approche écoresponsable et un souci du détail, cette enseigne
          belge révolutionne l’univers de la décoration intérieure en apportant
          une touche de nature dans chaque foyer. En franchissant la porte de{" "}
          <strong>Green Store</strong>, c'est un véritable voyage sensoriel qui
          s'opère. La boutique organise régulièrement des ateliers sur
          l’entretien des plantes, la création de terrariums et l’art de la
          bouture.
        </p>
      </div>

      <p className="mt-10 text-lg font-semibold">
        Retrouvez Green Store en boutique et sur Instagram{" "}
        <strong>@GreenStorePlantes</strong>.
      </p>
    </div>
  );
};

export default Blog;

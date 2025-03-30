import { cinzel } from "@/font";
import { enriquita } from "@/font";
import Image from "next/image";

const Entretien = () => {
  return (
    <div className="container mx-auto bg-white text-black p-20">
      <h1
        className={`${cinzel.className} antialiased text-4xl font-semibold text-black mt-20`}
      >
        Entretien des Plantes
      </h1>

      <div className="section-container mt-10 flex flex-wrap justify-between">
        <div className="text-section w-full md:w-1/2 px-4 mb-10">
          <h2
            className={`${enriquita.className} antialiased w-full flex items-center text-2xl font-semibold p-5`}
          >
            🌱 Entretien des plantes d'intérieur
          </h2>
          <p>
            Les plantes d'intérieur ajoutent une touche de fraîcheur à votre
            maison et améliorent l'air ambiant. Voici quelques astuces pour
            prendre soin de vos plantes d'intérieur :
          </p>
          <ul className="list-disc ml-5 mt-4">
            <li>
              <strong>Lumière</strong> : la plupart des plantes d'intérieur
              préfèrent une lumière indirecte. Évitez l'exposition directe au
              soleil qui peut brûler les feuilles.
            </li>
            <li>
              <strong>Arrosage</strong> : arrosez modérément, en laissant sécher
              le sol entre les arrosages. La fréquence d'arrosage dépend de la
              température et de l'humidité, mais une règle générale est
              d'arroser une fois par semaine en hiver et deux fois en été.
            </li>
            <li>
              <strong>Température</strong> : la température idéale pour la
              plupart des plantes d'intérieur se situe entre 18 et 24°C. Évitez
              les courants d'air froids et les changements brusques de
              température.
            </li>
            <li>
              <strong>Humidité</strong> : les plantes d'intérieur aiment une
              humidité modérée. Si l'air est trop sec, vous pouvez augmenter
              l'humidité autour des plantes en les vaporisant ou en utilisant un
              humidificateur.
            </li>
            <li>
              <strong>Fertilisation</strong> : pendant la période de croissance
              (printemps et été), fertilisez vos plantes d'intérieur toutes les
              4 à 6 semaines avec un engrais liquide pour plantes d'intérieur.
            </li>
          </ul>
        </div>
        <div className="image-section w-full md:w-1/2 px-4 mb-10 flex justify-center items-center">
          <Image
            src="/assets/images/rempotage.jpg"
            alt="Plante d'intérieur"
            width={500}
            height={300}
            className="rounded-md shadow-lg"
          />
        </div>
      </div>

      <div className="section-container mt-10 flex flex-wrap justify-between">
        <div className="image-section w-full md:w-1/2 px-4 mb-10 flex justify-center items-center">
          <Image
            src="/assets/images/entretien.jpg"
            alt="Plante extérieure"
            width={500}
            height={500}
            className="rounded-md shadow-lg"
          />
        </div>
        <div className="text-section w-full md:w-1/2 px-4 mb-10">
          <h2
            className={`${enriquita.className} antialiased w-full flex items-center text-2xl font-semibold p-5`}
          >
            🌞 Entretien des plantes extérieures
          </h2>
          <p>
            Les plantes extérieures ont des besoins différents selon la saison
            et l'environnement. Voici nos conseils pour prendre soin de vos
            plantes en extérieur :
          </p>
          <ul className="list-disc ml-5 mt-4">
            <li>
              <strong>Lumière</strong> : la plupart des plantes extérieures
              préfèrent une exposition en plein soleil. Cependant, certaines
              plantes, comme les fougères, préfèrent l'ombre partielle.
            </li>
            <li>
              <strong>Arrosage</strong> : en extérieur, l'arrosage doit être
              plus fréquent, surtout pendant les mois chauds. Cependant, veillez
              à ne pas trop arroser. Un sol bien drainé est essentiel pour
              éviter l'engorgement.
            </li>
            <li>
              <strong>Entretien saisonnier</strong> : au printemps, taillez les
              plantes mortes ou endommagées pour encourager une nouvelle
              croissance. En hiver, protégez vos plantes des gelées en utilisant
              des couvertures ou des paillis.
            </li>
            <li>
              <strong>Sol</strong> : assurez-vous que le sol est bien préparé.
              Si vous plantez dans un jardin, l'ajout de compost et de
              nutriments est essentiel pour la croissance de vos plantes
              extérieures.
            </li>
            <li>
              <strong>Protection contre les parasites</strong> : inspectez
              régulièrement vos plantes pour détecter les signes de maladies ou
              de parasites. Utilisez des produits biologiques ou des méthodes
              naturelles pour les combattre.
            </li>
          </ul>
        </div>
      </div>

      <div className="section-container mt-10 flex flex-wrap justify-between">
        <div className="text-section w-full md:w-1/2 px-4 mb-10">
          <h2
            className={`${enriquita.className} antialiased w-full flex items-center text-2xl font-semibold p-5`}
          >
            🌵 Entretien des cactus et succulentes
          </h2>
          <p>
            Les cactus et succulentes sont des plantes résistantes, mais elles
            ont des exigences particulières. Voici quelques conseils pour les
            garder en bonne santé :
          </p>
          <ul className="list-disc ml-5 mt-4">
            <li>
              <strong>Lumière</strong> : ces plantes adorent la lumière directe
              du soleil. Placez-les dans une fenêtre ensoleillée ou à
              l'extérieur pendant les mois plus chauds.
            </li>
            <li>
              <strong>Arrosage</strong> : les cactus et succulentes tolèrent
              bien la sécheresse, mais cela ne signifie pas qu'elles n'ont pas
              besoin d'eau. Arrosez-les seulement lorsque le sol est sec,
              généralement une fois toutes les 2 à 3 semaines en hiver et une
              fois par semaine en été.
            </li>
            <li>
              <strong>Température</strong> : elles préfèrent des températures
              chaudes, mais peuvent supporter une certaine chaleur. Cependant,
              évitez de les exposer à des températures inférieures à 10°C, car
              cela pourrait endommager leurs racines.
            </li>
            <li>
              <strong>Drainage</strong> : utilisez un terreau bien drainant. Il
              est important de ne pas laisser d'eau stagnante dans le pot. Un
              excès d'humidité peut causer la pourriture des racines.
            </li>
            <li>
              <strong>Fertilisation</strong> : fertilisez vos cactus et
              succulentes pendant la saison de croissance (printemps et été)
              avec un engrais spécifique pour succulentes, environ une fois par
              mois.
            </li>
          </ul>
        </div>
        <div className="image-section w-full md:w-1/2 px-4 mb-10 flex justify-center items-center">
          <Image
            src="/assets/images/arrosage.jpg"
            alt="Cactus et succulentes"
            width={500}
            height={500}
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Entretien;

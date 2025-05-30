/* eslint-disable react/no-unescaped-entities */
import { cinzel } from "@/font";
import { serif } from "@/font";

const Politique = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-black flex flex-col items-center justify-center padNav">
      <h1 className={`${cinzel.className} antialiased text-4xl font-semibold text-black p-8 text-center`}>
        Politique de confidentialité
      </h1>
      <p className="mb-4 text-center">Dernière mise à jour : 31 mars 2025</p>
      
      <h2 className={`${serif.className} antialiased text-2xl font-semibold text-center p-5`}>1. Introduction</h2>
      <p className="text-center">
        Chez Green Store, nous attachons une grande importance à la protection de vos données personnelles. <br/>
        Cette politique de confidentialité explique quelles informations nous collectons, comment nous les utilisons
        et quels sont vos droits à cet égard.
      </p>
      
      <h2 className={`${serif.className} antialiased text-2xl font-semibold text-center p-5`}>2. Données collectées</h2>
      <p className="text-center">
        Nous collectons les informations suivantes :
      </p>
      <ul className="list-disc list-inside mb-4 text-center">
        <li>Nom et prénom</li>
        <li>Adresse e-mail</li>
        <li>Adresse postale et numéro de téléphone</li>
        <li>Informations de paiement (lors d'un achat)</li>
        <li>Données de navigation sur notre site</li>
      </ul>
      
      <h2 className={`${serif.className} antialiased text-2xl font-semibold text-center p-5`}>3. Utilisation des données</h2>
      <p className="text-center">
        Nous utilisons vos informations pour :
      </p>
      <ul className="list-disc list-inside mb-4 text-center">
        <li>Traiter vos commandes et livraisons</li>
        <li>Vous envoyer des offres et promotions</li>
        <li>Améliorer notre site web et votre expérience utilisateur</li>
        <li>Respecter nos obligations légales</li>
      </ul>
      
      <h2 className={`${serif.className} antialiased text-2xl font-semibold text-center p-5`}>4. Partage des données</h2>
      <p className="text-center">
        Nous ne vendons ni ne louons vos données personnelles. Cependant, nous pouvons partager vos informations avec :
      </p>
      <ul className="list-disc list-inside mb-4 text-center">
        <li>Nos prestataires de services (livraison, paiement, hébergement web)</li>
        <li>Les autorités si la loi l'exige</li>
      </ul>
      
      <h2 className={`${serif.className} antialiased text-2xl font-semibold text-center p-5`}>5. Vos droits</h2>
      <p className="text-center">
        Conformément à la réglementation en vigueur en Belgique, vous disposez des droits suivants :
      </p>
      <ul className="list-disc list-inside mb-4 text-center">
        <li>Accéder à vos données personnelles</li>
        <li>Rectifier ou supprimer vos informations</li>
        <li>Vous opposer au traitement de vos données</li>
        <li>Demander la portabilité de vos données</li>
      </ul>
      
      <h2 className={`${serif.className} antialiased text-2xl font-semibold text-center p-5`}>6. Contact</h2>
      <p className="text-center">
        Pour toute question relative à notre politique de confidentialité, vous pouvez nous contacter à :
      </p>
      <p className="font-semibold text-center">Email : contact@greenstore.be</p>
      <p className="font-semibold text-center">Adresse : Place Minotorie 10, 1080 Molenbeek, Belgique</p>
    </div>
  );
};

export default Politique;

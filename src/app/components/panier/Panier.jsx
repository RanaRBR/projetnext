import { FaCartShopping } from "react-icons/fa6";

function Panier({ panier, setPanier }) {
  const supprimerDuPanier = (id) => {
    setPanier(panier.filter((item) => item.id !== id));
  };

  const total = panier.reduce(
    (acc, item) => acc + item.prix * item.quantite,
    0
  );

  return (
    <div className="p-6 bg-white shadow-xl rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Votre Panier</h2>

      {panier.length === 0 ? (
        <p className="text-center text-xl text-gray-600">Le panier est vide.</p>
      ) : (
        <div className="space-y-4">
          {panier.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">Taille: {item.taille}</p>
                  <p className="text-sm text-gray-600">Prix: {item.prix}€</p>
                  <p className="text-sm text-gray-600">
                    Quantité: {item.quantite}
                  </p>
                </div>
              </div>
              <button
                className="w-6 h-6 cursor-pointer"
                onClick={() => supprimerDuPanier(item.id)}
              >
                <FaCartShopping />
              </button>
            </div>
          ))}
        </div>
      )}

    
    </div>
  );
}

export default Panier;
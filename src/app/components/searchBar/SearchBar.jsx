function Searchbar({ search }) {

  return (
    <div className="flex flex-col items-center gap-3 mt-6">
      <input
        type="text"
        name="Searchbar"
        id="Searchbar"
        placeholder="Rechercher une plante..."
        onChange={(e) => search(e.target.value)}
        className="w-[80%] max-w-md px-4 py-2 border-2 border-gray-300 
                     rounded-full focus:outline-none focus:border-yellow-400 
                   focus:ring-yellow-300 transition duration-200 
                     shadow-sm text-gray-700 placeholder-gray-400"
      />
    </div>
  );
}

export default Searchbar;

// "use client"
// import React, { useState, useEffect } from "react";

// const plantsData = [
//     ("https://ranarbr.github.io/apiPlants/data.json")];

// function Searchbarre() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("");
//   const [maintenanceFilter, setMaintenanceFilter] = useState("");
//   const [filteredPlants, setFilteredPlants] = useState(plantsData);

//   useEffect(() => {
//     let results = plantsData.filter((plant) =>
//       plant.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (categoryFilter) {
//       results = results.filter((plant) => plant.category === categoryFilter);
//     }

//     if (maintenanceFilter) {
//       results = results.filter((plant) => plant.maintenance === maintenanceFilter);
//     }

//     setFilteredPlants(results);
//   }, [searchTerm, categoryFilter, maintenanceFilter]);

//   const categories = [...new Set(plantsData.map((plant) => plant.category))];
//   const maintenanceLevels = [...new Set(plantsData.map((plant) => plant.maintenance))];

//   return (
//     <div className="w-full max-w-4xl mx-auto p-4">
//       <div className="search w-full mb-4">
//         <input
//           type="text"
//           name="Searchbar"
//           id="Searchbar"
//           placeholder="Rechercher une plante..."
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full p-3 border rounded-lg"
//         />
//       </div>
//       <div className="flex gap-4 mb-4">
//         <select
//           className="p-3 border rounded-lg w-1/2"
//           onChange={(e) => setCategoryFilter(e.target.value)}
//         >
//           <option value="">Toutes les catégories</option>
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>
//         <select
//           className="p-3 border rounded-lg w-1/2"
//           onChange={(e) => setMaintenanceFilter(e.target.value)}
//         >
//           <option value="">Tous les niveaux d'entretien</option>
//           {maintenanceLevels.map((level) => (
//             <option key={level} value={level}>
//               {level}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {filteredPlants.map((plant) => (
//           <div key={plant.id} className="border p-4 rounded-lg shadow-md">
//             <img src={plant.image} alt={plant.name} className="w-full h-48 object-cover rounded-lg mb-2" />
//             <h2 className="text-lg font-bold">{plant.name}</h2>
//             <p className="text-sm text-gray-600">{plant.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // export default Searchbarre;
// import React, { useState, useEffect } from 'react';

// function Searchbar({ search }) {
//   const [plants, setPlants] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [maintenanceLevels, setMaintenanceLevels] = useState([]);
//   const [categoryFilter, setCategoryFilter] = useState("");
//   const [maintenanceFilter, setMaintenanceFilter] = useState("");

//   useEffect(() => {
//     // Simuler un appel API
//     fetch('/api/plants') // Remplace par ton URL d'API si nécessaire
//       .then((response) => response.json())
//       .then((data) => {
//         setPlants(data.plants);
//         setCategories([...new Set(data.plants.map((plant) => plant.category))]);
//         setMaintenanceLevels([...new Set(data.plants.map((plant) => plant.maintenance))]);
//       });
//   }, []);

//   return (
//     <div className="w-full flex flex-col md:flex-row gap-4 items-center p-4">
//       {/* Barre de recherche */}
//       <div className="search w-full md:w-1/3">
//         <input
//           type="text"
//           name="Searchbar"
//           id="Searchbar"
//           placeholder="Rechercher un pays"
//           className="w-full p-2 border border-gray-300 rounded-lg"
//           onChange={(e) => search(e.target.value)}
//         />
//       </div>
      
//       {/* Dropdown de catégorie */}
//       <select
//         className="w-full md:w-1/4 p-2 border border-gray-300 rounded-lg"
//         onChange={(e) => setCategoryFilter(e.target.value)}
//       >
//         <option value="">Toutes les catégories</option>
//         {categories.map((category) => (
//           <option key={category} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>
      
//       {/* Dropdown de niveau d'entretien */}
//       <select
//         className="w-full md:w-1/4 p-2 border border-gray-300 rounded-lg"
//         onChange={(e) => setMaintenanceFilter(e.target.value)}
//       >
//         <option value="">Tous les niveaux d'entretien</option>
//         {maintenanceLevels.map((maintenance) => (
//           <option key={maintenance} value={maintenance}>
//             {maintenance}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default Searchbar;

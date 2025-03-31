function Searchbar({ search, setCategory, setPriceOrder }) {

  return (
    
<div className="flex justify-center gap-6 mt-6">
  <div className="flex flex-col w-full max-w-lg mx-auto">
    <input
      type="text"
      name="Searchbar"
      id="Searchbar"
      placeholder="Rechercher une plante..."
      onChange={(e) => search(e.target.value)}
      className="w-full px-4 py-2 border-2 border-gray-300 
                 rounded-full focus:outline-none focus:border-yellow-400 
                 focus:ring-yellow-300 transition duration-200 
                 shadow-sm text-gray-700 placeholder-gray-400"
    />
  </div>
</div>

  );
}

export default Searchbar;

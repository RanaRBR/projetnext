'use client';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = () => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://ranarbr.github.io/apiPlants/data.json');
                const apiData = await response.json();
                
                console.log("Données reçues :", apiData); 
    
                const plantData = apiData.plants;
    
                if (Array.isArray(plantData)) {
                    const dataS = plantData.map(({ id, ...rest }) => rest);
                    setData(dataS);
                } else {
                    console.error("L'API ne retourne pas un tableau dans 'plants' :", apiData);
                }
            } catch (error) {
                console.error('Erreur lors du chargement de l\'API:', error);
            }
        };
    
        fetchData();
    }, []);
    

    const nextElement = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevElement = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + data.length) % data.length
        );
    };

    if (data.length === 0) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {data.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img src={item.image} alt={`image-${index}`} className="rounded-lg w-[500px] h-[450px] object-cover flex justify-center overflow-hidden"/>
                        <div className="text-center mt-4">
                            <h2 className="text-2xl font-semibold text-white ">{item.name}</h2>
                            <p className="text-sm text-white p-2">{item.description}</p>
                            <p className="text-sm text-white p-2 "><span className='text-yellow-400'>Entretien : </span>{item.maintenance}</p>
                            <p className="text-sm text-white p-2"><span className='text-yellow-400'>Catégorie : </span>{item.category}</p>
                            <p className="text-sm text-white p-2"><span className='text-yellow-400'>Exposition : </span>{item.light}</p>
                            <p className="text-sm text-white p-2"><span className='text-yellow-400'>Taille small  </span>: {item.size.small}€</p>
                            <p className="text-sm text-white p-2"><span className='text-yellow-400'>Taille large :  </span>{item.size.large}€</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={prevElement}
                className="absolute left-3 top-1/4 transform-translate-y-1/2 bg-yellow-400 text-white px-4 py-2 rounded-lg mt-2 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-600 hover:shadow-lg"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={nextElement}
                className="absolute right-3 top-1/4 transform-translate-y-1/2 bg-yellow-400 text-white px-4 py-2 rounded-lg mt-2 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-600 hover:shadow-lg"
            >
                <FaChevronRight />
            </button>
        </div>
    );
};

export default Carousel;

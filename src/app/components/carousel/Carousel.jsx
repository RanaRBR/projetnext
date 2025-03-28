'use client';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { serif } from '@/font';
import "./Carousel.sass"

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
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    if (data.length === 0) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {data.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 flex flex-col items-center justify-center">
                        <img src={item.image} alt={`image-${index}`} className="rounded-lg w-[500px] h-[400px] object-cover " />
                        <div className="text-center mt-4 text-black">
                            <h2 className= {`${serif.className} antialised text-2xl font-semibold`}>{item.name}</h2>
                            <p className= {`${serif.className} antialised text-base p-2`}>{item.description}</p>
                            {/* <p className="text-xl text-white p-2"><span className='text-yellow-400'>Entretien : </span>{item.maintenance}</p>
                            <p className="text-xl text-white p-2"><span className='text-yellow-400'>Catégorie : </span>{item.category}</p>
                            <p className="text-xl text-white p-2"><span className='text-yellow-400'>Exposition : </span>{item.light}</p>
                            <p className="text-xl text-white p-2"><span className='text-yellow-400'>Taille small : </span>{item.size.small}€</p>
                            <p className="text-xl text-white p-2"><span className='text-yellow-400'>Taille large : </span>{item.size.large}€</p> */}
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={prevElement}
                className="absolute left-42 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg  px-3 py-3  "
            >
                <FaChevronLeft  className="text-2xl"  />
            </button>
            <button
                onClick={nextElement}
                className="absolute right-42 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg  px-3 py-3 "
            >
                <FaChevronRight  className="text-2xl"  />
            </button>
        </div>
    );
};

export default Carousel;
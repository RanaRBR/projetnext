"use client"
import { useState } from 'react';
import Image from 'next/image';
import { cinzel } from "@/font";
import { enriquita } from "@/font";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Votre message a été envoyé !");
  };

  return (
    <div className="container  bg-white text-black max-w-full flex flex-col items-center">
      <h1 className={`${cinzel.className} antialiased text-4xl font-semibold text-black mt-20`}
      >Contactez-nous</h1>
      
      <div className="contact-form mt-10 px-4 flex flex-col items-center w-full max-w-lg h-auto p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Votre nom"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Votre email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Votre message"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-white p-3 rounded-md hover:bg-yellow-600 transition duration-200 bg-yellow-500"
          >
            Envoyer
          </button>
        </form>
      </div>

      <div className="contact-info mt-10 text-center">
        <h2 className={`${enriquita.className} antialiased w-full flex items-center text-2xl font-semibold p-5`}>Informations de contact</h2>
        <div className="mt-4">
          <p><strong>Adresse :</strong> Place Minotorie 10, 1080 Molenbeek</p>
          <p><strong>Téléphone :</strong> 02/258 25 54</p>
        </div>
      </div>

      <div className="map mt-10 w-full p-15">
        <h2 className={`${enriquita.className} antialiased w-full flex items-center text-2xl font-semibold p-5`}>Notre emplacement</h2>
        <div className="w-full h-80 mt-4">
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Place%20Minotorie%2010,%201080%20Molenbeek&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

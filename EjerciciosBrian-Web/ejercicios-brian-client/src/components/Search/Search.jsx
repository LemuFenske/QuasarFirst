'use client'
import React, { useState } from 'react';
import Ejercicios from '@/utils/Ejercicios/Ejercicios';
import Excercise from '@/utils/Excercise/Excercise';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredEjercicios = Ejercicios.filter(
    (ejercicio) =>
      ejercicio.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="p-4">
      <div className="mt-20">
        <div className="mb-4 relative">
          <input
            className="border rounded py-2 px-4 w-full text-black"
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm !== '' && (
            <button
              className="absolute top-0 right-0 h-full  mr-3 text-gray-500 hover:text-black focus:outline-none"
              onClick={clearSearch}
            >
              &#10006;
            </button>
          )}
        </div>
        {searchTerm !== '' ? (
          filteredEjercicios.length > 0 ? (
            <div className="flex justify-around flex-wrap">
              {filteredEjercicios.map((ejercicio) => (
                <Excercise
                  key={ejercicio.id}
                  nombre={ejercicio.nombre}
                  descripcion={ejercicio.description}
                  enlace={ejercicio.enlace}
                />
              ))}
            </div>
          ) : (
            <p className="bg-white rounded-full text-black py-1 px-4 flex justify-center items-center">
               Ningún ejercicio encontrado.
            </p>
          )
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}


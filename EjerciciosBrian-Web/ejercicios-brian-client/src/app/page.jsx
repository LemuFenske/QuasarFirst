'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import imageUrl from './homebrian.jpeg'

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    plan: "",
    contraseña: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de datos del formulario, como realizar una solicitud HTTP.
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <Image
      src={imageUrl}
      className="object-cover h-full w-full fixed z-0"
      alt="asd"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10"></div>
  <div className='bg-white p-8 rounded-md shadow-md z-20'>
    <h1 className='text-gray-700 font-medium mb-1'>Complete para inciar</h1>
    <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
      <div className='flex flex-col'>
        <label htmlFor="nombre" className='text-gray-700 font-medium mb-1'>Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className='border rounded-md p-2'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="apellido" className='text-gray-700 font-medium mb-1'>Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          className='border rounded-md p-2'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="plan" className='text-gray-700 font-medium mb-1'>Plan:</label>
        <input
          type="text"
          id="plan"
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className='border rounded-md p-2'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="contraseña" className='text-gray-700 font-medium mb-1'>Contraseña:</label>
        <input
          type="password"
          id="contraseña"
          name="contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          className='border rounded-md p-2'
        />
      </div>
      <Link href="/excercises">
        <button className='bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md mx-auto'>
          Ingresar
        </button>
      </Link>
    </form>
  </div>
</div>

  );
}
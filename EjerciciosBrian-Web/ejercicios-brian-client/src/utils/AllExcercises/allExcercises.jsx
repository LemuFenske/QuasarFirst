import React from 'react';
import Ejercicios from '../Ejercicios/ejercicios';
import Excercise from '../Excercise/Excercise';
import style from './allExcercises.module.css'

export default function AllExcercises() {
  return (
    <div className={style.cardsContainer}>
      <div className={style.cards}>
      {Ejercicios.map(ejercicio => (
        <Excercise
          key={ejercicio.id}
          nombre={ejercicio.nombre}
          descripcion={ejercicio.description}
          enlace={ejercicio.enlace}
        />
      ))}

      </div>
    </div>
  );
}
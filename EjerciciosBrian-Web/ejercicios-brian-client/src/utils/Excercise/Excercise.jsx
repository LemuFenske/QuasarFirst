import React from 'react';
import style from './Excercise.module.css'

export default function Excercise({ nombre, descripcion, enlace }) {
  return (
    <div className={style.container}>
      <h2 className={style.name}>{nombre}</h2>
      <h4 className={style.description}>{descripcion}</h4>
      <iframe
        width="100%" 
        height="auto"
        src={enlace}
        title={`YouTube video: ${nombre}`}
        frameBorder="3"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}







import React from 'react'
import { Carousel } from 'rsuite'
import img from '../assets/images/Inicio/DIA MUNDIAL 2023.jpg'
import img2 from '../assets/images/Inicio/DIA MUNDIAL 14N.jpg'

const Inicio = () => {
  // LLAMAR AQUI AL BACKEND PARA RECOGER IMAGENES DINAMICAMENTE (EN CASO DE QUE SEA POSIBLE)
  return (
    <div>
      <div className="inicio">
        <Carousel className="carousel" shape="bar" autoplay>
          <img src={img} alt="imagen 1" className="carousel-img" />
          <img src={img2} alt="imagen 1" className="carousel-img" />
        </Carousel>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Inicio

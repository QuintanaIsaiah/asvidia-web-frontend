import React from 'react'
import Calendario from '../components/Calendar'
import TarjetaInstagram from '../components/TarjetaInstagram'
import Carousel from '../components/Carousel'
const Inicio = () => {
  // LLAMAR AQUI AL BACKEND PARA RECOGER IMAGENES DINAMICAMENTE (EN CASO DE QUE SEA POSIBLE)
  return (
    <div>
      <div className="contenido">
        <Calendario />
        <Carousel />
        <TarjetaInstagram />
      </div>
    </div>
  )
}

export default Inicio

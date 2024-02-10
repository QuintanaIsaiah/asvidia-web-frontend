import { Carousel as Car } from 'rsuite'
import img from '../assets/images/Inicio/DIA MUNDIAL 2023.jpg'
import img2 from '../assets/images/Inicio/asociacion.png'

const Carousel = () => {
  return (
    <Car className="carousel" shape="bar" autoplay>
      <img src={img} alt="imagen 1" className="carousel-img" />
      <img src={img2} alt="imagen 1" className="carousel-img" />
    </Car>
  )
}

export default Carousel

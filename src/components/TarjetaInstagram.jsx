import { Panel } from 'rsuite'
import img_instagram from '../assets/images/icons/instagram.png'
const TarjetaInstagram = () => {
  return (
    <Panel shaded bordered bodyFill className="tarjetaInstagram">
      <img
        src={img_instagram}
        height="220"
        className="imagenTarjeta"
        alt="Instagram"
      />
      <Panel style={{ textAlign: 'center' }}>
        <a
          href="https://www.instagram.com/asvidia_oficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¡No te pierdas nada!
        </a>
      </Panel>
    </Panel>
  )
}
export default TarjetaInstagram

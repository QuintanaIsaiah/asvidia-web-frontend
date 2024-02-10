import { Nav } from 'rsuite'

import FacebookSquareIcon from '@rsuite/icons/legacy/FacebookSquare'
import InstagramIcon from '@rsuite/icons/legacy/Instagram'
import { horario, telefono, email } from '../utils/globals'

function Footer() {
  return (
    <Nav className="footer" appearance="subtle">
      <div className="footerContent">
        <Nav.Item>{horario}</Nav.Item>
        <Nav.Item>
          <strong>Teléfono:&nbsp;</strong> {telefono}
        </Nav.Item>
        <Nav.Item>
          <strong>Correo:&nbsp;</strong> {email()}
        </Nav.Item>

        <Nav.Item icon={<FacebookSquareIcon />}></Nav.Item>
        <a
          href="https://www.instagram.com/asvidia_oficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Nav.Item icon={<InstagramIcon />} />
        </a>
      </div>
    </Nav>
  )
}

export default Footer

import { Nav } from 'rsuite'

import FacebookSquareIcon from '@rsuite/icons/legacy/FacebookSquare'
import GithubAltIcon from '@rsuite/icons/legacy/GithubAlt'
import CircleIcon from '@rsuite/icons/legacy/Circle'
import ChromeIcon from '@rsuite/icons/legacy/Chrome'
import EllipsisHIcon from '@rsuite/icons/legacy/EllipsisH'
import DropboxIcon from '@rsuite/icons/legacy/Dropbox'
import FirefoxIcon from '@rsuite/icons/legacy/Firefox'
import GitlabIcon from '@rsuite/icons/legacy/Gitlab'
import LinuxIcon from '@rsuite/icons/legacy/Linux'
import { horario, telefono, email } from '../utils/globals'

function Footer() {
  return (
    <Nav className="footer" appearance="subtle">
      <Nav.Item>{horario}</Nav.Item>
      <Nav.Item>
        <strong>Teléfono:&nbsp;</strong> {telefono}
      </Nav.Item>
      <Nav.Item>
        <strong>Correo:&nbsp;</strong> {email()}
      </Nav.Item>
      <div className="social-icons">
        <Nav.Item icon={<FacebookSquareIcon />}></Nav.Item>
        <Nav.Item icon={<GithubAltIcon />}></Nav.Item>
        <Nav.Item icon={<CircleIcon />}></Nav.Item>
        <Nav.Item icon={<ChromeIcon />}></Nav.Item>
        <Nav.Item icon={<EllipsisHIcon />} title="more...">
          <Nav.Item icon={<DropboxIcon />}></Nav.Item>
          <Nav.Item icon={<FirefoxIcon />}></Nav.Item>
          <Nav.Item icon={<GitlabIcon />}></Nav.Item>
          <Nav.Item icon={<LinuxIcon />}></Nav.Item>
        </Nav.Item>
      </div>
    </Nav>
  )
}

export default Footer

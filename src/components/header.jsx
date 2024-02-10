import React from 'react'
import { Nav, Dropdown, Button } from 'rsuite'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-horizontal-transparent.png'

function Header() {
  return (
    <Nav defaultActiveKey="inicio" className="header">
      <img src={logo} alt="ASVIDIA" className="logo" />

      <div className="headerButtons">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Button appearance="subtle">Inicio</Button>
        </Link>

        {/* ACTIVIDADES */}
        <Link
          to="/actividades"
          className="nav-link"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <Button appearance="subtle">Actividades</Button>
        </Link>
        {/* PUBLICACIONES */}
        <Link
          to="/publicaciones"
          className="nav-link"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <Button appearance="subtle">Publicaciones</Button>
        </Link>
        {/* TU Y LA DIABETES */}
        <Nav.Item eventKey="tu">
          <Dropdown title={'Tú y la diabetes'}>
            <Dropdown.Item>
              <Link
                to="/carol"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Carol tiene diabétes
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/tipo1"
                className="nav-link"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Diabétes tipo 1
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/tipo2"
                className="nav-link"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Diabétes tipo 2
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/autocontrol"
                className="nav-link"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Autocontrol
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/educacion"
                className="nav-link"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Educación
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </Nav.Item>
        {/* CONOCENOS */}
        <Nav.Item eventKey="conocenos">
          <Dropdown title={'Conócenos'}>
            <Dropdown.Item>
              <Dropdown.Menu title={'¿Por qué asociarte?'}>
                <Dropdown.Item>
                  <Link
                    to="/haztesocio"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    Hazte socio
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    to="/haztevoluntario"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    Hazte voluntario
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    to="/opiniones"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    Opiniones
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
              {/* <Link
                to="/porqueasociarte"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                ¿Por qué asociarte?
              </Link> */}
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/estatutos"
                className="nav-link"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Estatutos
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/miembros"
                className="nav-link"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Miembros
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </Nav.Item>

        {/* NIÑOS Y ADOLESCENTES */}
        <Nav.Item eventKey="adolescentes">
          <Dropdown title={'Niños y adolescentes'}>
            <Dropdown.Item>
              <Link
                to="/colonias"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Colonias
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/acompanamientos"
                className="nav-link"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Servicio de acompañamiento
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/pautas"
                className="nav-link"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Pautas de actuación
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/circular"
                className="nav-link"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Circular
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </Nav.Item>

        <Link
          to="/login"
          className="nav-link"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <Button appearance="primary">Iniciar sesión</Button>
        </Link>
      </div>
    </Nav>
  )
}

export default Header

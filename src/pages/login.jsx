import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button } from 'rsuite'
import { usuarios } from '../data'
import ReCAPTCHA from 'react-google-recaptcha'
import Msg from '../utils/Notifications'
import { RECAPTCHA_KEY } from '../utils/globals'

const Login = ({ setLoggedIn }) => {
  const history = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')
  const [showError, setShowError] = useState(false)

  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para manejar la autenticación
    console.log('Email:', email)
    console.log('Password:', password)

    if (!captchaToken) {
      setShowError(true)
      return
    }
    setShowError(false)

    // Buscar el usuario en la lista de usuarios
    const usuario = usuarios.find(
      (user) => user.email === email && user.pass === password
    )

    if (usuario) {
      setLoggedIn(true)
      if (usuario.admin) {
        // Redirigir al usuario administrador a una página especial
        history('/')
        // history('/admin')
      } else {
        // Redirigir al usuario no administrador a la página de inicio
        history('/')
      }
    } else {
      // Mostrar mensaje de error si el usuario no se encuentra
      alert('Usuario o contraseña incorrectos')
    }
  }

  // CAPTCHA
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token)
  }

  console.log(showError)
  return (
    <div style={{ width: 300, margin: 'auto' }}>
      <h2>Iniciar Sesión</h2>
      <Form fluid onSubmit={handleSubmit}>
        <Form.Group>
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control
            name="email"
            type="email"
            value={email}
            onChange={(value) => setEmail(value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.ControlLabel>Contraseña</Form.ControlLabel>
          <Form.Control
            name="password"
            type="password"
            value={password}
            onChange={(value) => setPassword(value)}
          />
        </Form.Group>
        <ReCAPTCHA sitekey={RECAPTCHA_KEY} onChange={handleCaptchaChange} />
        <br />
        <Form.Group>
          <Button appearance="primary" type="submit">
            Iniciar Sesión
          </Button>
          <p style={{ marginTop: 10 }}>
            ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
          </p>
        </Form.Group>
      </Form>
      {showError && (
        <Msg
          showNotification={true}
          type={'error'}
          text={'Por favor, completa la verificación ReCAPTCHA.'}
        />
      )}
    </div>
  )
}

export default Login

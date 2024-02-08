import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "rsuite";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para manejar la autenticación
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div style={{ width: 300, margin: "auto" }}>
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
        <Form.Group>
          <Button appearance="primary" type="submit">
            Iniciar Sesión
          </Button>
          <p style={{ marginTop: 10 }}>
            ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
          </p>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;

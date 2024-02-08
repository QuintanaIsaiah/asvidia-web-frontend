import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "rsuite";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para manejar el registro
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div style={{ width: 300, margin: "auto" }}>
      <h2>Registro</h2>
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
          <Form.ControlLabel>Confirmar Contraseña</Form.ControlLabel>
          <Form.Control
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(value) => setConfirmPassword(value)}
          />
        </Form.Group>
        <Form.Group>
          <Button appearance="primary" type="submit">
            Registrarse
          </Button>
          <p style={{ marginTop: 10 }}>
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
          </p>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Registro;

import React from 'react'
import 'rsuite/dist/rsuite.min.css'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
// PAGES
import Inicio from './pages/Inicio'
import Header from './components/header'
import Footer from './components/Footer'
// CONOCENOS
import Estatutos from './pages/Conocenos/Estatutos'
import Miembros from './pages/Conocenos/Miembros'
//ACTIVIDADES
import Actividades from './pages/Actividades'
//NIÑOS Y ADOLESCENTES
import Colonias from './pages/NiñosYAdolescentes/Colonias'
import Acompanamientos from './pages/NiñosYAdolescentes/Acompanamientos'
import Pautas from './pages/NiñosYAdolescentes/Pautas'
import Circular from './pages/NiñosYAdolescentes/Circular'
// TU Y LA DIABETES
import Carol from './pages/TuYLaDiabetes/Carol'
import Tipo1 from './pages/TuYLaDiabetes/Tipo1'
import Tipo2 from './pages/TuYLaDiabetes/Tipo2'
import Autocontrol from './pages/TuYLaDiabetes/Autocontrol'
import Educacion from './pages/TuYLaDiabetes/Educacion'
// PUBLICACIONES
import Publicaciones from './pages/Publicaciones'
// USUARIOS
import Login from './pages/login'
import Register from './pages/register'
import Opiniones from './pages/Conocenos/PorQueAsociarte/Opiniones'
import HazteSocio from './pages/Conocenos/PorQueAsociarte/HazteSocio'
import HazteVoluntario from './pages/Conocenos/PorQueAsociarte/HazteVoluntario'

const App = () => {
  return (
    <Router>
      <Header />
      <div className="page">
        <div className="pageContent">
          <Routes>
            <Route path="/" element={<Inicio />} />
            {/* CONOCENOS */}
            <Route path="/opiniones" exact element={<Opiniones />} />
            <Route path="/haztesocio" exact element={<HazteSocio />} />
            <Route
              path="/HazteVoluntario"
              exact
              element={<HazteVoluntario />}
            />
            <Route path="/estatutos" exact element={<Estatutos />} />
            <Route path="/miembros" exact element={<Miembros />} />
            {/* ACTIVIDADES */}
            <Route path="/actividades" exact element={<Actividades />} />
            {/* NIÑOS Y ADEOLESCENTES */}
            <Route path="/colonias" exact element={<Colonias />} />
            <Route
              path="/acompanamientos"
              exact
              element={<Acompanamientos />}
            />
            <Route path="/pautas" exact element={<Pautas />} />
            <Route path="/circular" exact element={<Circular />} />
            {/* TÚ Y LA DIABETES */}
            <Route path="/carol" exact element={<Carol />} />
            <Route path="/tipo1" exact element={<Tipo1 />} />
            <Route path="/tipo2" exact element={<Tipo2 />} />
            <Route path="/autocontrol" exact element={<Autocontrol />} />
            <Route path="/educacion" exact element={<Educacion />} />
            {/* PUBLICACIONES */}
            <Route path="/publicaciones" exact element={<Publicaciones />} />
            {/* USUARIOS */}
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

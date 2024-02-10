import React, { useState } from 'react'
import Actividad from '../components/TarjetaActividad'
import { eventos } from '../data'
import { Button, DatePicker } from 'rsuite'

const Actividades = () => {
  const [fecha, setFecha] = useState(new Date())
  const [actividades, setActividades] = useState(getActividades())

  const handleFiltrar = () => {
    // Obtener el mes y el año seleccionados
    const mesSeleccionado = fecha.getMonth() + 1
    const añoSeleccionado = fecha.getFullYear()

    // Filtrar las actividades según el mes y el año seleccionados
    const actividadesFiltradas = eventos.filter((evento) => {
      const fechaEvento = new Date(evento.time)
      const mesEvento = fechaEvento.getMonth() + 1
      const añoEvento = fechaEvento.getFullYear()
      return (
        mesEvento === mesSeleccionado &&
        añoEvento === añoSeleccionado &&
        evento.tipo === 'actividad'
      )
    })
    setActividades(actividadesFiltradas)
  }

  return (
    <div>
      <h1>Actividades</h1>
      <div style={{ marginBottom: '10px' }}>
        <DatePicker
          format="MMMM yyyy" // Formato del DatePicker para mostrar solo mes y año
          placeholder="Mes y año"
          onChange={setFecha}
          value={fecha}
          style={{ marginRight: '10px' }}
        />
        <Button onClick={handleFiltrar} appearance="primary">
          Filtrar
        </Button>
      </div>
      <br />
      {actividades.length > 0 ? (
        actividades.map((act) => {
          return <Actividad data={act} />
        })
      ) : (
        <p>No hay actividades disponibles.</p>
      )}
    </div>
  )
}

function getActividades() {
  // Recojo actividades de db
  return eventos.filter((evento) => evento.tipo === 'actividad')
}

export default Actividades

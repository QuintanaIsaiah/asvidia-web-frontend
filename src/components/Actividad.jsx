import { Panel } from 'rsuite'

const Actividad = ({ data }) => {
  return (
    <Panel header={data.title} shaded>
      <strong>Ubicación:</strong>
      <br />
      <strong>Fecha:</strong>
      <br />
      <strong>Descripción:</strong>
    </Panel>
  )
}

export default Actividad

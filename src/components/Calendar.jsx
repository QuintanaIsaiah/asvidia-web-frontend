import { useState } from 'react'
import { Calendar, Badge, Whisper, Popover } from 'rsuite'
import eventos from '../data'

const Calendario = () => {
  const [activeEvent, setActiveEvent] = useState(null)

  function renderCell(date) {
    const list = getTodoList(date)

    const colorMap = {
      excursion: 'blue',
      campamento: 'green'
      // Puedes agregar más tipos de eventos aquí si es necesario
    }

    const renderedEvents = list.map((evento) => {
      if (list.length) {
        return (
          <Whisper
            key={evento.time}
            trigger="click"
            placement="top"
            speaker={
              <Popover
                title={
                  Array.isArray(evento.title)
                    ? evento.title.join(', ')
                    : evento.title
                }
              ></Popover>
            }
            onHide={() => setActiveEvent(null)}
          >
            <Badge
              className="calendar-todo-item-badge"
              style={{ backgroundColor: colorMap[evento.tipo] }}
              onClick={() => setActiveEvent(date)}
            />
          </Whisper>
        )
      } else {
        // Si no hay eventos en la lista, devolver null
        return null
      }
    })

    return renderedEvents
  }
  return (
    <div>
      <Calendar
        className="calendario"
        compact
        bordered
        renderCell={renderCell}
      ></Calendar>
    </div>
  )
}

export default Calendario

// FUNCION PARA CARGAR EVENTOS DEL CALENDARIO
function getTodoList(date) {
  console.log(date)

  //Recojo eventos del back
  //Mock

  //Devuelvo array de eventos
  if (!eventos) {
    // Si no se proporcionan eventos, retornar un array vacío
    return []
  }

  const filteredEvents = eventos.filter((evento) => {
    const eventoDate = new Date(evento.time)
    return (
      eventoDate.getDate() === date.getDate() &&
      eventoDate.getMonth() === date.getMonth() &&
      eventoDate.getFullYear() === date.getFullYear()
    )
  })

  return filteredEvents
}

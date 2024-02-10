import React, { useEffect, useState } from 'react'
import { Animation, Message } from 'rsuite'

const Msg = ({ showNotification, type, text }) => {
  const [visible, setVisible] = useState(showNotification)
  console.log('Muestro MSG')
  console.log({ showNotification, type, text })
  useEffect(() => {
    if (showNotification) {
      setVisible(true)
      const timer = setTimeout(() => {
        setVisible(false)
      }, 5000) // Ocultar la notificación después de 5 segundos

      // Limpiar el temporizador cuando el componente se desmonte o cuando showNotification cambie a false
      return () => clearTimeout(timer)
    }
  }, [showNotification])

  return (
    <Animation.Slide in={visible} placement="right">
      {({ placement, ...rest }) => (
        <div
          {...rest}
          style={{ width: 300, position: 'fixed', top: '18%', right: '20px' }}
        >
          {visible && (
            <Message
              className="notificacion"
              type={type}
              bordered
              showIcon
              onClose={() => setVisible(false)} // Esto asegura que la notificación se cierre al hacer clic en la X
            >
              {text}
            </Message>
          )}
        </div>
      )}
    </Animation.Slide>
  )
}

export default Msg

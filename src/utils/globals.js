const horario = (
  <>
    <strong>Horario:&nbsp;</strong> Lunes y miércoles: 15:30h - 19:30h. Martes,
    jueves y viernes: 10:00h - 14:00h.
  </>
)

const telefono = '+34 944 446 606'

const email = () => {
  const emailAddress = 'info@asvidia.org'

  const handleEmailClick = (event) => {
    event.preventDefault()
    window.location.href = 'mailto:' + emailAddress
  }

  return (
    <a href={`mailto:${emailAddress}`} onClick={handleEmailClick}>
      {emailAddress}
    </a>
  )
}

export { horario, telefono, email }

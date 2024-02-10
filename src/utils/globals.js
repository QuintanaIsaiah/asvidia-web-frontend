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

const RECAPTCHA_KEY = '6Ld2T24pAAAAAAU9Ndi6COXjBpM4M94t3qAwlDH6'

export { horario, telefono, email, RECAPTCHA_KEY }

export const utils = {
  validateForm: (fields, state, setState) => {
    const { email, name, password } = fields

    if (!email || !name || !password) {
      return setState({
        ...state,
        error: {
          status: true,
          message: 'Preencha os campos em branco.',
        },
      })
    }

    if (!email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
      return setState({
        ...state,
        error: {
          status: true,
          message: 'Utilize um formato de e-mail válido.',
        },
      })
    }

    if (password.length < 3 || name.length < 3) {
      return setState({
        ...state,
        error: {
          status: true,
          message: 'Nome e senha devem conter pelo menos 3 caracteres.',
        },
      })
    }

    return true
  },
  setCookie: (name, value, expiration) => {
    const date = new Date()
    date.setTime(date.getTime() + expiration * 24 * 60 * 60 * 1000)
    const expires = 'expires=' + date.toUTCString()

    return (document.cookie = `${name}=${value};${expires};path=/`)
  },
  getCookie: (cName) => {
    const name = `${cName}=`
    const cDecoded = decodeURIComponent(document.cookie)
    const cArr = cDecoded.split('; ')
    let res
    cArr.forEach((val) => {
      if (val.indexOf(name) === 0) res = val.substring(name.length)
    })
    return res
  },
}

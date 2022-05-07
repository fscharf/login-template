import React, { useContext, createContext, useState } from 'react'
import { utils } from '../utils'

const { getCookie, setCookie } = utils
const isAuthenticated = getCookie('authenticated')

const Context = createContext()

const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuthenticated: isAuthenticated === 'true' ? true : false,
  })

  const logOff = () => {
    setCookie('authenticated', '', 0)
    setCookie('userToken', '', 0)

    window.location.href = '/login'
  }

  return (
    <Context.Provider value={{ state, setState, logOff }}>
      {children}
    </Context.Provider>
  )
}

const useGlobal = () => useContext(Context)

export { GlobalProvider, useGlobal }

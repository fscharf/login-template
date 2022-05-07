import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Alert, Button, Input, Link } from '../../components'
import { useGlobal } from '../../context'
import { api } from '../../services'
import { utils } from '../../utils'
import Styles from './styles'

const { Wrapper, Form } = Styles

const Login = () => {
  const [state, setState] = useState({
    user: {
      email: '',
      password: '',
    },
    loading: false,
    error: {
      status: false,
      message: '',
    },
  })

  const { state: globalState } = useGlobal()
  const { isAuthenticated } = globalState
  const { user, loading, error } = state
  const { setCookie } = utils

  const handleChange = (e) => {
    const { name, value } = e.target

    setState({
      ...state,
      user: {
        ...user,
        [name]: value,
      },
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setState({ ...state, loading: true })

    if (!user.email || !user.password) {
      return setState({
        ...state,
        loading: false,
        error: {
          status: true,
          message: 'Preencha os campos em branco.',
        },
      })
    }

    await api
      .post('/authaccount/login', user)
      .then((res) => {
        const { data: response } = res
        const { data, code } = response

        if (code === 1) {
          return setState({
            ...state,
            loading: false,
            error: {
              status: true,
              message: 'E-mail ou senha inválidos.',
            },
          })
        }

        setCookie('userToken', data.Token, 2)
        setCookie('authenticated', true, 2)

        setState({
          ...state,
          loading: false,
          error: {
            status: false,
            message: '',
          },
        })
        return (window.location.href = '/')
      })
      .catch(() => {
        setState({
          ...state,
          loading: false,
          error: {
            status: true,
            message: 'Ocorreu um erro na requisição. Contate o administrador.',
          },
        })
      })
  }

  return isAuthenticated ? (
    <Navigate to='/' />
  ) : (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          text='Usuário'
          name='email'
          maxLength={80}
          onChange={handleChange}
        />
        <Input
          type='password'
          text='Senha'
          maxLength={50}
          name='password'
          onChange={handleChange}
        />
        <Button styles={{ width: '315px' }}>
          {loading ? 'Verificando...' : 'Login'}
        </Button>
        {error.status && <Alert error>{error.message}</Alert>}
      </Form>
      <Link to='/register' styles={{ width: '259px' }}>
        Registrar
      </Link>
    </Wrapper>
  )
}

export default Login

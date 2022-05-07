import React, { useState } from 'react'
import { Alert, Button, Input, Link } from '../../components'
import { api } from '../../services'
import { utils } from '../../utils'
import Styles from './styles'

const { Wrapper, Form } = Styles
const { validateForm, setCookie } = utils

const Register = () => {
  const [state, setState] = useState({
    user: {
      name: '',
      email: '',
      password: '',
    },
    loading: false,
    error: {
      status: false,
      message: '',
    },
  })

  const { user, error, loading } = state

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

    if (validateForm(user, state, setState)) {
      setState({ ...state, loading: true })

      await api
        .post('/authaccount/registration', user)
        .then((res) => {
          const { data: response } = res
          const { data, code } = response

          if (code === 1) {
            return setState({
              ...state,
              loading: false,
              error: {
                status: true,
                message: 'O endereço de e-mail inserido já existe.',
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
              message: 'Ocorreu um erro na requisição.',
            },
          })
        })
    }
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          text='Email'
          name='email'
          maxLength={80}
          onChange={handleChange}
        />
        <Input
          type='password'
          text='Senha'
          name='password'
          maxLength={50}
          onChange={handleChange}
        />
        <Input
          type='text'
          text='Nome'
          name='name'
          maxLength={80}
          onChange={handleChange}
        />
        <Button type='submit' styles={{ width: '315px' }}>
          {loading ? 'Verificando...' : 'Registrar'}
        </Button>
        {error.status && <Alert error>{error.message}</Alert>}
      </Form>
      <Link to='/login' styles={{ width: '259px' }}>
        Login
      </Link>
    </Wrapper>
  )
}

export default Register

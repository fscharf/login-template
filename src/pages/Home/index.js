import React, { useState, useEffect } from 'react'
import { Button, Table } from '../../components'
import Styles from './styles'
import { api } from '../../services'
import { useGlobal } from '../../context'

const { Wrapper } = Styles

const Home = () => {
  const [users, setUsers] = useState([])
  const { logOff } = useGlobal()

  useEffect(() => {
    const getUsers = async () => {
      await api.get('/users?page=1').then((res) => {
        const { data: response } = res
        const { data } = response

        setUsers(data)
      })
    }

    getUsers()
  }, [])

  return (
    <Wrapper>
      <Button
        onClick={logOff}
        styles={{ position: 'absolute', top: '16px', right: '16px' }}
      >
        Logoff
      </Button>
      <h2>Usuários</h2>
      {users && (
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Heading>ID</Table.Heading>
              <Table.Heading>Nome</Table.Heading>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {users.map((user, index) => (
              <Table.Row key={index}>
                <Table.Content>{user.id}</Table.Content>
                <Table.Content>{user.name}</Table.Content>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </Wrapper>
  )
}

export default Home

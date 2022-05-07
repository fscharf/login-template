import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '..'

const Link = styled(Button).attrs({ as: RouterLink })`
  text-decoration: none;
  font-size: 14px;
  background-color: transparent;
  color: #00639c;
  border: 2px solid #00639c;
`

export default Link

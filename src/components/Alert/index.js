import { lighten } from 'polished'
import styled from 'styled-components'

const Alert = styled.span`
  color: #fff;
  background-color: ${(p) =>
    p.error ? lighten(0.2, '#fc030f') : lighten(0.2, '#00ba1c')};
  padding: 10px 24px;
  font-size: 12px;
  border-radius: 4px;
`

export default Alert

import styled from 'styled-components'

const Button = styled.button`
  background-color: #00639c;
  border-radius: 100px;
  color: #fff;
  padding: 10px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  ${(p) => p.styles}

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`

export default Button

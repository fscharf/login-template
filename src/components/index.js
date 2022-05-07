import { createGlobalStyle } from 'styled-components'
export { default as Button } from './Button'
export { default as Link } from './Link'
export { default as Input } from './Input'
export { default as Alert } from './Alert'
export { default as Table } from './Table'

const GlobalStyles = createGlobalStyle`
  * { 
    font-family: 'Roboto', 'Segoe UI', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-weight: normal;
  }
  button, input {
    outline: none;
    border: none;

    &:focus {
      border: none;
    }
  }
  button {
    cursor: pointer;
  }
`

export default GlobalStyles

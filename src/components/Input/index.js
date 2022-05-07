import Styles from './styles'

const { Wrapper, Input: CustomInput } = Styles

const Input = ({ text, ...rest }) => {
  return (
    <Wrapper text={text}>
      <CustomInput {...rest} />
    </Wrapper>
  )
}

export default Input

import styled from 'styled-components'

const Styles = {
  Wrapper: styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    @media screen and (max-width: 425px) {
      padding: 0 24px;
      gap: 16px;
    }
    @media screen and (max-width: 375px) {
      padding: 0 16px;
    }
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    @media screen and (max-width: 425px) {
      width: 100%;
    }
  `,
}

export default Styles

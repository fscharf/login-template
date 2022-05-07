import styled from 'styled-components'

const Styles = {
  Wrapper: styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 32px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    @media screen and (max-width: 425px) {
      padding: 32px 24px;
      gap: 16px;
    }
    @media screen and (max-width: 375px) {
      padding: 32px 16px;
    }
  `,
}

export default Styles

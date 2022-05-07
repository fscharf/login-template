import { lighten } from 'polished'
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
  Alert: styled.span`
    color: #fff;
    background-color: ${(p) =>
      p.error ? lighten(0.2, '#fc030f') : lighten(0.2, '#00ba1c')};
    padding: 10px 24px;
    font-size: 12px;
    border-radius: 4px;
  `,
}

export default Styles

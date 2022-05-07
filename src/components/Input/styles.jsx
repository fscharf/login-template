import styled from 'styled-components'

const Styles = {
  Wrapper: styled.div`
    border-radius: 4px 4px 0 0;
    background-color: #dee3eb;
    padding: calc(24px + 8px) 16px 16px;
    font-size: 14px;
    position: relative;
    border-bottom: 1px solid #00639c;
    width: 389px;

    &::after {
      content: '${(p) => p.text || ''}';
      position: absolute;
      top: 8px;
      left: 16px;
      font-size: 12px;
      color: #00639c;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  `,
  Input: styled.input`
    background-color: transparent;
    width: 100%;
  `,
}

export default Styles

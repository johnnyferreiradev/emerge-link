import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-bottom: 16px;

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .plan-row-actions {
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        width: 140px;
        padding: 8px 12px;
        margin: 0px 8px;
      }
    }
  }

  p {
    font-weight: normal;

    span {
      font-weight: bold;
      margin-left: 4px;
    }
  }
`;

export default Container;

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;

  & > p {
    margin-bottom: 32px;
  }

  .invoice-list {
    width: 100%;
    max-width: 800px;
    margin: 32px 0px;
  }
`;

export default Container;

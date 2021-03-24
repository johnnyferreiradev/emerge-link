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
`;

export default Container;

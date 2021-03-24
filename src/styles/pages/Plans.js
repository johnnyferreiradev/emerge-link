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

  .grid-row {
    width: 100%;
    max-width: 768px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 64px 0px 32px 0px;
  }

  .content {
    width: 100%;
    max-width: 768px;
  }
`;

export default Container;

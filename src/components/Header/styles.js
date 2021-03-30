import styled from 'styled-components';

const Header = styled.header`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);

  h2 {
    width: 100%;
  }

  .main-content {
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo-column {
      display: flex;
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
    }

    button {
      width: max-content;
      margin: 0px 8px;
      line-height: normal;
    }
  }
`;

export default Header;

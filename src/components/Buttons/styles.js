import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  border: ${({ buttonTheme, theme }) => theme.buttons[buttonTheme].border};
  background: ${({ buttonTheme, theme }) => theme.buttons[buttonTheme].background};
  color:${({ buttonTheme, theme }) => theme.buttons[buttonTheme].color};
  cursor: pointer;
  outline: none;
  box-shadow: ${({ buttonTheme, theme }) => theme.buttons[buttonTheme].boxShadow};
  padding: 14px 48px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all .5s;
  :hover {
    color: ${({ buttonTheme, theme }) => (theme === 'link' ? theme.buttons[buttonTheme].hoverColor : theme.buttons[buttonTheme].color)};
    background: ${({ buttonTheme, theme }) => (theme !== 'link' ? theme.buttons[buttonTheme].hoverColor : 'none')};
    transition: all .2s;
  }
  :active {
    box-shadow: none;
    transition: all .2s;
  }
`;

const StyledLink = styled.button`
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  border: ${({ buttonTheme, theme }) => theme.buttons[buttonTheme].border};
  background: ${({ buttonTheme, theme }) => theme.buttons[buttonTheme].background};
  color:${({ buttonTheme, theme }) => theme.buttons[buttonTheme].color};
  cursor: pointer;
  outline: none;
  box-shadow: ${({ buttonTheme, theme }) => theme.buttons[buttonTheme].boxShadow};
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  transition: all .5s;
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  :hover {
    color: ${({ buttonTheme, theme }) => (theme === 'link' ? theme.buttons[buttonTheme].hoverColor : theme.buttons[buttonTheme].color)};
    background: ${({ buttonTheme, theme }) => (theme !== 'link' ? theme.buttons[buttonTheme].hoverColor : 'none')};
    transition: all .2s;
  }
`;

const StyledAnchor = styled.a`
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  border: ${({ buttonTheme, theme }) => theme.buttons[buttonTheme].border};
  background: ${({ buttonTheme, theme }) => theme.buttons[buttonTheme].background};
  color:${({ buttonTheme, theme }) => theme.buttons[buttonTheme].color};
  cursor: pointer;
  outline: none;
  box-shadow: ${({ buttonTheme, theme }) => theme.buttons[buttonTheme].boxShadow};
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  transition: all .5s;
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  :hover {
    color: ${({ buttonTheme, theme }) => (theme === 'link' ? theme.buttons[buttonTheme].hoverColor : theme.buttons[buttonTheme].color)};
    background: ${({ buttonTheme, theme }) => (theme !== 'link' ? theme.buttons[buttonTheme].hoverColor : 'none')};
    transition: all .2s;
  }
`;

export {
  StyledButton,
  StyledLink,
  StyledAnchor,
};

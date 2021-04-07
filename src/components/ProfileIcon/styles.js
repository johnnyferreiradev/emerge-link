import styled from 'styled-components';

const StyledProfileIcon = styled.div.attrs(() => ({
  className: 'profile-icon',
}))`
  width: 42px;
  height: 42px;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border-radius: 50%;
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default StyledProfileIcon;

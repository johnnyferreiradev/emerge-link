import styled from 'styled-components';

const StyledMainLayout = styled.div.attrs(() => ({
  className: 'main-layout',
}))`
  width: 100%;

  .footer {
    position: relative;
  }
`;

export default StyledMainLayout;

import styled from 'styled-components';

const StyledPublicLayout = styled.div.attrs(() => ({
  className: 'public-layout',
}))`
  width: 100%;

  .footer {
    position: relative;
  }
`;

export default StyledPublicLayout;

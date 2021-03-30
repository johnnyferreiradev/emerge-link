import styled from 'styled-components';

const styledSection = styled.div.attrs(() => ({
  className: 'section',
}))`
  position: relative;
  width: 100%;
  background: ${({ theme, background }) => (theme.colors[background])};

  .grid-row {
    .grid-column {
      max-width: 1322px;
      padding: 32px;
    }
  }
`;

export default styledSection;

import styled from 'styled-components';

const styledFooter = styled.footer.attrs(() => ({
  className: 'footer',
}))`
  position: ${({ bottom }) => (bottom ? 'absolute' : 'relative')};
  bottom: 0px;
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  border-top: 2px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: 784px) {
    .grid-column {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      & > * {
        margin-bottom: 16px;
      }
    }
	}
`;

export default styledFooter;

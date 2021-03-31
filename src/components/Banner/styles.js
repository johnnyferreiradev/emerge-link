import styled from 'styled-components';

const styledBanner = styled.div.attrs(() => ({
  className: 'banner',
}))`
  width: 100%;
  height: 600px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center center;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > .grid-container {
    margin-top: 128px;
    flex-direction: row;
    justify-content: center;
  }

  .banner-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title, .subtitle, .description {
      margin-bottom: 16px;
    }

    .title {
      font-size: 56px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: ${({ theme }) => theme.colors.white};
      text-shadow: 2px 2px 8px ${({ theme }) => theme.colors.dark};
    }

    .subtitle {
      font-size: 32px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: 1px;
      text-shadow: 2px 2px 8px ${({ theme }) => theme.colors.dark};
    }

    .description {
      font-size: 24px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: 1px;
      text-shadow: 2px 2px 8px ${({ theme }) => theme.colors.dark};
      color: #fff;
    }

    button {
      width: 200px;
      margin-top: 16px;

      &:hover {
        background: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  @media (max-width: 1000px) {
    padding-top: 32px;
    height: max-content;

    .banner-text {
      padding: 32px;
    }
  }
`;

export default styledBanner;

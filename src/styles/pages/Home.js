import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 36px;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
  }

  .grid-row {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .subtitle {
    text-align: center;
    max-width: 500px;
    font-size: 18px;
  }

  .card-info {
    width: 280px;
    padding: 16px;
    text-align: center;
    margin-bottom: 32px;

    svg {
      width: 100%;
      font-size: 48px;
      text-align: center;
      margin-bottom: 16px;
      color: ${(props) => props.theme.colors.primary};
    }

    .title {
      text-align: center;
      margin-bottom: 8px;
    }
  }

  .plan-card {
    width: 280px;
    padding: 16px;
    text-align: center;
    margin: 0px;

    .grid-column {
      padding: 0px;

      .plan-name {
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.dark};
        font-weight: bold;
        font-size: 18px;
        padding-bottom: 8px;
        border-bottom: 2px solid ${(props) => props.theme.colors.primary};
        margin-bottom: 32px;
      }

      h1 {
        font-size: 64px;
        line-height: 1;
      }

      .plan-size {
        font-size: 20px;
        color: ${(props) => props.theme.colors.textSecondary};
        font-weight: bold;
        margin-bottom: 32px;
      }

      h3 {
        font-size: 24px;
        margin-bottom: 16px;

        span {
          font-size: 16px;

          &:first-child {
            position: relative;
            top: -4px;
            margin-right: 2px;
          }
        }
      }
    }
  }

  .contact-us {
    color: #fff;

    h1 {
      color: #fff;
      margin-bottom: 16px;

      &:last-child {
        font-size: 24px;
        margin-top: 32px;
      }
    }

    .grid-row {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > p {
        margin-bottom: 16px;
        font-size: 18px;
      }

      .divisor {
        font-size: 14px;
      }

      .phone-number {
        font-weight: bold;
        font-size: 24px;
      }
    }

    button {
      margin-bottom: 16px;
      display: flex;
      align-items: center;

      svg {
        font-size: 24px;
        margin-right: 8px;
      }
    }

    .social-media {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-bottom: 16px;

      & > * {
        margin: 0px 16px;
      }

      svg {
        font-size: 48px;
      }
    }
  }
`;

export default Container;

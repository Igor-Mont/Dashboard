import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 48%;
  height: 260px;
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  border-radius: 0.5rem;

  margin: 10px 0;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${animate} 0.5s;

  >header img {
    width: 35px;
  }

  >header p {
    font-size: 1.3rem;
  }

  @media(max-width: 770px) {
    width: 100%;
    > header h1 {
      font-size: 1.5rem;

      img {
        height: 20px;
        width: 20px;
      }
    }

    >header padding, >footer span {
      font-size: 0.9rem;
    }
  }

  @media(max-width: 420px) {
    width: 100%;
    height: auto;

    >header p {
      margin-bottom: 1rem;
    }
  }
`;

export { Container }
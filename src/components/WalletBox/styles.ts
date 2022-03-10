import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    transform: translateX(100px);
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

type ContainerProps = {
  color: string;
}

const Container = styled.div<ContainerProps>`
  width: 32%;
  height: 150px;

  animation: ${animate} 0.5s;

  margin: 10px 0;

  background-color: ${props => props.color};
  color: ${props => props.theme.colors.white};
  border-radius: 0.5rem;

  padding: 10px 20px;

  position: relative;
  overflow: hidden;

  > img {
    height: 110%;
    position: absolute;
    top: -10px;
    right: -30px;
    opacity: 0.3;
  }

  >span {
    font-size: 1.3rem;
    font-weight: 500;
  }

  >small {
    font-size: 0.8rem;
    position: absolute;
    bottom: 10px;
  }

  @media(max-width: 770px) {
    > span {
      font-size: 14px;
    }

      >h1 {
        word-wrap: break-word;
        font-size: 1.3rem;

        > strong {
          display: inline-block;
          width: 100%;
          font-size: 1rem;
        }
      }
  }

  @media(max-width: 420px) {
    width: 100%;

    >h1  {
        display: flex;

      >strong {
        position: initial;
        width: auto;
        font-size: 1.3rem;

        &:after {
            display: inline-block;
            content: '';
            width: 1px;                
        }

      }
    }
  }

`;

export { Container };
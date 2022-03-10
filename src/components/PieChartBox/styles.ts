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

type LegendProps = {
  color: string;
}

const Container = styled.div`
  width: 48%;
  height: 260px;
  margin: 10px 0;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};
  border-radius: 0.5rem;

  animation: ${animate} 0.5s;

  display: flex;

  @media(max-width: 770px)  {
    display: flex;
    width: 100%;
  }

`;

const SideLeft = styled.aside`
  padding: 1.8rem 1.3rem;

  > h2 {
    margin-bottom: 1.3rem;
  }

  @media(max-width: 1345px)  {
    padding: 0 1rem 0.3rem;

    > h2 {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
  }

  @media(max-width: 420px)  {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

const LegendContainer = styled.ul`
  max-height: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style:none;
  overflow-y: auto;
  padding: 0.5rem 1rem 0.5rem 0;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.tertiary};
  }

  @media(max-width: 1345px)  {
    display: flex;
    flex-direction: column;
  }
`;

const Legend = styled.li<LegendProps>`
  display: flex;
  align-items: center;

  gap: 0.3rem;
  
  >div {
    background-color: ${props => props.color};
    width: 40px;
    height: 40px;
    border-radius: 0.3rem;
    font-size: 0.8rem;
    line-height: 40px;
    text-align: center;
  }

  > span {
    margin-left: 0.3rem;
  }

  @media(max-width: 1345px) {
    font-size: 0.9rem;
    margin: 3px 0;

    >div {
      height: 2rem;
      width: 2rem;
      line-height: 2rem;
    }

    >span {
      margin-left: 0.5rem;
    }
  }

`;

const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;

  @media(max-width: 1345px) {
    height: 100%;
  }
`;

export { Container, SideLeft, SideRight, Legend, LegendContainer };
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

type LegendProps = {
  color: string;
}

const Container = styled.div`
  width: 48%;
  min-height: 26px;

  animation: ${animate} 0.5s;

  margin: 10px 0;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  border-radius: 0.5rem;
  display: flex;
  justify-content: center;

  @media (max-width: 1280px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
  
`;

const SideLeft = styled.aside`
  padding: 30px 20px;
   > h2 {
     margin-bottom: 10px;
   }
`;

const SideRight = styled.main`
  flex: 1;
  height: 175px;
  margin-top: 1rem;
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

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: row;
    height: auto;
    gap: 0.5rem;
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

  @media (max-width: 1280px) {
    >div {
    background-color: ${props => props.color};
    width: 40px;
    height: 40px;
    border-radius: 0.3rem;
    font-size: 0.8rem;
    line-height: 30px;
    text-align: center;
  }
  }

`;

export { Container, SideLeft, SideRight, LegendContainer, Legend };

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
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;
  animation: ${animate} 0.5s;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  margin: 10px 0;
  padding: 30px 20px ;

  border-radius: 0.5rem;
`;

const ChartContainer = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 20px;
    padding-left: 1rem;
  }

  @media(max-width: 1200px) {
    flex-direction: column;
  }
`;

const LegendContainer = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;

const Legend = styled.li<LegendProps>`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-bottom: 1rem;

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

  @media(max-width: 1280px) {
    >div {
      width: 30px;
      width: 30px;
    }
  }

`;

export { Container, ChartContainer, Header, Legend, LegendContainer };
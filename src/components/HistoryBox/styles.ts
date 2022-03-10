import styled from "styled-components";

type LegendProps = {
  color: string;
}

const Container = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;

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
  align-items: center;

  > h2 {
    margin-bottom: 20px;
    padding-left: 1rem;
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

`;

export { Container, ChartContainer, Header, Legend, LegendContainer };
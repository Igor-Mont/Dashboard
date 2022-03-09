import styled from "styled-components";

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

  display: flex;
`;

const SideLeft = styled.aside`
  padding: 1.8rem 1.3rem;

  > h2 {
    margin-bottom: 1.3rem;
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

const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export { Container, SideLeft, SideRight, Legend, LegendContainer };
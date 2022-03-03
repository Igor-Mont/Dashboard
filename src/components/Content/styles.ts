import styled from "styled-components";

const Container = styled.div`
  grid-area: CT;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
`;

export { Container };
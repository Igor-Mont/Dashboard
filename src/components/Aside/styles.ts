import styled from "styled-components";

const Container = styled.div`
  grid-area: AS;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
`;

export { Container };
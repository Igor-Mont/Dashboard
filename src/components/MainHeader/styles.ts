import styled from "styled-components";

const Container = styled.div`
  grid-area: MH;
  /* color: ${props => props.theme.colors.white}; */
  background-color: ${props => props.theme.colors.secondary};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

const Profile = styled.div`
  color: ${props => props.theme.colors.white};
`;

export { Container, Profile };
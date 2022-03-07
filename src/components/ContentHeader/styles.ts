import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

`;

const TitleContainer = styled.div`
  h1 {
    color: ${props => props.theme.colors.white};

    &::after {
      content: '';
      display: block;
      width: 3rem;
      border-bottom: 10px solid ${props => props.theme.colors.warning};
    }
  }
`;

const Controllers = styled.div`
  display: flex;
`;

export { Container, TitleContainer, Controllers };
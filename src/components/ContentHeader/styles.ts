import styled from "styled-components";

type TitleContainerProps = {
  lineColor: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

`;

const TitleContainer = styled.div<TitleContainerProps>`
  h1 {
    color: ${props => props.theme.colors.white};

    &::after {
      content: '';
      display: block;
      width: 3rem;
      border-bottom: 10px solid ${props => props.lineColor};
    }
  }
`;

const Controllers = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export { Container, TitleContainer, Controllers };
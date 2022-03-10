import styled from "styled-components";

type TitleContainerProps = {
  lineColor: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media(max-width: 320px) {
    flex-direction: column;
    gap: 1.2rem;
   } 
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

  @media(max-width: 400px) {
   > h1 {
     font-size: 1.4rem;

     &::after {
      content: '';
      display: block;
      width: 3rem;
      border-bottom: 5px solid ${props => props.lineColor};
    }
   } 
  }
`;

const Controllers = styled.div`
  display: flex;
  gap: 0.5rem;
  @media(max-width: 320px) {
    width: 100%;

    justify-content: space-around;
  } 
`;

export { Container, TitleContainer, Controllers };
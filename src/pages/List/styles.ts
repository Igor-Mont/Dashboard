import styled from "styled-components";

const Container = styled.div``;

const Content = styled.main``;

const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .tag-filter {
    font-size: 1.2rem;
    font-weight: 500;
    background: none;

    color: ${props => props.theme.colors.white};

    margin: 0 0 2.5rem 0.5rem;
    transition: opacity .3s;

    opacity: 0.3;

    &:hover {
      opacity: 0.7;
    }

    &::after {
      content: '';
      display: block;
      width: 3rem;
      margin: 0 auto;
      border-bottom: 10px solid ${props => props.theme.colors.success};
    }

    &:last-child::after {
      content: '';
      display: block;
      width: 3rem;
      margin: 0 auto;
      border-bottom: 10px solid ${props => props.theme.colors.warning};
    }
  }

  .tag-active {
    opacity: 1;
  }
`;

export { Container, Content, Filters };
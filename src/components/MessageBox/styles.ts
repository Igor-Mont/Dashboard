import styled from "styled-components";

const Container = styled.div`
  width: 48%;
  height: 260px;
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  border-radius: 0.5rem;

  margin: 10px 0;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  >header img {
    width: 35px;
  }

  >header p {
    font-size: 1.3rem;
  }
`;

export { Container }
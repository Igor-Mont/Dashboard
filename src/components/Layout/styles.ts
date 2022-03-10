import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: grid;
  min-width: 315px;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas: 'AS MH' 'AS CT';

  @media(max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;

    grid-template-areas: 'MH' 'CT';
  }
`;

export { Container };
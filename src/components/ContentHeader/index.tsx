import { Container, TitleContainer, Controllers } from "./styles";

function ContentHeader(): JSX.Element {
  return (
    <Container>
      <TitleContainer>
        <h1>Teste</h1>
      </TitleContainer>
      <Controllers>
        <button type="button">Botão A</button>
        <button type="button">Botão b</button>
      </Controllers>
    </Container>
  );

}

export { ContentHeader };
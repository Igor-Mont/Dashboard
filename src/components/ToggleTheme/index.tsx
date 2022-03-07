import { Container, ToggleLabel, Toggle } from './styles';

function ToggleTheme(): JSX.Element {

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <Toggle
        checked={true}
        onChange={() => console.log('fn')}
        checkedIcon={false}
        uncheckedIcon={false}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
}

export { ToggleTheme };

import { Container, ToggleLabel, Toggle } from './styles';

type ToggleThemeProps = {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

function ToggleTheme({ checked, labelLeft, labelRight, onChange }: ToggleThemeProps): JSX.Element {

  return (
    <Container>
      <ToggleLabel>{labelLeft}</ToggleLabel>
      <Toggle
        checked={checked}
        onChange={onChange}
        checkedIcon={false}
        uncheckedIcon={false}
      />
      <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
  );
}

export { ToggleTheme };

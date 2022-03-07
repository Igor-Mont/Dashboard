import { Container } from './styles';

type Option = {
  value: string | number;
  label: string | number;
}

type SelectInputProps = {
  options: Option[];
}

function SelectInput({ options }: SelectInputProps): JSX.Element {
  return (
    <Container>
      <select>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.value}</option>
        ))}
      </select>
    </Container>
  );
}

export { SelectInput };

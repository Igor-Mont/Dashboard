import React from 'react';
import { Container } from './styles';

type Option = {
  value: string | number;
  label: string | number;
}

type SelectInputProps = {
  options: Option[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}

function SelectInput({ options, onChange, defaultValue }: SelectInputProps): JSX.Element {
  return (
    <Container>
      <select onChange={onChange} defaultValue={defaultValue}>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </Container>
  );
}

export { SelectInput };

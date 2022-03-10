import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({... rest}: InputProps): JSX.Element {

  return (
    <Container {...rest}>
    </Container>
  );
}

export { Input };

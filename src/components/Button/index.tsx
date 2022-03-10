import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
};

function Button({children, ...rest}: ButtonProps): JSX.Element {

  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}

export { Button };

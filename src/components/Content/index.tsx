import { ReactNode } from 'react';
import { Container } from './styles';

type ContentProps = {
  children: ReactNode;
}

function Content({ children }: ContentProps): JSX.Element {

  return (
    <Container>
      { children }
    </Container>
  );
}

export { Content };

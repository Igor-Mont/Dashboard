import { Container } from './styles';

import { MainHeader } from '../MainHeader';
import { Content } from '../Content'
import { Aside } from '../Aside';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
}


function Layout({ children }: LayoutProps): JSX.Element {

  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content>
        { children }
      </Content>
    </Container>
  );
}

export { Layout };

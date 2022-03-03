import { Container } from './styles';

import { MainHeader } from '../MainHeader'
import { Content } from '../Content'
import { Aside } from '../Aside'

function Layout(): JSX.Element {

  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content />
    </Container>
  )
}

export { Layout };

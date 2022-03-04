import { Container, Header, Logo, Menu, MenuItemLink, Title } from './styles';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';
import logoIMG from '../../assets/logo.svg';

function Aside(): JSX.Element {

  return (
    <Container>
      <Header>
        <Logo src={logoIMG} alt='Logo my wallet' />
        <Title>Minha carteira</Title>
      </Header>

      <Menu>
        <MenuItemLink href="#">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdArrowDownward />
          Saídas
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </Menu>
    </Container>
  );
}

export { Aside };

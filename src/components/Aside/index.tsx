import { Container, Header, Logo, MenuItemLink, Menu, Title } from './styles';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';
import logoIMG from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function Aside(): JSX.Element {

  return (
    <Container>
      <Header>
        <Logo src={logoIMG} alt='Logo my wallet' />
        <Title>Minha carteira</Title>
      </Header>

      <Menu>
        <MenuItemLink className='menu-item-link' to="/dashboard">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink className='menu-item-link' to="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>

        <MenuItemLink className='menu-item-link' to="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </MenuItemLink>

        {/* <Link to="#">
          <MdExitToApp />
          Sair
        </Link> */}
      </Menu>
    </Container>
  );
}

export { Aside };

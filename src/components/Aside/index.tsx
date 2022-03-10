import { Container, Header, Logo, MenuItemLink, Menu, Title, MenuItemButton } from './styles';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';
import logoIMG from '../../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Aside(): JSX.Element {

  const { signOut } = useContext(AuthContext);

  return (
    <Container>
      <Header>
        <Logo src={logoIMG} alt='Logo my wallet' />
        <Title>Minha carteira</Title>
      </Header>

      <Menu>
        <MenuItemLink to="/dashboard">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink to="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>

        <MenuItemLink to="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </MenuItemLink>

        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </Menu>
    </Container>
  );
}

export { Aside };

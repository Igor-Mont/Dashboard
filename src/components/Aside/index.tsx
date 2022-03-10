import { Container, Header, Logo, MenuItemLink, Menu, Title, MenuItemButton, ToggleMenu, ThemeToggleFooter } from './styles';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp, MdClose, MdMenu } from 'react-icons/md';
import logoIMG from '../../assets/logo.svg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ThemeSwitcherContext } from '../../contexts/ThemeSwitcherContext';
import { ToggleTheme } from '../ToggleTheme';
import { Link } from 'react-router-dom';

function Aside(): JSX.Element {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeSwitcherContext);
  const { signOut } = useContext(AuthContext);

  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

  const handleToggleMenu = () => {
    setMenuIsOpened(!menuIsOpened);
  }

  const handleChangeTheme = () => {
      setDarkTheme(!darkTheme);
      toggleTheme();
  }

  return (
    <Container menuIsOpen={menuIsOpened}>
      <Header>
      <ToggleMenu onClick={handleToggleMenu}>
        {menuIsOpened ? <MdClose /> : <MdMenu />}
      </ToggleMenu>

        <Logo src={logoIMG} alt='Logo my wallet' />
        <Title>Minha carteira</Title>
      </Header>

      <Menu>
        <MenuItemLink to="/">
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
          <Link to="/">Sair</Link>
        </MenuItemButton>
      </Menu>

      <ThemeToggleFooter menuIsOpen={menuIsOpened}>
        <ToggleTheme
          labelLeft='Light'
          labelRight='Dark'
          onChange={handleChangeTheme}
          checked={darkTheme}
        />
      </ThemeToggleFooter>
    </Container>
  );
}

export { Aside };

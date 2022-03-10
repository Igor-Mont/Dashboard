import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

type ContainerProps = {
  menuIsOpen: boolean;
}

type FooterProps = {
  menuIsOpen: boolean;
}

const Container = styled.div<ContainerProps>`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secondary};

  padding-left: 1.25rem;

  border-right: 1px solid ${props => props.theme.colors.gray};

  position: relative;

  @media(max-width: 600px) {
    padding-left: 0.5rem;
    position: fixed;
    z-index: 2;

    width: 170px;

    height: ${props => props.menuIsOpen ? '100vh' : '70px'};

    ${props => !props.menuIsOpen && css`
      border: none;
      border-bottom: 1px solid ${props => props.theme.colors.gray};
    `};

    overflow: hidden;
  }
`;

const Header = styled.header`
  height: 70px;

  display: flex;
  align-items: center;
  gap: 0.75rem;

`;

const Logo = styled.img`
  width: 40px;
  height: 40px;

  @media(max-width: 600px) {
    display: none;
  }
`;

const Title = styled.h3`
  color: ${props => props.theme.colors.white};

  @media(max-width: 600px) {
    display: none;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  gap: 2rem;
`;

const MenuItemLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${props => props.theme.colors.info};
  text-decoration: none;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  >svg {
    font-size: 18px;
  }
`;

const MenuItemButton = styled.button`
  font-size: 16px;
  color: ${props => props.theme.colors.info};
  
  border: none;
  background: none;
  margin: 7px 0;
  display: flex;
  align-items: center;
  transition: opacity 0.3s;

  &:hover {
      opacity: 0.7;
  }
  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;

const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;
    display: flex;

    border-radius: 0.4rem;
    font-size: 1.3rem;
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};

    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }

    display: none;

    @media(max-width: 600px) {
      display: flex;
      justify-content: center;
      align-items: center;
  
    }

`;

const ThemeToggleFooter = styled.footer<FooterProps>`
  display: none;
  position: absolute;
  bottom: 30px;

  @media(max-width: 470px) {
    display: ${props => props.menuIsOpen ? 'flex' : 'none'}
  }
`;

export { Container, Header, Logo, Menu, MenuItemLink, Title, MenuItemButton, ToggleMenu, ThemeToggleFooter };
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secondary};

  padding-left: 1.25rem;

  border-right: 1px solid ${props => props.theme.colors.gray} ;
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
`;

const Title = styled.h3`
  color: ${props => props.theme.colors.white};
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  gap: 1rem;

  .menu-item-link {
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
  }
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

export { Container, Header, Logo, Menu, MenuItemLink, Title };
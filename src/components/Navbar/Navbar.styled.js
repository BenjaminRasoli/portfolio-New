import styled from "styled-components";

const MainNavWrapper = styled.nav`
  font-size: 18px;
  background-color: var(--Purple);
`;

const MainNav = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  max-width: 1500px;

  @media (max-width: 1499px) {
    max-width: 985px;
  }

  @media (max-width: 984px) {
    display: block;
    max-width: 470px;
  }

  @media (max-width: 500px) {
    max-width: 350px;
  }
`;

const NavHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
`;

const NavHeader = styled.div`
  color: var(--Lime);
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1em;
  gap: 1em;
`;

const HamburgerMenuIcon = styled.div`
  display: none;
  z-index: 2;
  @media (max-width: 984px) {
    display: flex;
    align-items: center;
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6em;

  @media (max-width: 984px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--White);
`;

const HamburgerMenuWrapper = styled.div`
  @media (max-width: 984px) {
    width: 100%;
    background-color: var(--Purple);
    position: fixed;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;

const HamburgerMenu = styled.div`
  @media (max-width: 984px) {
    height: 100%;
    width: 100%;
    max-width: 470px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  @media (max-width: 500px) {
    max-width: 350px;
  }

  a {
    padding-bottom: 1.5em;
    padding-right: 0.5em;
  }
  a:hover {
    color: var(--Lime);
    transition: 0.5s;
  }
`;

export const S = {
  MainNavWrapper,
  NavLinksWrapper,
  SocialMediaIcons,
  NavHeader,
  NavLink,
  HamburgerMenuIcon,
  NavHeaderWrapper,
  HamburgerMenu,
  MainNav,
  HamburgerMenuWrapper,
};

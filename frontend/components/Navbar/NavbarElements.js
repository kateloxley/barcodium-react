import styled from "styled-components";
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  height: 60px;
  /* margin-top: -60px; */
  background: white;
  width: 100%;
  z-index: 10;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 30%);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    justify-content: flex-start;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  padding-left: 20px;

  @media screen and (max-width: 650px) {
    padding-left: 10px;
    transition: 0.4s all ease;
    width: 75%;
  }

  img {
    width: 100%;
  }
`;

export const NavLogo = styled(Link)`
    cursor: pointer;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #5b37ac;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  text-align: center;
  width: 100%;
  padding: 0;

  & > li:last-child > a:last-child {
    font-size: 22px;
    font-weight: 400;
    cursor: pointer;
  }

  @media screen and (max-width: 960px) {
    & > li:last-child > a:last-child {
      font-size: 16px;
      font-weight: 600;
      width: 140px;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
    height: 60px;
`

export const MobileLink = styled.a`
    color: #000;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
      color: #5c4cff;
      transition: 0.5s all ease;
    }

    &.active {
      color: #5c4cff;
      transition: 0.5s all ease;
  }
`;

export const NavLinks = styled(LinkScroll)`
  color: #000;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #5c4cff;
    transition: 0.5s all ease;
  }

  &.active {
    color: #5c4cff;
    transition: 0.5s all ease;
  }
`;
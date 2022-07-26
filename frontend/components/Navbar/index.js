import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  MobileLink,
} from './NavbarElements';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
export const logo = require('../../src/assets/logo.svg');
import { useRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const router = useRouter();

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo href='/' onClick={toggleHome}>
            <a>
              <Image src={logo} width={270} height={50} />
            </a>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FiMenu />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='price'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
              >
                Цены
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='feedback'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
              >
                Отызвы
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='questions'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
              >
                Вопросы
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href='/contacts' onClick={() => router.push('/contacts')}>
                Контакты
              </NavLinks>
            </NavItem>
            <NavItem>
              <MobileLink href='tel:+74999921810'>+7 499 992 18 10</MobileLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
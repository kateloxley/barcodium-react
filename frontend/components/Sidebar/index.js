import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, Overlay } from './SidebarElements';
import { NavLogo } from '../Navbar/NavbarElements';
import Image from 'next/image';
import { logo } from '../Navbar';
import { useRouter } from 'next/router';
import { slide as Menu } from 'react-burger-menu';
import styles from './Menu.module.css';


const Sidebar = ({ isOpen, toggle }) => {
    const router = useRouter();

  return (
    <>
      <Menu
        right
        isOpen={isOpen}
        onClick={toggle}
        burgerButtonClassName={styles['bm-button']}
        menuClassName={styles['bm-menu']}
        onClose={toggle}
      >
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <NavLogo href='/'>
              <a>
                <Image src={logo} width={210} height={38} />
              </a>
            </NavLogo>
            <SidebarLink to='price' onClick={toggle}>
              Цены
            </SidebarLink>
            <SidebarLink to='feedback' onClick={toggle}>
              Отызвы
            </SidebarLink>
            <SidebarLink to='questions' onClick={toggle}>
              Вопросы
            </SidebarLink>
            <SidebarLink to='contacts' onClick={() => router.push('/contacts')}>
              Контакты
            </SidebarLink>
            <SidebarLink href='mobile' onClick={toggle}>
              +7 499 992 18 10
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </Menu>
    </>
  );
}

export default Sidebar
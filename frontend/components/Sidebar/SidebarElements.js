import styled from "styled-components"
import { FiX } from 'react-icons/fi'
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';


export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 100;
  width: 85%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: start;
  top: 0;
  right: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; 
`;

export const CloseIcon = styled(FiX)`
  color: #5b37ac;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #000;
`

export const SidebarMenu = styled.ul`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  text-align: center;
  padding: 40px 20px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000;
    cursor: pointer;

    &:hover {
      color: #5c4cff;
      transition: 0.5s all ease;
    }
  }

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 50px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  

  &:hover {
    color: #5c4cff;
    transition: 0.5s all ease;
  }
`;
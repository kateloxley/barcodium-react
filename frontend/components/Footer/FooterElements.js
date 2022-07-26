import styled from "styled-components";
import Link from "next/link";
import { Link as LinkScroll } from 'react-scroll';

export const FooterContainer = styled.footer`
  background-color: #211b31;
`;

export const FooterWrap = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  max-width: 1200px;
  padding: 75px 0 90px 0;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
  }

  p {
    font-size: 12px;
    color: rgb(135, 135, 135);
  }
`;

export const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 20px;
  width: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  box-sizing: border-box;
  color: #fff;
  padding-left: 20px;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }

  h3 {
    font-size: 14px;
    color: #525252;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0 0 16px 0;
  }

  a {
    text-decoration: none;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover {
      color: #525252;
      transition: 0.3s ease;
    }
  }
`;

export const FooterLogoLink = styled(LinkScroll)`
    width: 100%;
`

export const FooterLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    color: red;
    transition: 0.3s ease;
  }
`;

export const FooterAnchorLink = styled(LinkScroll)`
  text-decoration: none;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    color: red;
    transition: 0.3s ease;
  }
`;


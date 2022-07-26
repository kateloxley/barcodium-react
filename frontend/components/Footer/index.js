import React from 'react';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterLogoLink,
  FooterAnchorLink,
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';
import { logo } from '../Navbar';
import { useRouter } from 'next/router';

const FooterElements = () => {
    const router = useRouter();

    return (
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLogoLink to='home'>
                  <a>
                    <Image src={logo} width={260} height={48} />
                  </a>
                </FooterLogoLink>
                <p>© 2022 Barcodium</p>
              </FooterLinkItems>
              <FooterLinkItems>
                <h3>Штрихкоды</h3>
                <FooterAnchorLink
                  to='price'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                >
                  Штрихкоды EAN 13
                </FooterAnchorLink>
                <FooterAnchorLink
                  to='questions'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                >
                  Вопросы
                </FooterAnchorLink>
                <FooterAnchorLink
                  to='feedback'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                >
                  Отзывы
                </FooterAnchorLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <h3>О нас</h3>
                <FooterLink href={'/contacts'}>Контакты</FooterLink>
                <FooterLink href={'/policy'}>Политика обработки ПДн</FooterLink>
                <FooterLink href={'/terms'}>Правила использования</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <h3>Контакты</h3>
                <FooterLink href='mailto:info@barcodium.ru'>
                  info@barcodium.ru
                </FooterLink>
                <FooterLink href='tel:+74999921810'>
                  +7 499 992 18 10
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    );
};

export default FooterElements;

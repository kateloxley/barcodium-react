import React from 'react'
import { BannerContainer, BannerWrapper, FirstBlock } from './BannerElements';
import { Button } from '../../src/styles/components';
import Image from 'next/image';
const bannerImg = require('../../src/assets/banner-image.webp');

const BannerSection = () => {
  return (
    <BannerContainer id='home'>
      <BannerWrapper>
        <FirstBlock>
          <h1>Штрихкоды EAN-13</h1>
          <h2>Оформим штрихкоды в течение 2-3 рабочих часов.</h2>
          <p>
            Коды, которые работают всегда и везде, в сетевых и онлайн магазинах.
            Без дополнительных взносов и членских платежей.
          </p>
          <Button>
            <a>Купить</a>
          </Button>
        </FirstBlock>
        <span>
          <Image src={bannerImg} width={460} height={354} />
        </span>
      </BannerWrapper>
    </BannerContainer>
  );
}

export default BannerSection
import {
  SectionTitle, SectionContainer} from '../../src/styles/components';
import PurpleCheck from '../UI/PurpleCheck';
import Image from 'next/image';
import { SectionWrapper, Subtitle, Item, ImagesWrap } from './ResonsElements';

const ReasonsItem = ({ text }) => {
  return (
    <Item>
      <PurpleCheck />
      <p>{text}</p>
    </Item>
  );
};


const ReasonsSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        Вам нужны штрихкоды, <span>если вы</span>
      </SectionTitle>
      <SectionWrapper>
        <div>
          <ReasonsItem
            text='производитель и собираетесь поставлять товары в торговые сети или
              магазины'
          />
          <ReasonsItem text='собираетесь работать с Честным знаком' />
          <ReasonsItem text='хотите поставлять товары за границу' />
        </div>
        <div>
          <ReasonsItem
            text='привозите из Китая или любой другой страны товары, на которых нет
              штрих-кодов'
          />
          <ReasonsItem text='налаживаете сотрудничество с маркетплейсами' />
        </div>
      </SectionWrapper>
      <SectionWrapper column>
        <SectionTitle>
          Штрихкоды, которые <span>работают</span>
        </SectionTitle>
        <Subtitle>
          Наши штрихкоды EAN-13 работают в любой точке планеты. Навсегда. На
          Barcodium Вы можете купить штрихкоды один раз, без дополнительных
          комиссий.
        </Subtitle>
        <ImagesWrap>
          <Image src={require('../../src/assets/yandexmarket.svg')} />
          <Image src={require('../../src/assets/ozon.svg')} />
          <Image src={require('../../src/assets/pyaterochka.svg')} />
          <Image src={require('../../src/assets/lenta.svg')} />
          <Image src={require('../../src/assets/okay.svg')} />
          <Image src={require('../../src/assets/auchan.svg')} />
        </ImagesWrap>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default ReasonsSection; 
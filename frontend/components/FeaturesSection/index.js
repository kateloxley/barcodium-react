import { SectionTitle } from '../../src/styles/components';
import {
  SectionWrapper,
  FeaturesTitle,
  FeaturesText,
  StepsCol,
} from './FeaturesElements';
import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <>
      <SectionTitle>
        Наши <span>преимущества</span>
      </SectionTitle>
      <SectionWrapper>
        <StepsCol>
          <Image
            src={require('../../src/assets/features1.svg')}
            width={80}
            height={80}
          />
          <FeaturesTitle>
            Универсальность
            <br />
          </FeaturesTitle>
          <FeaturesText>
            Наши ЕАН-13 штрихкоды - международные. Работают в любой точке
            планеты, в любом магазине
          </FeaturesText>
        </StepsCol>
        <StepsCol>
          <Image
            src={require('../../src/assets/features2.svg')}
            width={80}
            height={80}
          />
          <FeaturesTitle>Сертификат подлинности</FeaturesTitle>
          <FeaturesText>
            Выдаем сертификат, подтверждающий, что купленные коды - уникальные и
            выданы Вам в эксклюзивное пользование.
          </FeaturesText>
        </StepsCol>
        <StepsCol>
          <Image
            src={require('../../src/assets/features3.svg')}
            width={80}
            height={80}
          />
          <FeaturesTitle>Изображения в комплекте</FeaturesTitle>
          <FeaturesText>
            Пришлем не только номера кодов, но и качественные изображения в SVG,
            PDF, EPS формата
          </FeaturesText>
        </StepsCol>
        <StepsCol>
          <Image
            src={require('../../src/assets/features4.svg')}
            width={80}
            height={80}
          />
          <FeaturesTitle>Платите только один раз</FeaturesTitle>
          <FeaturesText>
            Покупайте штрихкоды ЕАН-13 без каких-либо членских платежей,
            комиссий, сборов.
          </FeaturesText>
        </StepsCol>
      </SectionWrapper>
    </>
  );
};

export default FeaturesSection;

import { SectionTitle } from '../../src/styles/components';
import { SectionWrapper, StepsCol, Line, NumWrap, TextWrap } from './StepsElements';

const StepsSection = () => {
    return (
      <>
        <SectionTitle>
          Этапы <span>сотрудничества</span>
        </SectionTitle>
        <SectionWrapper>
          <StepsCol>
            <NumWrap>
              <span>1</span>
              <Line></Line>
            </NumWrap>
            <TextWrap>
              <h3>Выбор количества</h3>
              <p>Добавьте нужное количество штрих кодов ЕАН 13 в корзину.</p>
            </TextWrap>
          </StepsCol>
          <StepsCol>
            <NumWrap>
              <span>2</span>
              <Line></Line>
            </NumWrap>
            <TextWrap>
              <h3>Оплата</h3>
              <p>
                Пришлите реквизиты в момент оформления заказа. Мы выставим счет.
                Либо оплатите банковской картой онлайн. Все <b>официально</b>.
              </p>
            </TextWrap>
          </StepsCol>
          <StepsCol>
            <NumWrap>
              <span>3</span>
              <Line></Line>
            </NumWrap>
            <TextWrap>
              <h3>Обработка заказа</h3>
              <p>
                Мы закрепим штрих коды за Вами в нашей базе данных. Приготовим
                сертификат владения.
              </p>
            </TextWrap>
          </StepsCol>
          <StepsCol>
            <NumWrap>
              <span>4</span>
              <Line></Line>
            </NumWrap>
            <TextWrap>
              <h3>Завершение</h3>
              <p>
                Пришлем в течение 1 рабочего дня на указанный email качественные
                изображения в форматах SVG, PDF, EPS и сертификат.
              </p>
            </TextWrap>
          </StepsCol>
        </SectionWrapper>
      </>
    );
    
};

export default StepsSection;

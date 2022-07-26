import React from 'react';
import {
  ContactsContainer,
  ContactsWrap,
  ContactsFormWrap,
  ContactsText,
  ContactsLink,
  ContactsData,
  ContactsForm,
  BtnWrap,
  BottomContacts,
  BottomContactsWrap,
  BottomContactsText,
  YandexMap,
} from './ContactsElements';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MyPlacemark = () => {
  return (
    <YMaps query={{ load: 'control.ZoomControl' }}>
      <div>
        <Map
          defaultState={{
            center: [59.859641, 30.179387],
            zoom: 16,
            controls: ['zoomControl'],
          }}
        >
          <Placemark
            geometry={ [59.859641, 30.179387] } />
        </Map>
      </div>
    </YMaps>
  );
}


const ContactsSection = () => {
    return (
      <>
        <ContactsContainer>
          <ContactsWrap>
            <h2>Есть вопросы? Напишите или позвоните нам!</h2>
            <ContactsFormWrap>
              <ContactsText>
                <ContactsData>
                  <ContactsLink href='tel:+74999921810'>
                    +7 499 992 18 10
                  </ContactsLink>
                  <ContactsLink href='mailto:info@barcodium.ru'>
                    info@barcodium.ru
                  </ContactsLink>
                </ContactsData>
                <p>
                  ИП Веревкин Роман Андреевич <br />
                  г. Санкт-Петербург, ул. Доблести, 18 к1 <br />
                  ИНН: 190303634133 <br />
                  ОГРНИП: 319246800038032
                </p>
                <p>
                  <strong>График работы:</strong> <br />
                  пн-пт с 10.00 до 19.00, сб-вс - выходные дни.
                </p>
              </ContactsText>
              <ContactsForm>
                <input placeholder='Имя'></input>
                <input placeholder='Email'></input>
                <input placeholder='Телефон'></input>
                <textarea placeholder='Сообщение' rows='3'></textarea>
                <BtnWrap>
                  <button>Отправить</button>
                </BtnWrap>
              </ContactsForm>
            </ContactsFormWrap>
          </ContactsWrap>
          <BottomContacts>
            <YandexMap><MyPlacemark /></YandexMap>
            <BottomContactsWrap>
              <BottomContactsText>
                ИП Веревкин Роман Андреевич, <br />
                ИНН: 190303634133 <br />
                ОГРНИП: 319246800038032 <br />
                г. Санкт-Петербург, ул. Доблести, 18 к1 <br />
                Тел: +7 499 992 18 10 <br />
                Email: info@barcodium.ru <br />
                <p>
                  График работы: пн-пт с 10.00 до 19.00, сб-вс - выходные дни.
                </p>
              </BottomContactsText>
            </BottomContactsWrap>
          </BottomContacts>
        </ContactsContainer>
      </>
    );
};

export default ContactsSection;

import { SectionContainer, SectionTitle } from '../../src/styles/components';
import Script from 'next/script';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  margin-bottom: 100px;
`

const WidgetSection = () => {
  return (
    <>
      <SectionContainer id='feedback'>
        <SectionTitle>
          Что клиенты <span>говорят про нас</span>
        </SectionTitle>
        <SectionWrapper>
          <review-lab data-widgetid='5fa5093b68e72c750c4612a8'></review-lab>
          <Script
            src='https://app.reviewlab.ru/widget/index-es2015.js'
            defer
          ></Script>
          <Script
            src='https://app.reviewlab.ru/widget/index-es5.js'
            defer
          ></Script>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default WidgetSection;
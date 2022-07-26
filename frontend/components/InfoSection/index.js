import React from 'react'
import { Button } from '../../src/styles/components';
import {
  InfoContainer,
  InfoWrapper,
    TextWrapper,
    Heading,
  Subtitle,
    Input
} from './InfoElements';

const InfoSection = ({
  gradientBg,
  id,
  heading,
  description,
  description2,
  textFlexDirection,
  btnText,
  input,
  placeholder,
  paddingWrap,
}) => {
  return (
    <>
      <InfoContainer gradientBg={gradientBg} id={id}>
        <InfoWrapper paddingWrap={paddingWrap}>
          <Heading>{heading}</Heading>
          <TextWrapper textFlexDirection={textFlexDirection}>
            <Subtitle>{description}</Subtitle>
            <Subtitle>{description2}</Subtitle>
            {input ? <Input placeholder={placeholder} /> : !(<Input />)}
            <Button>
              <a>{btnText}</a>
            </Button>
          </TextWrapper>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection
import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: #000;
  background: ${({ gradientBg }) =>
    gradientBg
      ? 'linear-gradient(to top, #5c25d5, rgba(150, 64, 209, 1))'
      : '#5c25d5'};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  height: 100%;
  max-width: 1200px;
  justify-content: center;
  padding: 90px 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ textFlexDirection }) =>
  textFlexDirection ? 'row' : 'column'};
  max-width: 510px;
  width: 100%;
  margin: 0 auto;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Heading = styled.h2`
  color: #fff;
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin: 0 0 30px 0;
  transition: 0.5s all ease;

  @media screen and (max-width: 480px) {
    font-size: 38px;
    transition: 0.5s all ease;
  }
`;

export const Subtitle = styled.p`
  color: #fff;
  line-height: 1.5rem;
  text-align: center;
  margin: 0;
  &:nth-child(2) {
    margin-bottom: 30px;
  }
`;

export const Input = styled.input`
  padding: 0 20px;
  font-size: 16px;
  line-height: 1.33;
  border: 0 none;
  max-width: 250px;
  width: 100%;
  margin-right: 20px;
  outline: none;
  border-radius: 5px;
  height: 58px;
  transition: 0.5s all ease;

  @media screen and (max-width: 768px) {
    margin: 0 0 40px 0;
    transition: 0.5s all ease;
  }
`;
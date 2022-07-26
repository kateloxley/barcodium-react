import styled from "styled-components";

export const PurpleBackground = styled.section`
  background: linear-gradient(to bottom, #5c25d5, rgba(150, 64, 209, 1));
`;

export const BannerContainer = styled.section`
  background: linear-gradient(to bottom, #5c25d5, rgba(150, 64, 209, 1));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 100%;
  padding: 60px 0;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 1200px;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    transition: 0.5s all ease;
  }

  h1 {
    font-size: 48px;
    font-weight: 500;
    margin: 10px 0;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.55;
    margin: 20px 0 30px 0;
  }

  span {
    display: flex;
    max-width: 460px;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
  }
`;


  

export const FirstBlock = styled.div`
display: flex;
flex-direction: column;
    flex: 0 1 auto;
  max-width: 600px;
  width: 100%;
  padding: 0 0 40px 20px;
`;
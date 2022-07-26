import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  max-width: 960px;
  margin: 0 auto;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`;

export const StepsCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 20px 0;
    @media screen and (max-width: 768px) {
      margin: 0;
    }
  }

  p {
    font-size: 15px;
    line-height: 1.55;
    padding-right: 20px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    background: #5c4cff;
    border-radius: 100%;
    width: 34px;
    @media screen and (max-width: 768px) {
      max-height: 34px;
      height: 100%;
    }
    height: 34px;
  }
`;

export const Line = styled.div`
  position: relative;
  bottom: 50%;
  z-index: -10;
  height: 2px;
  background-color: #e6e6e6;

  @media screen and (max-width: 768px) {
    bottom: 0;
    left: 50%;
    height: 100%;
    width: 2px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
  }
`;

export const NumWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
  }
`;
import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin: 0 auto;
  max-width: 960px;
`;

export const StepsCol = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  @media screen and (max-width: 480px) {
    &:first-of-type {
      padding-top: 0;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 20px 0;
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
    height: 34px;
  }
`;

export const FeaturesText = styled.div`
  font-size: 15px;
  line-height: 1.55;
  text-align: center;
  padding: 0 20px;
`;

export const FeaturesTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0;
  text-align: center;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
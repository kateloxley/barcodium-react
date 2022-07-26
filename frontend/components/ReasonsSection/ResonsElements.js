import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: space-evenly;
  align-content: center;
  max-width: 960px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    @media screen and (max-width: 768px) {
      padding-left: 20px;
    }
  }

  p {
    font-size: 20px;
    padding: 0 20px;
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  text-align: center;
  max-width: 870px;
  width: 100%;
`;


export const ImagesWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  span:first-of-type {
    @media screen and (max-width: 768px) {
      margin: 5px !important;
    }
  }
`;
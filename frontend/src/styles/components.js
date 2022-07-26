import styled from "styled-components";

export const SectionContainer = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`; 

export const Button = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 55px;

  a {
    color: #8500ff;
    font-size: 18px;
    font-weight: 700;
    border-width: 1px;
    border-radius: 30px;
    background-color: #ffffff;
    background-position: center center;
    border-color: transparent;
    border-style: solid;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      border-color 0.2s ease-in-out;
    box-shadow: 0px 4px 10px 0px rgb(57 26 181);
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 30px;

    &:hover {
      border-style: none;
      transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
        border-color 0.2s ease-in-out;
    }
  }
`;

export const SectionTitle = styled.h2`
  color: #000000;
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  padding-top: 90px;
  margin: 0 0 50px 0;
  text-transform: uppercase;

  span {
    color: rgb(23, 184, 120);
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    font-size: 38px;
    overflow-wrap: break-word;
  }
`;

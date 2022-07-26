import styled from "styled-components";

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 840px;
  margin: 0 auto;
  transition: 0.5s all ease;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    max-width: 600px;
    transition: 0.5s all ease;
    padding: 0 10px;
  }
  @media screen and (max-width: 480px) {
    max-width: 300px;
    transition: 0.5s all ease;
    padding: 0;
  }
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid black;
  transition: 0.5s all ease;

  h3 {
    font-size: 20px;
    max-width: 263px;
    width: 100%;
    font-weight: 400;
    transition: 0.5s all ease;
    @media screen and (max-width: 768px) {
      font-size: 16px;
      max-width: 220px;
      transition: 0.5s all ease;
    }
    @media screen and (max-width: 480px) {
      font-size: 16px;
      max-width: 200px;
      width: auto;
      transition: 0.5s all ease;
    }
  }
`;


export const GoodsPrice = styled.p`
  color: rgb(23, 184, 120);
  font-size: 32px;
  font-weight: 600;
  max-width: 105px;
  margin: 0;
  transition: 0.5s all ease;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    transition: 0.5s all ease;
  }
`;

export const GoodsOldPrice = styled.p`
  font-size: 20px;
  position: relative;
  transition: 0.5s all ease;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    transition: 0.5s all ease;
  }
  &:before {
    border-bottom: 3px solid red;
    position: absolute;
    content: '';
    width: 100%;
    height: 40%;
    transform: rotate(-12deg);
  }
`;

export const GoodsPerItem = styled.p`
  font-size: 16px;
  color: gray;
  width: 100px;
  transition: 0.5s all ease;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    transition: 0.5s all ease;
  }
  @media screen and (max-width: 480px) {
    display: none;
    transition: 0.5s all ease;
  }
`;

export const GoodsBtn = styled.a`
  box-sizing: border-box;
  background-color: #5c4cff;
  box-shadow: 0px 4px 20px rgb(0 214 143 / 29%);
  border-radius: 30px;
  line-height: 1.55;
  font-weight: 600;
  border-width: 1px;
  color: #ffffff;
  font-size: 14px;
  font-family: 'Arial', Arial, sans-serif;
  text-align: center;
  text-decoration: none;
  border-color: transparent;
  border-style: solid;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  padding: 13px 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  max-width: 200px;
  max-height: 45px;
  width: 100%;
  height: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  transition: 0.5s all ease;

  &:hover {
    border-style: none;
    transition: border-style 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    max-width: 100px;
    transition: 0.5s all ease;
  }
  @media screen and (max-width: 768px) {
    max-width: 80px;
    font-size: 12px;
    padding: 8px 0;
    transition: 0.5s all ease;
  }
`;
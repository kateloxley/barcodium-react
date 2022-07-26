import styled from "styled-components";
import Link from "next/link";

export const ContactsContainer = styled.section`
    width: 100%;
`

export const ContactsWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 120px;
  

  h2 {
    font-size: 38px;
    text-align: center;
    padding-bottom: 40px;
  }
`;

export const ContactsFormWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactsText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.55;

  p {
    font-size: 16px;
  }
`;

export const ContactsLink = styled(Link)`
  font-size: 26px;
  text-decoration: none;
  cursor: pointer;
  &:nth-child(2) {
    color: #5c25d5;
  }
`;

export const ContactsData = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  

  a {
    color: #000;
    font-size: 26px;
    text-decoration: none;
    cursor: pointer;
    &:nth-child(2) {
      color: #5c25d5;
    }
  }
`;

export const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 340px;
  height: 450px;
  /* /* height: 100%; */
  width: 100%;
  input {
    width: 100%;
    color: #c7c7c7;
    border: 1px solid #c7c7c7;
    outline: none;
    height: 60px;
    padding: 0 20px;
  }
  textarea {
    width: 100%;
    color: #c7c7c7;
    border: 1px solid #c7c7c7;
    outline: none;
    padding: 20px;
    resize: vertical;
    max-height: 102px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 60px;
  button {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    border-width: 1px;
    border-radius: 30px;
    background-color: #5c4cff;
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

export const BottomContacts = styled.div`
  display: flex;
  justify-content: center;
  background-color: #5c4cff;
  width: 100%;
  height: 70vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const YandexMap = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  div {
    width: 100% !important;
    height: 100% !important;
    /* ymaps:nth-child(1) {
      width: 100%;
    } */
  }
`;

export const BottomContactsWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BottomContactsText = styled.div`
  color: #fff;
  font-size: 26px;
  line-height: 1.45;
  font-weight: 300;
  padding: 20px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  p {
    font-size: 16px;
  }
`;
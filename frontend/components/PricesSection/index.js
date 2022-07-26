import {
  SectionContainer,
  SectionTitle 
} from '../../src/styles/components';
import {
  Table, TableRow, GoodsOldPrice, GoodsPerItem, GoodsPrice, GoodsBtn
} from './PricesElements';

import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); 
    return windowSize;
};


const PriceRow = ({ title, price, oldPrice, perItem, mobTitle }) => {
  const size = useWindowSize();  
  return (
    <TableRow>
      <h3>{size.width < 480 ? mobTitle : title}</h3>
      <GoodsPrice>{price}</GoodsPrice>
      <GoodsOldPrice>{oldPrice}</GoodsOldPrice>
      <GoodsPerItem>{perItem}</GoodsPerItem>
      <GoodsBtn>Купить</GoodsBtn>
    </TableRow>
  );
};

const PricesSection = () => {
  return (
    <>
      <SectionContainer id='price'>
        <SectionTitle>
          Купить штрихкоды
          <span> EAN-13</span>
        </SectionTitle>
        <Table>
          <PriceRow
            title='1 штрих-код EAN-13'
            mobTitle='1 шт'
            price='600'
            oldPrice='1000'
            perItem=''
          />
          <PriceRow
            title='5 штрих-кодов EAN-13'
            mobTitle='5 шт'
            price='1800'
            oldPrice='2500'
            perItem='(360руб/шт)'
          />
          <PriceRow
            title='10 штрих-кодов EAN-13'
            mobTitle='10 шт'
            price='4000'
            oldPrice='2800'
            perItem='(280руб/шт)'
          />
          <PriceRow
            title='25 штрих-кодов EAN-13'
            mobTitle='25 шт'
            price='5000'
            oldPrice='6000'
            perItem='(200руб/шт)'
          />
          <PriceRow
            title='50 штрих-кодов EAN-13'
            mobTitle='50 шт'
            price='7000'
            oldPrice='9000'
            perItem='(140руб/шт)'
          />
          <PriceRow
            title='100 штрих-кодов EAN-13'
            mobTitle='100 шт'
            price='9000'
            oldPrice='12000'
            perItem='(90руб/шт)'
          />
          <PriceRow
            title='200 штрих-кодов EAN-13'
            mobTitle='200 шт'
            price='12000'
            oldPrice='15000'
            perItem='(60руб/шт)'
          />
          <PriceRow
            title='500 штрих-кодов EAN-13'
            mobTitle='500 шт'
            price='20000'
            oldPrice='25000'
            perItem='(40руб/шт)'
          />
          <PriceRow
            title='1000 штрих-кодов EAN-13'
            mobTitle='1000 шт'
            price='30000'
            oldPrice='35000'
            perItem='(20руб/шт)'
          />
        </Table>
      </SectionContainer>
    </>
  );
};

export default PricesSection;
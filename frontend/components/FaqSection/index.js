import { SectionContainer, SectionTitle} from '../../src/styles/components';
import { FaqData } from './FaqData';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styled from 'styled-components';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.9s;
  margin-bottom: 100px;
`;

const Container = styled.div`
  max-width: 750px;
  width: 100%;
`;

const Wrap = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #ada6a6;
  margin: 0 10px;

  &:hover span {
    background: #eee;
    border-radius: 100%;
    width: 34px;
    height: 34px;
  }

  h3 {
    font-weight: 600;
    color: #000;
    font-size: 18px;
    padding: 27px 0;
    margin: 0;
    text-align: left;
  }

  span {
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  color: #000;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 15px;
  }
`;


const FaqSection = () => {
  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null)
    }

    setClicked(index)
  }

  return (
    <>
      <SectionContainer id='questions'>
        <SectionTitle>
          Частые <span>вопросы</span>
        </SectionTitle>
        <IconContext.Provider value={{ color: '#000', size: '25px' }}>
          <AccordionSection>
            <Container>
              {FaqData.map((item, index) => {
                return (
                  <>
                    <Wrap onClick={() => toggle(index)} key={index}>
                      <div>
                        <h3>{item.question}</h3>
                      </div>
                      <div>
                        <span>
                          {clicked === index ? <FiMinus /> : <FiPlus />}
                        </span>
                      </div>
                    </Wrap>
                    {clicked === index ? (
                      <Dropdown>
                        {' '}
                        <p>{item.answer}</p>
                      </Dropdown>
                    ) : null}
                  </>
                );
              })}
            </Container>
          </AccordionSection>
        </IconContext.Provider>
      </SectionContainer>
    </>
  );
};

export default FaqSection;

import react from 'react'
import styled from 'styled-components'
 
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center ;
  display: flex;
  align-items: center;
  justify-content: center ;
`;

const Container = styled.div`
   height: 100vh;
   scroll-snap-align: center;
   width: 1400px;
   display: flex;
   justify-content: space-between;
`;

const Left = styled.div`
 flex: 1;
`;

const Title = styled.h1`
 font: 74px; 
`;

const Right  = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 20px;
`;

const WhatWeDO = styled.div`
  display: flex;
  align-items: center;
  gap:10px;

`;

const Line = styled.img`
  height: 5px ;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 12 0px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer; 
`;


const Who= () => {
    return (
        <Section>
        <Container>
          <Left>
            {/* 3d model */} 
          </Left>
          <Right>
          <Title>Think outside the square space</Title>
            <WhatWeDO>
             <Line src="./img/line.png"/>
             <Subtitle>What We Are</Subtitle>
          </WhatWeDO>
          <Desc>A creative group of designers with passion for the arts. 
          </Desc>
          <Button>See our works</Button>
          </Right>
          </Container>
        </Section>
    )
}

export default Who  
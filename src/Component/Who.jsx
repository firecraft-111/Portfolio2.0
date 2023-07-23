import react from 'react'
import styled from 'styled-components'
import { OrbitControls} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube'
 
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

 @media only screen and (max-width: 768px){
    display: none;
  }
`;

const Title = styled.h1`
 font: 74px; 

 @media only screen and (max-width: 768px){
   font-size: 60px;
  }
`;

const Right  = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 20px;

 @media only screen and (max-width: 768px){
    align-items: center;
    text-align: center;
  }
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
  color: #e098d2;

  @media only screen and (max-width: 768px){
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
  }
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
          <Canvas camera={{fov:25,position:[5,5,5]}}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            <Cube/>
          </Canvas>
          </Left>
          <Right>
          <Title>Think outside the square space</Title>
            <WhatWeDO>
             <Line src="./img/line.png"/>
             <Subtitle>What We Are</Subtitle>
          </WhatWeDO>
          <Desc>a creative group of designers with passion for the arts. 
          </Desc>
          <Button>See our works</Button>
          </Right>
          </Container>
        </Section>
    )
}

export default Who  
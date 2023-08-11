import react from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Sphere,MeshDistortMaterial } from '@react-three/drei';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    height: 200vh;
  }
`;

const Container = styled.div`
   height: 100%;
   scroll-snap-align: center;
   width: 1400px;
   display: flex;
   justify-content: space-between;

   @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
 flex: 2;
 display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 20px;
 padding-left: 50px;

 @media only screen and (max-width: 768px){
    flex:1;
    align-items: center;
    padding-left: 0px;
  }
`;

const Title = styled.h1`
 font: 74px; 

 @media only screen and (max-width: 768px){
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
  size: 20vh;
  color: #da4ea2;
`;

const Desc = styled.p`
  font: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px){
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer; 
`;


const Right  = styled.div`
 flex: 3;
 position: relative;

 @media only screen and (max-width: 768px){
  flex:1;
  width: 100%;
 }
`;

const Img = styled.img`
 width: 730px;
 height:600px;
 object-fit: contain;
 position: absolute;
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
 margin: auto; 
 animation: animate 2s infinite ease alternate;

@media only screen and (max-width: 768px){
    width: 300px;
    height: 300px;
  }

@keyframes animate {
   to{
    transform: translateY(20px )  ;
   }
}

`;

const Hero= () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <Section id="heroSection">
        <Navbar />
        <Container>
          <Left>
            <Title>Think. Make.  Solve.</Title>
            <WhatWeDO>
             <Line src="./img/line.png"/>
             <Subtitle>Hi!! I am Sumit.</Subtitle>
          </WhatWeDO>
          <Desc>3rd-year engineering student passionate about Programming and Web development.</Desc>
          <Button onClick={()=>scrollToSection('whoSection')}>Learn More</Button>
          </Left>
          <Right>
          <Canvas camera={{fov:25,position:[5,5,5]}}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1}/>
            <directionalLight position={[10,5,1]}/>
            <Sphere args={[1,100,200]} scale={1.63}>
            <MeshDistortMaterial color="#3d1060" 
            attach="material" 
            distort={0.5} 
            speed={2}
            />
            </Sphere>
          </Canvas>
            <Img src="./img/mac3.png"/>
          </Right>
          </Container>
        </Section>
    )
}

export default Hero  
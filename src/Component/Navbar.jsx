import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import './Navi.css'

const Section = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;

  @media only screen and (max-width: 768px){
    width: 100%;
  }
`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between ;
    align-items: center;
    padding: 10px 0px;

    @media only screen and (max-width: 768px){
    width: 100%;
    padding: 10px;
    }
`;
const Links = styled.div`
  display: flex;
  gap: 50px;

`;
const Logo = styled.img`
  padding-left: 30px;
  padding-top: 5px;
  height: 65px;
`;
const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none ;
  padding-top: 30px;

  @media only screen and (max-width: 768px){
    display: none;
  }
  `;
const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.img`
 width :20 ;
 cursor: pointer; 
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

 
const Navbar = () => {

  const[show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100){
        handleShow(true);
      } else handleShow(false);
    });
    return ()=>{
      window.removeEventListener("scroll",null);
    };
  },[]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section>
        <div className={`nav ${show && "nav__black"}`}>
    <Container>
        <Links>
        <Logo src="./img/heySumit.png"/>
          <List>
            <ListItem onClick={() => scrollToSection('heroSection')}>Home</ListItem>
            <ListItem onClick={() => scrollToSection('whoSection')}>Studio</ListItem>
            <ListItem onClick={() => scrollToSection('worksSection')}>Works</ListItem>
            <ListItem onClick={() => scrollToSection('contactSection')}>Contact</ListItem>
          </List>
        </Links>
        <Icons>
            {/* <Icon src="./img/search.png"></Icon> */}
            {/* <Button>
              Hire Now
            </Button> */}
        </Icons>
         </Container>
         </div>
    </Section>
  )
}

export default Navbar 
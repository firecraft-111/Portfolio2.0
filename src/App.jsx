import styled from "styled-components"
import Hero from "./Component/Hero"
import Who from "./Component/Who"  
import Works from "./Component/Works"
import Contact from "./Component/Contact"

const Container = styled.div`
  padding: 7px;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url('./img/bg.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &::-webkit-scrollbar{
     display: none;
  }
`;


function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      </Container>
  )
}

export default App

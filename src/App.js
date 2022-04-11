// react
import React from 'react';
// style
import './App.css';
import styled from 'styled-components';
// components
import Toggle from './components/Toggle';

const Container = styled.div`
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`
const RenderContainer = styled.div `
  position: relative;
  width: 90%;
  height: 400px;
  margin: 20px 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(105, 105, 105, 0.2);
`
const Title = styled.p `
  position: absolute;
  bottom: 10px;
  right: 10px;
  margin: 0;
  font-size: 1.5em;
  font-weight: 700;
`

function App() {
  const components = [
    { name: 'Toggle', element: <Toggle /> , },
  ];
  return (
    <> 
    {components.map((item, idx) => ( 
       <Container key = { idx }>
         <RenderContainer>
         <Title> { item.name } </Title> 
         { item.element } 
         </RenderContainer> 
       </Container>    
     ))} 
    </>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';

const Container = styled.footer `
  box-sizing: border-box;
  width: 100%;
  padding: 30px 50px; 
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff77;
  font-size: 10px;
`;

const Span = styled.span`
  color: #EFCE69;
`;
const Footer = () => {
   return (
     <Container>
        <p>created in <Span>React</Span> by Paulina Lubasińska</p>        
     </Container>
   );
 }
 
 export default Footer;
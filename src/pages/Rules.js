import React from 'react';
import styled from 'styled-components';
import Img from '../components/Img';

import lizard from '../images/Lizard.png';
import spock from '../images/Spock.png';
import scissors from '../images/Scissors.png';
import paper from '../images/Paper.png';
import rock from '../images/Rock.png';

const Container = styled.main `
   box-sizing: border-box;
   font-family: "Roboto", sans-serif;
   color: white;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   cursor: default;
`;

const Rule = styled.p `
font-size: 24  px;
   padding-bottom: 10px;
   letter-spacing: 1px;
   display: flex;
   justify-content: center;
   align-items: center;
`;



const Rules = () => {
   return (
      <Container>
         <Rule>
            1. <Img src={scissors} alt="Scissors" size={'50px'} />
            Scissors cuts Paper 
            <Img src={paper} alt="Paper" size={'50px'} />
         </Rule>
         <Rule>
            2. <Img src={paper} alt="Paper" size={'50px'} />
            Paper covers Rock
            <Img src={rock} alt="Rock" size={'50px'} />
         </Rule>
         <Rule>
            3. <Img src={rock} alt="Rock" size={'50px'} />
            Rock crushes Lizard
            <Img src={lizard} alt="Lizard" size={'50px'} />
         </Rule>
         <Rule>
            4. <Img src={lizard} alt="Lizard" size={'50px'} />
            Lizard poisons Spock 
            <Img src={spock} alt="Spock" size={'50px'} />
         </Rule>
         <Rule>
            5. <Img src={spock} alt="Spock" size={'50px'} />
            Spock smashes Scissors
            <Img src={scissors} alt="Scissors" size={'50px'} />
         </Rule>
         <Rule>
            6. <Img src={scissors} alt="Scissors"size={'50px'}  />
            Scissors decapitates Lizard
            <Img src={lizard} alt="Lizard" size={'50px'} />
         </Rule>
         <Rule>
            7. <Img src={lizard} alt="Lizard" size={'50px'} />
            Lizard eats Paper
            <Img src={paper} alt="Paper" size={'50px'} />
         </Rule>
         <Rule>
            8. <Img src={paper} alt="Paper" size={'50px'} />
            Paper disproves Spock
            <Img src={spock} alt="Spock" size={'50px'} />
         </Rule>
         <Rule>
            9. <Img src={spock} alt="Spock" size={'50px'} />
            Spock vaporizes Rock
            <Img src={rock} alt="Rock" size={'50px'} />
         </Rule>
         <Rule>
            10. <Img src={rock} alt="Rock" size={'50px'} />
            Rock crushes Scissors
            <Img src={scissors} alt="Scissors" size={'50px'} />
         </Rule>
      </Container>
   );
 }
 
 export default Rules;
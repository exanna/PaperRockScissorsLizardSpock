/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';
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
`;

const Game = styled.div `
  padding: 40px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  `;
  
const Result = styled.div `
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 10px;
  }
  
  h1 {
    margin-bottom: 10px;
  }
`;

const Button = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  height: 100px;
  width: 100px;
  border-radius: 1000px;
  cursor: pointer;
  transition: transform .5s;

  &:hover {
    transform: rotate(90deg);
    
  }
`;

const Home = () => {

  const [ result, setResult ] = useState('');
  const [ numberOfComputerWins, computerWinCounter ] = useState(0);
  const [ numberOfHumanWins, humanWinCounter ] = useState(0);
  const [ numberOfDraw, drawCounter ] = useState(0);
  const [ userChoice, setUserChoice ] = useState('');
  const [ computerChoice, setComputerChoice ] = useState('');


  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  }
    
  const generateComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }
  
  useEffect (() => {
    {
      switch(userChoice + computerChoice) {
        case 'scissorspaper':
        case 'paperrock':
        case 'rocklizard':
        case 'lizardspock':
        case 'spockscissors':
        case 'scissorslizard':
        case 'lizardpaper':
        case 'paperspock':
        case 'spockrock':
        case 'rockscissors':
          setResult('YOU WIN!');
          humanWinCounter(numberOfHumanWins + 1);
          break;
        case 'paperscissors':
        case 'rockpaper':
        case 'lizardrock':
        case 'spocklizard':
        case 'scissorsspock':
        case 'lizardscissors':
        case 'paperlizard':
        case 'spockpaper':
        case 'rockspock':
        case 'scissorsrock':
          setResult('COMPUTER WIN!');
          computerWinCounter(numberOfComputerWins + 1);
          break;
        case 'lizardlizard':
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
        case 'spockspock':
          setResult('IT\'S A DRAW');
          drawCounter(numberOfDraw + 1);
          break;
        default: console.log('error')
          break;
      }
    }
  }, [userChoice, computerChoice])
    return (
     <Container>
       <Game>
        <Button onClick={ () => handleClick('rock') }>
          <Img src={rock} alt="Rock" size={'100px'} />
        </Button>
        <Button onClick={ () => handleClick('paper') }>
          <Img src={paper} alt="Paper" size={'100px'} />
        </Button>
        <Button onClick={ () => handleClick('scissors') }>
          <Img src={scissors} alt="Scissors" size={'100px'} />
        </Button>
        <Button onClick={ () => handleClick('lizard') }>
          <Img src={lizard} alt="Lizard" size={'100px'} />
        </Button>
        <Button onClick={ () => handleClick('spock') }>
          <Img src={spock} alt="Spock" size={'100px'} />
        </Button>     
       </Game>
       <Result>
        <h1>User choice: {userChoice}</h1>
        <h1>Computer choice: {computerChoice}</h1>
        <h1>Result: {result}</h1>
        <p>Draw: {numberOfDraw}</p>
        <p>PC: {numberOfComputerWins}</p>
        <p>Human: {numberOfHumanWins}</p>
      </Result>
     </Container>
   );
 };

 
export default Home;
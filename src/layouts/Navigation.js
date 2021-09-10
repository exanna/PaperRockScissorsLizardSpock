import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
   box-sizing: border-box;
   background-color: #29323C;
   padding: 30px 50px;
   // width: 100%;
   font-family: 'Roboto', sans-serif;

   ul {
      display: flex;
   }

   li {
      padding-right: 40px;
   }

   a {
      color: white;
      text-decoration: none;
      transition: color .3s;
   }
   
   .is-active {
      color: #EFCE69;
   }

   a:hover {
      color: #2E8DC5;
   }
`;

const Navigation = () => {
   return (
      <Nav>
        <ul>
          <li>
            <NavLink activeClassName="is-active" exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="is-active" to="/rules">Rules</NavLink>
          </li>          
        </ul>
      </Nav>
   );
 }
 
 export default Navigation;
 
 
 
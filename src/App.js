import React from 'react';
import reset from 'styled-reset';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Navigation from './layouts/Navigation';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import Rules from './pages/Rules';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const Site = styled.div `
  box-sizing: border-box;
  background-image: linear-gradient(to right, #29323C, #485563);
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: default;
`;

const Content = styled.div `
  box-sizing: border-box;
  width: 100%;
  padding: 30px 50px; 
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Site className="App">
        <Router>
          <Navigation />
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/rules" component={Rules} />
            </Switch>
          </Content>
          <Footer />
        </Router> 
      </Site>
    </React.Fragment>
  );
}

export default App;



import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import ButtonsShowcase from './showcases/Buttons';
import ToastsShowcase from './showcases/Toasts';


import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';

const Home = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

const App: React.FC = () => {
  return (

    <MemoryRouter>
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">
            Welcome To React-Bootstrap TypeScript Example
          </h1>
          <h2>Buttons</h2>
          <ButtonsShowcase />
          <h2>Toasts</h2>
          <ToastsShowcase />
          <h2>
            Current Page is{' '}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </h2>
          <h2>
            Navigate to{' '}
            <ButtonToolbar className="custom-btn-toolbar">
              <LinkContainer to="/">
                <Button>Home</Button>
              </LinkContainer>
              <LinkContainer to="/about">
                <Button>About</Button>
              </LinkContainer>
              <LinkContainer to="/users">
                <Button>Users</Button>
              </LinkContainer>
            </ButtonToolbar>
          </h2>
        </Jumbotron>
      </Container>
    </MemoryRouter>
  );
};

export default App;

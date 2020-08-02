import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Jumbotron, Container, Button, ButtonToolbar, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

import { ReactBootstrapExample } from './showcases';

import './App.css';

const Home = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <Container className="p-3">
        <Jumbotron>
          <ReactBootstrapExample />
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
              <Link to="/">
                <Button>Home</Button>
              </Link>
              <Link to="/about">
                <Button>About</Button>
              </Link>
              <Link to="/users">
                <Button>Users</Button>
              </Link>
            </ButtonToolbar>
          </h2>
        </Jumbotron>
      </Container>
    </BrowserRouter>
  );
};

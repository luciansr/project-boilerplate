import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';
import { Jumbotron, Container, Button, ButtonToolbar } from 'react-bootstrap';
import Menu from './Menu';

import { ReactBootstrapExample } from './showcases';

import './App.css';





export default function App(): ReactElement {


  const Home = () => <span>Home</span>;

  const About = () => <span>About</span>;
  
  const Users = () => <span>Users</span>;
  const UserId = () => {
    const {userId} = useParams();
    return (<span>User {userId}</span>);}


  return (
    <BrowserRouter>
      <Menu></Menu>

      <Container className="p-3">
        <Jumbotron>
          <ReactBootstrapExample />
          <h2>
            Current Page is{' '}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/users">
                <Users />
              </Route>
              <Route path="/users/:userId">
                <UserId />
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

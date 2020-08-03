import React, { ReactElement } from 'react';

import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

// import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export default function Menu(): ReactElement {
    return (<>
        <Navbar bg="dark" variant="dark">
            {/* <Link to="/"> */}
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
            {/* </Link> */}
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/users/user-1">User 1</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    </>);
}
import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,
Nav,
NavbarBrand,
Container,
NavItem
} from 'reactstrap';
const Heading = () => {
  return (
    <Navbar color='dark' dark>
<Container>
    <NavbarBrand href='/'>My To Do List </NavbarBrand>
    <Nav>
        <NavItem>
            <Link className="btn btn-primary" to="/add">Add Task</Link>
        </NavItem>
    </Nav>
</Container>
    </Navbar>
  )
}

export default Heading

import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  let history = useHistory();

  return (
    <Navbar
      collapseOnSelect
      className='opacity-75'
      bg='dark'
      variant='dark'
      sticky='top'
      expand='lg'
    >
      <Container>
        <Navbar.Brand href='#home'>Genius Mechanics</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/home'>
              Home
            </Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
            <NavDropdown
              menuVariant='dark'
              title='Dropdown'
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {user.email || user.displayName ? (
            <Nav>
              <Nav.Link>{user.displayName}</Nav.Link>
              <button onClick={() => logOut(() => history.push('/'))}>
                LogOut
              </button>
            </Nav>
          ) : (
            <Nav>
              <Link to='login'>
                <button>Login</button>
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

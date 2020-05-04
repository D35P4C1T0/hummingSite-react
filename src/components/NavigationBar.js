import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  .navbar {
    background-color: #002b36;
  }

  a,
  .navbar-brand,
  .navbar-collapse .navbar-nav .nav-link {
    color: white;

    &:hover {
      color: teal;
    }
  }
`

export const NavigationBar = () => (
  <Styles>
    <Navbar expand='lg' className='bg-dark'>
      <Navbar.Brand href='/'>HummingSite</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Item>
            <Nav.Link>
              <Link to='/home'>Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to='/contact'>Contacts</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to='/writer'>Writer</Link>
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link>
              <Link to='/about'>About</Link>
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

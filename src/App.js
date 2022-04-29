import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useAuth0 } from "@auth0/auth0-react";

import { BrowserRouter as Router, Link } from 'react-router-dom'

import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Access from './components/Access'
import Profile from './components/Profile'

function App() {
  const { isLoading } = useAuth0();

  if(isLoading) return <div>Page Loading...</div>

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-student'} className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-student'} className="nav-link">
                    Create Guest
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/student-list'} className="nav-link">
                    Guest List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <LoginButton />
        <LogoutButton />
        <Profile />
        <Access />

      </Router>
    </div>
  )
  
}
export default App

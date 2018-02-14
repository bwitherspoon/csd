import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Path from './Path'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="m-2" src='/images/logo.svg' alt='Composites Recycling' width='64px' height='64px'/>
      </header>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Path />
      </Container>
    )
  }
}

export default App;

import React, { Component } from 'react'
import { Container } from 'reactstrap'
import ScrapForm from './components/ScrapForm'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src='/images/logo.svg' alt='Composites Recycling' width='64px' height='64px'/>
        <hr />
      </header>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <ScrapForm />
      </Container>
    )
  }
}

export default App;

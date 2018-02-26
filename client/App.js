import React, { Component } from 'react'
import { Container, Alert } from 'reactstrap'
import PageHeader from './components/PageHeader'
import CreatePage from './components/CreatePage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'create'
    }
  }

  handleNavigate(page) {
    // TODO
  }

  render() {
    return (
      <Container>
        <PageHeader onNavigate={this.handleNavigate.bind(this)} />
        <CreatePage />
      </Container>
    )
  }
}

export default App;

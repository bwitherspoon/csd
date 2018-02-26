import React, { Component } from 'react'
import { Container, Alert } from 'reactstrap'
import PageHeader from './components/PageHeader'
import HomePage from './components/HomePage'
import CreatePage from './components/CreatePage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'home'
    }
  }

  handleNavigate(page) {
    this.setState({ page: page })
  }

  render() {
    let page
    switch (this.state.page) {
      case 'home':
        page = <HomePage />
        break
      case 'create':
        page = <CreatePage />
        break
    }
    return (
      <Container>
        <PageHeader page={this.state.page}
                    onNavigate={this.handleNavigate.bind(this)} />
        {page}
      </Container>
    )
  }
}

export default App;

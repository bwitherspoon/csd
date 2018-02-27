import React, { Component } from 'react'
import { Container, Alert } from 'reactstrap'
import PageHeader from './components/PageHeader'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import HomePage from './components/HomePage'
import ModulesPage from './components/ModulesPage'
import CreatePage from './components/CreatePage'
import SearchPage from './components/SearchPage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'home'
    }
    this.handleNavigate = this.handleNavigate.bind(this)
  }

  handleNavigate(page) {
    this.setState({ page: page })
  }

  render() {
    let page
    switch (this.state.page) {
      case 'about':
        page = <AboutPage onNavigate={this.handleNavigate} />
        break
      case 'contact':
        page = <ContactPage />
        break
      case 'home':
        page = <HomePage onNavigate={this.handleNavigate} />
        break
      case 'learn':
        page = <ModulesPage />
        break
      case 'create':
        page = <CreatePage />
        break
      case 'search':
        page = <SearchPage />
        break
    }
    return (
      <Container>
        <PageHeader page={this.state.page}
                    onNavigate={this.handleNavigate} />
        {page}
      </Container>
    )
  }
}

export default App;

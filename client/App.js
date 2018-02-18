import React, { Component } from 'react'
import { Container } from 'reactstrap'
import ScrapForm from './components/ScrapForm'
import ScrapView from './components/ScrapView'

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
  constructor(props) {
    super(props)
    this.state = {
      view: false,
      data: ScrapForm.defaultState,
    }
    this.handleView = this.handleView.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleView(data) {
    this.setState({ view: true, data: data })
  }

  handleEdit(data) {
    this.setState({ view: false })
  }

  handleSave(data) {
    // TODO
  }

  render() {
    let body = null
    if (this.state.view) {
      body = <ScrapView onEdit={this.handleEdit} onSave={this.onSave}
                        {...this.state.data} />
    } else {
      body = <ScrapForm state={this.state.data} onView={this.handleView} />
    }
    return (
      <Container>
        <Header />
        {body}
      </Container>
    )
  }
}

export default App;

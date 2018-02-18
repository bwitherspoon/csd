import React, { Component } from 'react'
import { Container, Alert } from 'reactstrap'
import ScrapForm from './components/ScrapForm'
import ScrapView from './components/ScrapView'

class Header extends Component {
  render() {
    return (
      <header className="p-2">
        <img width='64px' height='64px' src='/images/logo.svg' alt='Composites Recycling' />
      </header>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: false,
      status: '',
      data: ScrapForm.defaultState,
    }
    this.handleView = this.handleView.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleView(data) {
    this.setState({
      view: true,
      status: '',
      data: data
    })
  }

  handleEdit(data) {
    this.setState({
      view: false,
      status: ''
    })
  }

  handleSave(data) {
    fetch('/scrap', {
      method: 'POST',
      body: JSON.stringify(this.state.data),
      headers: new Headers({
        'Content-Type': 'application/json',
        'credentials': 'same-origin',
      })
    })
    .then(res => {
      this.setState({ status: res.statusText })
    })
    .catch(err => console.error('Error:', err))
  }

  render() {
    let body = null
    if (this.state.view) {
      body = <ScrapView onEdit={this.handleEdit} onSave={this.handleSave}
                        {...this.state.data} />
    } else {
      body = <ScrapForm state={this.state.data} onView={this.handleView} />
    }
    const color = this.state.status == 'OK' ? 'success' : 'danger';
    return (
      <Container>
        <Header />
        <Alert className="m-4" color={color} isOpen={this.state.status != ''}>
          {this.state.status}
        </Alert>
        {body}
      </Container>
    )
  }
}

export default App;

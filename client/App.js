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
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleCreate(data) {
    this.setState({
      view: true,
      status: '',
      data: data
    })
  }

  handleCancel(data) {
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
    .catch(err => {
      this.setState({ status: err.message })
    })
  }

  render() {
    let body = null
    if (this.state.view) {
      body = <ScrapView onCancel={this.handleCancel} onSave={this.handleSave}
                        {...this.state.data} />
    } else {
      body = <ScrapForm state={this.state.data} onCreate={this.handleCreate} />
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

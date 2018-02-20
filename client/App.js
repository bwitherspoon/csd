import React, { Component } from 'react'
import { Container, Alert } from 'reactstrap'
import ScrapDocument from './components/ScrapDocument'
import ScrapForm from './components/ScrapForm'

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
      data: {...ScrapDocument.defaults},
    }
  }

  handleCreate(data) {
    this.setState({
      view: true,
      status: '',
      data: data
    })
  }

  handleCancel() {
    this.setState({
      view: false,
      status: ''
    })
  }

  handleSave() {
    fetch('/scrap', {
      method: 'POST',
      body: JSON.stringify(this.state.data),
      credentials: 'same-origin',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      redirect: 'error',
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
      body = <ScrapDocument data={this.state.data}
                            onCancel={this.handleCancel.bind(this)}
                            onSave={this.handleSave.bind(this)} />
    } else {
      body = <ScrapForm data={this.state.data}
                        onCreate={this.handleCreate.bind(this)} />
    }
    const color = this.state.status == 'OK' ? 'success' : 'danger';
    return (
      <Container>
        <Header />
        {this.state.status != '' &&
          <Alert className="m-4" color={color} isOpen={this.state.status != ''}>
            {this.state.status}
          </Alert>
        }
        {body}
      </Container>
    )
  }
}

export default App;

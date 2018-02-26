import React, { Component } from 'react'
import { Container, Alert } from 'reactstrap'
import Header from './components/Header'
import ScrapDocument from './components/ScrapDocument'
import ScrapForm from './components/ScrapForm'

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

  handleNavigate(page) {
    // TODO
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
    let alert = null
    if (this.state.status) {
      const color = this.state.status == 'OK' ? 'success' : 'danger';
      alert = (
        <Alert className="m-4" color={color} isOpen={this.state.status != ''}>
          {this.state.status}
        </Alert>
      )
    }
    return (
      <Container>
        <Header onNavigate={this.handleNavigate.bind(this)} />
        {alert}
        {body}
      </Container>
    )
  }
}

export default App;

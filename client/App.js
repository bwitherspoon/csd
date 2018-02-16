import React, { Component } from 'react'
import { Container } from 'reactstrap'
import ScrapPath from './components/ScrapPath'
import ScrapForm from './components/ScrapForm'

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
  constructor(props) {
    super(props)

    this.state = { path: '' }

    this.handleCreate = this.handleCreate.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handlePreview = this.handlePreview.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleCreate(path) {
    this.setState({ path: path })
  }

  handleCancel() {
    this.setState({ path: '' })
  }

  handlePreview() {
    // TODO
  }

  handleSave() {
    // TODO
  }


  render() {
    return (
      <Container>
        <Header />
        <p className="text-center text-muted">{this.state.path.replace(/,/g, '/')}</p>
        {this.state.path == '' &&
          <ScrapPath onCreate={this.handleCreate} />
        }
        {this.state.path != '' &&
            <ScrapForm onCancel={this.handleCancel} onPreview={this.handlePreview} onSave={this.handleSave} />
        }
      </Container>
    )
  }
}

export default App;

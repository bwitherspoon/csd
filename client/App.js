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
    this.handleInsert = this.handleInsert.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleCreate(path) {
    this.setState({ path: path })
  }

  handleInsert(path) {
    console.log(path)
  }

  handleReset() {
    this.setState({ path: '' })
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
            <ScrapForm onReset={this.handleReset} onInsert={this.handleInsert} />
        }
      </Container>
    )
  }
}

export default App;

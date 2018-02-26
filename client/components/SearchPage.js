import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import PathSelect from './PathSelect'

class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resin: undefined,
      reinforcement: undefined,
      form: undefined,
    }
    this.handleReset = this.handleReset.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleResin = this.handleResin.bind(this)
    this.handleReinforcement = this.handleReinforcement.bind(this)
    this.handleForm = this.handleForm.bind(this)
  }

  handleReset() {
    this.setState({
      resin: undefined,
      reinforcement: undefined,
      form: undefined,
    })
  }

  handleSearch() {
    fetch('/scrap/search', {
      method: 'POST',
      body: JSON.stringify(this.state),
      credentials: 'same-origin',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      redirect: 'error',
    })
      .then(res => res.json())
      .then(
        res => console.log(res),
        err => console.error(err)
      )
  }

  handleResin(resin) {
    this.setState({ resin: resin })
  }

  handleReinforcement(reinforcement) {
    this.setState({ reinforcement: reinforcement })
  }

  handleForm(form) {
    this.setState({ form: form })
  }

  render() {
    return (
      <div>
        <PathSelect onResin={this.handleResin}
                    onReinforcement={this.handleReinforcement}
                    onForm={this.handleForm}
                    {...this.state} />
        {(this.state.resin || this.state.reinforcement || this.state.form) &&
          <Row>
            <Col>
              <Button className="m-2" outline size="lg" block
                      onClick={this.handleReset}>
                Reset
              </Button>
            </Col>
            <Col>
              <Button className="m-2" size="lg" block
                      onClick={this.handleSearch}>
                Search
              </Button>
            </Col>
          </Row>
        }
      </div>
    )
  }
}

export default SearchPage

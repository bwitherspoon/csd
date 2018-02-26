import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import ScrapDocument from './ScrapDocument'
import PathSelect from './PathSelect'

class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resin: undefined,
      reinforcement: undefined,
      form: undefined,
      result: undefined,
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
        res => this.setState({ result: res }),
        err => console.error(err)
      )
  }

  handleCancel() {
    // TODO
  }

  handleSave() {
    // TODO
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
    let content
    if (this.state.result)
      content = this.state.result.map((doc, idx) =>
        <ScrapDocument key={idx} {...doc} />
      )
    else if (this.state.resin || this.state.reinforcement || this.state.form) {
      content =
        <div>
          <PathSelect onResin={this.handleResin}
                      onReinforcement={this.handleReinforcement}
                      onForm={this.handleForm}
                      {...this.state} />
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
        </div>
      } else {
        content =
          <PathSelect onResin={this.handleResin}
                      onReinforcement={this.handleReinforcement}
                      onForm={this.handleForm}
                      {...this.state} />
      }
    return content
  }
}

export default SearchPage

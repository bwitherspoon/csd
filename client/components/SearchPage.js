import React, { Component } from 'react'
import { Row, Col, Button, CardDeck, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
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
        <div>
          <ScrapDocument key={idx} {...doc} />
          <Row className="justify-content-center">
            <h3 className="m-4">Users Also Viewed</h3>
            <CardDeck className="m-4">
              <Card>
                <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Preview image" />
                <CardBody>
                  <CardTitle>
                    /resin/thermoset/epoxy
                  </CardTitle>
                  <CardText>
                    Epoxy resin
                  </CardText>
                </CardBody>
              </Card>
              <Card>
                <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Preview image" />
                <CardBody>
                  <CardTitle>
                    /reinforcement/fiber/aramid
                  </CardTitle>
                  <CardText>
                    Aramid Fiber
                  </CardText>
                </CardBody>
              </Card>
              <Card>
                <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Preview image" />
                <CardBody>
                  <CardTitle>
                    /resin/thermoplastic/abs
                  </CardTitle>
                  <CardText>
                    Acrylonitrile butadiene styrene (ABS)
                  </CardText>
                </CardBody>
              </Card>
            </CardDeck>
          </Row>
          <Row>
            <Col>
              <Button className="m-4" color="primary" size="lg" block>
                Submit Query
              </Button>
            </Col>
            <Col>
              <Button className="m-4" color="primary" size="lg" block>
                Save To Folder
              </Button>
            </Col>
          </Row>
          <hr />
        </div>
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

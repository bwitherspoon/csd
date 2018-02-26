import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import Remarkable from 'remarkable'

class ScrapDocument extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resin: undefined,
      reinforcement: undefined,
      form: undefined,
    }
    this.handleCancel = props.onCancel
    this.handleSave = props.onSave
    this.markdown = new Remarkable()
  }

  componentDidMount() {
    const paths = {
      resin: this.props.data.resin,
      reinforcement: this.props.data.reinforcement,
      form: this.props.data.form,
    }
    for (const name in paths) {
      fetch('/path/' + paths[name])
        .then(res => res.json())
        .then(
          res => {
            if (res.length != 0) {
              const state = {}
              state[name] = res[0].label + (res[0].short ? ' (' + res[0].short + ')' : '')
              this.setState(state)
            }
          },
          err => console.error(err)
        )
    }
  }

  render() {
    const notes = this.markdown.render(this.props.data.research_notes)
    return (
      <div className="p-5 m-4 border">
        <Row>
          <Col>
            <p>
              <strong>Resin: </strong>
              {this.state.resin}
            </p>
            <p>
              <strong>Reinforcement: </strong>
              {this.state.reinforcement}
            </p>
            <p>
              <strong>Form: </strong>
              {this.state.form}
            </p>
            <p>
              <strong>Origin Company: </strong>
              {this.props.data.origin_company}
            </p>
            <p>
              <strong>Original Material: </strong>
              {this.props.data.original_material}
            </p>
            <p>
              <strong>Manufacturing Method: </strong>
              <a href="#">{this.props.data.manufacturing_method}</a>
            </p>
            <p>
              <strong>Current Location: </strong>
              {this.props.data.current_location}
            </p>
            <p>
              <strong>Quantity: </strong>
              {this.props.data.quantity} kg
            </p>
            <p>
              <strong>Research Notes:</strong>
            </p>
            <div className="m-4" dangerouslySetInnerHTML={{ __html: notes }}/>
          </Col>
          <Col sm="auto">
            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Scrap image" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button outline color="secondary" size="lg" block
                    onClick={this.handleCancel}>
              Cancel
            </Button>
          </Col>
          <Col>
            <Button color="primary" size="lg" block
                    onClick={this.handleSave}>
              Save
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ScrapDocument

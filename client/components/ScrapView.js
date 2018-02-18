import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import Remarkable from 'remarkable'

class ScrapView extends Component {
  constructor(props) {
    super(props)
    this.handleEdit = props.onEdit
    this.handleSave = props.onSave
  }
  render() {
    const resin = this.props.resin ? this.props.resin.replace(/,/g, '/') : ''
    const reinforcement = this.props.reinforcement ? this.props.reinforcement.replace(/,/g, '/') : ''
    const markdown = new Remarkable()
    const notes = markdown.render(this.props.research_notes)
    return (
      <div className="p-5 m-4 border">
        <Row>
          <Col>
            <p><strong>Resin: </strong>{resin}</p>
            <p><strong>Reinforcement: </strong>{reinforcement}</p>
            <p><strong>Form: </strong>{this.props.form}</p>
            <p><strong>Origin Company: </strong>{this.props.origin_company}</p>
            <p><strong>Original Material: </strong>{this.props.original_material}</p>
            <p><strong>Manufacturing Method: </strong>{this.props.manufacturing_method}</p>
            <p><strong>Current Location: </strong>{this.props.current_location}</p>
            <p><strong>Quantity: </strong>{this.props.quantity} kg</p>
            <p><strong>Research Notes:</strong></p>
            <div className="m-4 notes" dangerouslySetInnerHTML={{ __html: notes }}/>
          </Col>
          <Col sm="auto">
            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Scrap image" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button outline color="secondary" size="lg" block
                    onClick={this.handleEdit}>
              Edit
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

export default ScrapView

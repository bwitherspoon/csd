import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'

class ScrapView extends Component {
  constructor(props) {
    super(props)
    this.handleEdit = props.onEdit
    this.handleSave = props.onSave
  }
  render() {
    const resin = this.props.resin ? this.props.resin.replace(/,/g, '/') : ''
    const reinforcement = this.props.reinforcement ? this.props.reinforcement.replace(/,/g, '/') : ''
    return (
      <div>
        <h5 className="text-center text-muted">{(resin + ' ' + reinforcement).trim()}</h5>
        <div className="p-4 border">
          <Row>
            <Col sm={{size: 8, offset: 2}}>
              <p><strong>Form: </strong>{this.props.form}</p>
              <p><strong>Origin Company: </strong>{this.props.origin_company}</p>
              <p><strong>Original Material: </strong>{this.props.original_material}</p>
              <p><strong>Manufacturing Method: </strong>{this.props.manufacturing_method}</p>
              <p><strong>Current Location: </strong>{this.props.current_location}</p>
              <p><strong>Quantity: </strong>{this.props.quantity}</p>
              <p><strong>Research Notes: </strong></p>
              <div className="notes">{/*TODO*/}</div>
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
      </div>
    )
  }
}

export default ScrapView

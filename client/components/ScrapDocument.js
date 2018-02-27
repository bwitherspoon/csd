import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Remarkable from 'remarkable'

class ScrapDocument extends Component {
  constructor(props) {
    super(props)
    this.markdown = new Remarkable()
  }

  render() {
    const notes = this.markdown.render(this.props.research_notes)
    return (
      <div className="p-5 m-4 border">
        <Row>
          <Col>
            <p>
              <strong>Resin: </strong>
              {this.props.resin}
            </p>
            <p>
              <strong>Reinforcement: </strong>
              {this.props.reinforcement}
            </p>
            <p>
              <strong>Form: </strong>
              {this.props.form}
            </p>
            <p>
              <strong>Origin Company: </strong>
              {this.props.origin_company}
            </p>
            <p>
              <strong>Original Material: </strong>
              {this.props.original_material}
            </p>
            <p>
              <strong>Manufacturing Method: </strong>
              <a href="#">{this.props.manufacturing_method}</a>
            </p>
            <p>
              <strong>Current Location: </strong>
              {this.props.current_location}
            </p>
            <p>
              <strong>Quantity: </strong>
              {this.props.quantity} kg
            </p>
            <p>
              <strong>References: </strong>
              {this.props.references}
            </p>
            <p>
              <strong>Research Notes:</strong>
            </p>
            <div className="m-4" dangerouslySetInnerHTML={{ __html: notes }}/>
          </Col>
          <Col sm="3">
            {this.props.images && this.props.images.map((image, index) =>
              <figure key={image}>
                <img className="mb-2 img-fluid" src={'/image/' + image} alt="Image" />
                <figcaption>{this.props.captions && index < this.props.captions.length && this.props.captions[index]}</figcaption>
              </figure>
            )}
          </Col>
        </Row>
      </div>
    )
  }
}

export default ScrapDocument

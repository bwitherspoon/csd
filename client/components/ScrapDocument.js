import React, { Component } from 'react'
import { Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap'
import Remarkable from 'remarkable'

class ScrapDocument extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.markdown = new Remarkable()
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleClick(event) {
    this.toggle()
    event.preventDefault()
  }

  render() {
    const notes = this.markdown.render(this.props.research_notes)
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Pultrusion</ModalHeader>
          <ModalBody>
            <p>
              Pultrusion is a continuous process for manufacture of composite materials with
              constant cross-section and continuous lengths of reinforcement such as fibers.
              The term combines “pull” and “extrusion”. As opposed to extrusion, which pushes
              the material, pultrusion works by pulling the material. The resin and fiber are
              pulled through a heated steel forming die on a continuous line. As the
              reinforcements are saturated with the resin mixture ("wet-out") in the resin
              bath and pulled through the die, the gelation, or hardening, of the resin is
              initiated by the heat from the die and a rigid, cured profile is formed that
              corresponds to the shape of the die. Pultrusion machines vary in design but a
              basic concept is show in the schematic below.
            </p>
            <figure>
              <img className="img-fluid" src="http://www.nuplex.com/composites/getmedia/e4949aba-3dcb-4954-80fc-41fba50bc02b/Process_pultrusion?width=540&height=174" alt="Pultrusion image" />
              <figcaption>
                Sources:
                <a href="http://www.nuplex.com/composites/processes/pultrusion">Nuplex</a>,
                <a href="http://www.strongwell.com/about/the-pultrusion-process/">Strongwell</a>
              </figcaption>
            </figure>
            <p><b>See <a href="http://cdspooner.com/crtep/Lecture_2-Composite_Manufacturing_Meth_TS_and_TP.pdf">Lecture 2: Composite Manufacturing Methods (TS and TP)</a> for more information.</b></p>
          </ModalBody>
        </Modal>
        <div className="p-5 m-4 border">
          <Row>
            <Col>
              <p>
                <strong>Resin: </strong>
                {this.props.resin && this.props.resin.replace(/,/g, '/')}
              </p>
              <p>
                <strong>Reinforcement: </strong>
                {this.props.reinforcement && this.props.reinforcement.replace(/,/g, '/')}
              </p>
              <p>
                <strong>Form: </strong>
                {this.props.form && this.props.form.replace(/,/g, '/')}
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
                <a href="#" onClick={this.handleClick}>{this.props.manufacturing_method}</a>
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
      </div>
    )
  }
}

export default ScrapDocument

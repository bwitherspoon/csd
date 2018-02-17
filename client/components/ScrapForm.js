import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Button,
         Input, InputGroup, InputGroupAddon } from 'reactstrap'

class ScrapForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      origin_company: '',
      original_material: '',
      manufacturing_method: '',
      current_location: '',
      quantity: 0,
      research_notes: '',
    }

    this.handleCancel = props.onCancel
    this.handlePreview = props.onPreview
    this.handleSave = props.onSave

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    this.setState({
      origin_company: event.target.origin_company.value,
      original_material: event.target.original_material.value,
      manufacturing_method: event.target.manufacturing_method.value,
      current_location: event.target.current_location.value,
      quantity: event.target.quantity.value,
      research_notes: event.target.research_notes.value,
    })
    event.preventDefault()
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Col sm={3}>
            <Label for="origin-company">Origin Company:</Label>
          </Col>
          <Col>
            <Input type="text" name="origin_company" id="origin-company"
                   defaultValue={this.state.origin_company} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3}>
            <Label for="original-material">Original Material:</Label>
          </Col>
          <Col>
            <Input type="text" name="original_material" id="original-material"
                   defaultValue={this.state.original_material} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3}>
            <Label for="manufacturing-method">Manufacturing Method:</Label>
          </Col>
          <Col>
            <Input type="text" name="manufacturing_method" id="manufacturing-method"
                   defaultValue={this.state.manufacturing_method} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3}>
            <Label for="current-location">Current Location:</Label>
          </Col>
          <Col>
            <Input type="text" name="current_location" id="current-location"
                   defaultValue={this.state.current_location} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3}>
            <Label for="quantity">Quantity:</Label>
          </Col>
          <Col>
            <InputGroup>
              <Input type="number" min="0" name="quantity" id="quantity"
                     defaultValue={this.state.quantity} />
              <InputGroupAddon addonType="append">kg</InputGroupAddon>
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3}>
            <Label for="image-file">Image:</Label>
          </Col>
          <Col>
            <Input type="file" name="image-file" id="image-file" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Label for="research-notes">Research Notes:</Label>
            <Input type="textarea" rows="5" name="research_notes" id="research-notes"
                   defaultValue={this.state.research_notes} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Button outline color="secondary" size="lg" block onClick={this.handleCancel}>
              Cancel
            </Button>
          </Col>
          <Col>
            <Button type="submit" color="primary" size="lg" block>
              Preview
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default ScrapForm

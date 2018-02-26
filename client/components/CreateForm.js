import React, { Component } from 'react'
import { Col, Label, Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap'

class CreateForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(event) {
    const data = {}
    for (const name in CreateForm.defaults)
      if (event.target[name] && event.target[name].value)
        data[name] = event.target[name].value
    this.props.onCreate(data)
    event.preventDefault()
  }

  handleReset(event) {
    this.props.onReset()
    event.preventDefault()
  }

  render() {
    return (
      <Form onReset= {this.handleReset} onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Col>
            <FormGroup>
              <Label for="origin-company">Origin Company</Label>
              <Input type="text" name="origin_company" id="origin-company"
                     defaultValue={this.props.origin_company}
                     disabled={this.props.disabled} />
            </FormGroup>
            <FormGroup>
              <Label for="manufacturing-method">Manufacturing Method</Label>
              <Input type="text" name="manufacturing_method" id="manufacturing-method"
                     defaultValue={this.props.manufacturing_method}
                     disabled={this.props.disabled} />
            </FormGroup>
            <FormGroup>
              <Label for="quantity">Quantity</Label>
              <InputGroup>
                <Input type="number" min="0" name="quantity" id="quantity"
                       defaultValue={this.props.quantity}
                       disabled={this.props.disabled} />
                <InputGroupAddon addonType="append">kg</InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="original-material">Original Material</Label>
              <Input type="text" name="original_material" id="original-material"
                     defaultValue={this.props.original_material}
                     disabled={this.props.disabled} />
            </FormGroup>
            <FormGroup>
              <Label for="current-location">Current Location</Label>
              <Input type="text" name="current_location" id="current-location"
                     defaultValue={this.props.current_location}
                     disabled={this.props.disabled} />
            </FormGroup>
            <FormGroup>
              <Label for="references">References</Label>
              <Input type="text" name="references" id="references"
                     defaultValue={this.props.references}
                     disabled={this.props.disabled} />
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Label for="research-notes">Research Notes</Label>
            <Input type="textarea" rows="5" name="research_notes" id="research-notes"
                   defaultValue={this.props.research_notes}
                   disabled={this.props.disabled} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Button outline type="reset" color="secondary" size="lg" block
                    disabled={this.props.disabled}>
              Reset
            </Button>
          </Col>
          <Col>
            <Button type="submit" color="primary" size="lg" block
                    disabled={this.props.disabled}>
              Create
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

CreateForm.defaults = {
  origin_company: undefined,
  original_material: undefined,
  manufacturing_method: undefined,
  current_location: undefined,
  quantity: undefined,
  references: undefined,
  research_notes: undefined,
}

export default CreateForm

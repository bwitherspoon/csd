import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'

class ScrapForm extends Component {
  constructor(props) {
    super(props)
    this.handleCancel = props.onCancel
    this.handlePreview = props.onPreview
    this.handleSave = props.onSave
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
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
            <Input type="text" name="origin" id="origin-company" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3}>
            <Label for="original-material">Original Material:</Label>
          </Col>
          <Col>
            <Input type="text" name="material" id="original-material" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3}>
            <Label for="manufacturing-method">Manufacturing Method:</Label>
          </Col>
          <Col>
            <Input type="text" name="method" id="manufacturing-method" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3}>
            <Label for="current-location">Current Location:</Label>
          </Col>
          <Col>
            <Input type="text" name="location" id="current-location" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3}>
            <Label for="quantity">Quantity:</Label>
          </Col>
          <Col>
            <Input type="number" min="0" name="quantity" id="quantity" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3}>
            <Label for="image-file">Image:</Label>
          </Col>
          <Col>
            <Input type="file" name="image" id="image-file" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Label for="research-notes">Research Notes:</Label>
            <Input type="textarea" rows="4" name="notes" id="research-notes" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Button outline color="secondary" size="lg" block onClick={this.handleCancel}>
              Cancel
            </Button>
          </Col>
          <Col>
            <Button outline color="secondary" size="lg" block onClick={this.handlePreview}>
              Preview
            </Button>
          </Col>
          <Col>
            <Button color="primary" size="lg" block onClick={this.handleSave}>
              Save
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default ScrapForm

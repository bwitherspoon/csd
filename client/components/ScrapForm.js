import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'

class ScrapForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onInsert = props.onInsert
    this.onReset = props.onReset
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Col sm={2}>
            <Label for="origin-company">Origin Company:</Label>
          </Col>
          <Col>
            <Input type="text" name="origin" id="origin-company" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={2}>
            <Label for="original-material">Original Material:</Label>
          </Col>
          <Col>
            <Input type="text" name="material" id="original-material" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={2}>
            <Label for="manufacturing-method">Manufacturing Method:</Label>
          </Col>
          <Col>
            <Input type="text" name="method" id="manufacturing-method" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={2}>
            <Label for="current-location">Current Location:</Label>
          </Col>
          <Col>
            <Input type="text" name="location" id="current-location" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={2}>
            <Label for="quantity">Quantity:</Label>
          </Col>
          <Col>
            <Input type="number" min="0" name="quantity" id="quantity" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={2}>
            <Label for="image-file">Image:</Label>
          </Col>
          <Col>
            <Input type="file" name="image" id="image-file" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Label for="research-notes">Research Notes:</Label>
            <Input type="textarea" name="notes" id="research-notes" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Button outline color="secondary" size="lg" block onClick={this.onReset}>
              Reset
            </Button>
          </Col>
          <Col>
            <Button type="submit" color="secondary" size="lg" block>
              Preview
            </Button>
          </Col>
          <Col>
            <Button type="submit" color="secondary" size="lg" block>
              Insert
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default ScrapForm

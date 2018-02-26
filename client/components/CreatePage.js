import React, { Component } from 'react'
import { Row, Col, Alert, Button } from 'reactstrap'
import ScrapDocument from './ScrapDocument'
import PathSelect from './PathSelect'
import CreateForm from './CreateForm'

class CreatePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      preview: false,
      status: '',
      resin: undefined,
      reinforcement: undefined,
      form: undefined,
      data: {...CreateForm.defaults},
    }
    this.handleCreate = this.handleCreate.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleResin = this.handleResin.bind(this)
    this.handleReinforcement = this.handleReinforcement.bind(this)
    this.handleForm = this.handleForm.bind(this)
  }

  handleCreate(data) {
    this.setState({
      preview: true,
      status: '',
      data: data
    })
  }

  handleReset() {
    this.setState({
      status: '',
      resin: undefined,
      reinforcement: undefined,
      form: undefined,
      data: {...CreateForm.defaults},
    })
  }

  handleSave() {
    const data = {
      resin: this.state.resin,
      reinforcement: this.state.reinforcement,
      form: this.state.form,
      ...this.state.data
    }
    fetch('/scrap/create', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'same-origin',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      redirect: 'error',
    })
    .then(res => {
      this.setState({
        preview: !res.ok,
        status: res.statusText
      })
    })
    .catch(err => {
      this.setState({ status: err.message })
    })
  }

  handleCancel() {
    this.setState({
      preview: false,
      status: '',
    })
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
    let body
    if (this.state.preview) {
      body =
        <div>
          <ScrapDocument onCancel={this.handleCancel}
                         onSave={this.handleSave}
                         resin={this.state.resin}
                         reinforcement={this.state.reinforcement}
                         form={this.state.form}
                         {...this.state.data} />
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
    } else {
      body =
        <div>
          <PathSelect resin={this.state.resin}
                      reinforcement={this.state.reinforcement}
                      form={this.state.form}
                      onResin={this.handleResin}
                      onReinforcement={this.handleReinforcement}
                      onForm={this.handleForm} />
          <hr />
          <CreateForm {...this.state.data}
                      onCreate={this.handleCreate}
                      onReset={this.handleReset}
                      disabled={!this.state.resin && !this.state.reinforcement && !this.state.form} />
        </div>
    }
    let alert
    if (this.state.status) {
      const color = this.state.status == 'OK' ? 'success' : 'danger';
      alert = (
        <Alert className="m-4" color={color} isOpen={this.state.status != ''}>
          {this.state.status}
        </Alert>
      )
    }
    return (
      <div>
        {alert}
        {body}
      </div>
    )
  }
}

export default CreatePage;

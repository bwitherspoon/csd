import React, { Component } from 'react'
import { Row, Col, Button, ListGroup, ListGroupItem } from 'reactstrap'

const PathListItem = props => {
  const re = new RegExp('^' + props.value + (props.value.endsWith(',') ? '' : '$'))
  return (
    <ListGroupItem tag="button" type="button" action
                   onClick={() => props.onClick(props.value)}
                   active={re.test(props.state)}>
      {props.label + (props.short ? ' (' + props.short + ')' : '')}
    </ListGroupItem>
  )
}

const PathList = props => {
  const { items, children, ...other } = props
  return (
    <div className="m-3">
      <h3>{children.toString()}</h3>
      <ListGroup>
        {items.map(item =>
          <PathListItem key={item.value} {...item} {...other} />
        )}
      </ListGroup>
    </div>
  )
}

class PathSelect extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resin: props.resin,
      reinforcement: props.reinforcement,
      form: props.form,
      thermoplastics: [],
      thermosets: [],
      polyamides: [],
      polyethylenes: [],
      fibers: [],
      particulates: [],
      graphites: [],
      glasses: [],
      aramids: [],
      naturals: [],
      forms: [],
    }

    this.handleResinToggle = this.handleResinToggle.bind(this)
    this.handleResin = this.handleResin.bind(this)

    this.handleReinforcementToggle = this.handleReinforcementToggle.bind(this)
    this.handleReinforcement = this.handleReinforcement.bind(this)

    this.handleFormToggle = this.handleFormToggle.bind(this)
    this.handleForm = this.handleForm.bind(this)
  }

  componentDidMount() {
    fetch('/path/resin,thermoplastic,')
      .then(res => res.json())
      .then(
        res => this.setState({ thermoplastics: res }),
        err => console.error(err)
      )
    fetch('/path/resin,thermoset,')
      .then(res => res.json())
      .then(
        res => this.setState({ thermosets: res }),
        err => console.error(err)
      )
    fetch('/path/reinforcement,fiber,')
      .then(res => res.json())
      .then(
        res => this.setState({ fibers: res }),
        err => console.error(err)
      )
    fetch('/path/reinforcement,particulate,')
      .then(res => res.json())
      .then(
        res => this.setState({ particulates: res }),
        err => console.error(err)
      )
    fetch('/path/form,')
      .then(res => res.json())
      .then(
        res => this.setState({ forms: res }),
        err => console.error(err)
      )
  }

  handleResinToggle() {
    const value = /^,.+/.test(this.state.resin) ? undefined : ',resin,'
    this.setState({ resin: value })
  }

  handleResin(value) {
    this.setState({ resin: value })
  }

  handleReinforcementToggle() {
    const value = /^,.+/.test(this.state.reinforcement) ? undefined : ',reinforcement,'
    this.setState({ reinforcement: value })
  }

  handleReinforcement(value) {
    this.setState({ reinforcement: value })
  }

  handleFormToggle() {
    const value = /^,.+/.test(this.state.form) ? undefined : ',form,'
    this.setState({ form: value })
  }

  handleForm(value) {
    this.setState({ form: value })
  }

  render() {
    return (
      <Row>
        <Col>
          <Button className="m-2" color="primary" size="lg" block
                  onClick={this.handleResinToggle}
                  active={/^,resin,?/.test(this.state.resin)}>
            Resin
          </Button>
          {/^,resin,($|thermoplastic,)/.test(this.state.resin) &&
            <PathList state={this.state.resin} items={this.state.thermoplastics}
                      onClick={this.handleResin}>
              Thermoplastic
            </PathList>
          }
          {/^,resin,($|thermoset,)/.test(this.state.resin) &&
            <PathList state={this.state.resin} items={this.state.thermosets}
                      onClick={this.handleResin}>
              Thermoset
            </PathList>
          }
          {/^,resin,thermoplastic,polyamide,/.test(this.state.resin) &&
            <PathList state={this.state.resin} items={this.state.polyamides}
                      onClick={this.handleResin}>
              Polyamide
            </PathList>
          }
          {/^,resin,thermoplastic,polyethylene,/.test(this.state.resin) &&
            <PathList state={this.state.resin} items={this.state.polyethylenes}
                      onClick={this.handleResin}>
              Polyethylene
            </PathList>
          }
        </Col>
        <Col>
          <Button className="m-2" color="primary" size="lg" block
                  onClick={this.handleReinforcementToggle}
                  active={/^,reinforcement,?/.test(this.state.reinforcement)}>
            Reinforcement
          </Button>
          {/^,reinforcement,($|fiber,)/.test(this.state.reinforcement) &&
            <PathList state={this.state.reinforcement} items={this.state.fibers}
                      onClick={this.handleReinforcement}>
              Fiber
            </PathList>
          }
          {/^,reinforcement,($|particulate,)/.test(this.state.reinforcement) &&
            <PathList state={this.state.reinforcement} items={this.state.particulates}
                      onClick={this.handleReinforcement}>
              Particulate
            </PathList>
          }
          {/^,reinforcement,fiber,graphite,/.test(this.state.reinforcement) &&
            <PathList state={this.state.reinforcement} items={this.state.graphites}
                      onClick={this.handleReinforcement}>
              Graphite
            </PathList>
          }
          {/^,reinforcement,fiber,glass,/.test(this.state.reinforcement) &&
            <PathList state={this.state.reinforcement} items={this.state.glasses}
                      onClick={this.handleReinforcement}>
              Glass
            </PathList>
          }
          {/^,reinforcement,fiber,aramid,/.test(this.state.reinforcement) &&
            <PathList state={this.state.reinforcement} items={this.state.aramids}
                      onClick={this.handleReinforcement}>
              Aramids
            </PathList>
          }
          {/^,reinforcement,fiber,natural,/.test(this.state.reinforcement) &&
            <PathList state={this.state.reinforcement} items={this.state.naturals}
                      onClick={this.handleReinforcement}>
              Natural
            </PathList>
          }
        </Col>
        <Col>
          <Button className="m-2" color="primary" size="lg" block
                  onClick={this.handleFormToggle}
                  active={/^,form,?/.test(this.state.form)}>
            Form
          </Button>
          {/^,form,/.test(this.state.form) &&
            <PathList state={this.state.form} items={this.state.forms}
                      onClick={this.handleForm}>
              Form
            </PathList>
          }
        </Col>
      </Row>
    )
  }
}

export default PathSelect

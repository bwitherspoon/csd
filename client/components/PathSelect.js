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

    this.handleReinforcementToggle = this.handleReinforcementToggle.bind(this)

    this.handleFormToggle = this.handleFormToggle.bind(this)
  }

  componentDidMount() {
    const options = {
      thermoplastics: 'resin,thermoplastic,',
      thermosets: 'resin,thermoset,',
      polyamides: 'resin,thermoplastic,polyamide,',
      polyethylenes: 'resin,thermoplastic,polyethylene,',
      fibers: 'reinforcement,fiber,',
      particulates: 'reinforcement,particulate,',
      graphites: 'reinforcement,fiber,graphite,',
      glasses: 'reinforcement,fiber,glass,',
      aramids: 'reinforcement,fiber,aramid,',
      naturals: 'reinforcement,fiber,natural,',
      forms: 'form,',
    }
    for (const name in options) {
      fetch('/path/' + options[name])
        .then(res => res.json())
        .then(
          res => {
            const state = {}
            state[name] = res
            this.setState(state)
          },
          err => console.error(err)
        )
    }
  }

  handleResinToggle() {
    const value = /^,.+/.test(this.props.resin) ? undefined : ',resin,'
    this.props.onResin(value)
  }

  handleReinforcementToggle() {
    const value = /^,.+/.test(this.props.reinforcement) ? undefined : ',reinforcement,'
    this.props.onReinforcement(value)
  }

  handleFormToggle() {
    const value = /^,.+/.test(this.props.form) ? undefined : ',form,'
    this.props.onForm(value)
  }

  render() {
    return (
      <Row>
        <Col>
          <Button className="m-2" color="primary" size="lg" block
                  onClick={this.handleResinToggle}
                  active={/^,resin,?/.test(this.props.resin)}>
            Resin
          </Button>
          {/^,resin,($|thermoplastic,)/.test(this.props.resin) &&
            <PathList state={this.props.resin}
                      items={this.state.thermoplastics}
                      onClick={this.props.onResin}>
              Thermoplastic
            </PathList>
          }
          {/^,resin,($|thermoset,)/.test(this.props.resin) &&
            <PathList state={this.props.resin}
                      items={this.state.thermosets}
                      onClick={this.props.onResin}>
              Thermoset
            </PathList>
          }
          {/^,resin,thermoplastic,polyamide,/.test(this.props.resin) &&
            <PathList state={this.props.resin}
                      items={this.state.polyamides}
                      onClick={this.props.onResin}>
              Polyamide
            </PathList>
          }
          {/^,resin,thermoplastic,polyethylene,/.test(this.props.resin) &&
            <PathList state={this.props.resin}
                      items={this.state.polyethylenes}
                      onClick={this.props.onResin}>
              Polyethylene
            </PathList>
          }
        </Col>
        <Col>
          <Button className="m-2" color="primary" size="lg" block
                  onClick={this.handleReinforcementToggle}
                  active={/^,reinforcement,?/.test(this.props.reinforcement)}>
            Reinforcement
          </Button>
          {/^,reinforcement,($|fiber,)/.test(this.props.reinforcement) &&
            <PathList state={this.props.reinforcement}
                      items={this.state.fibers}
                      onClick={this.props.onReinforcement}>
              Fiber
            </PathList>
          }
          {/^,reinforcement,($|particulate,)/.test(this.props.reinforcement) &&
            <PathList state={this.props.reinforcement}
                      items={this.state.particulates}
                      onClick={this.props.onReinforcement}>
              Particulate
            </PathList>
          }
          {/^,reinforcement,fiber,graphite,/.test(this.props.reinforcement) &&
            <PathList state={this.props.reinforcement}
                      items={this.state.graphites}
                      onClick={this.props.onReinforcement}>
              Graphite
            </PathList>
          }
          {/^,reinforcement,fiber,glass,/.test(this.props.reinforcement) &&
            <PathList state={this.props.reinforcement}
                      items={this.state.glasses}
                      onClick={this.props.onReinforcement}>
              Glass
            </PathList>
          }
          {/^,reinforcement,fiber,aramid,/.test(this.props.reinforcement) &&
            <PathList state={this.props.reinforcement}
                      items={this.state.aramids}
                      onClick={this.props.onReinforcement}>
              Aramid
            </PathList>
          }
          {/^,reinforcement,fiber,natural,/.test(this.props.reinforcement) &&
            <PathList state={this.props.reinforcement}
                      items={this.state.naturals}
                      onClick={this.props.onReinforcement}>
              Natural
            </PathList>
          }
        </Col>
        <Col>
          <Button className="m-2" color="primary" size="lg" block
                  onClick={this.handleFormToggle}
                  active={/^,form,?/.test(this.props.form)}>
            Form
          </Button>
          {/^,form,/.test(this.props.form) &&
            <PathList state={this.props.form}
                      items={this.state.forms}
                      onClick={this.props.onForm}>
              Form
            </PathList>
          }
        </Col>
      </Row>
    )
  }
}

export default PathSelect

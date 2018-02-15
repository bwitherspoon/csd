import React, { Component } from 'react';
import { Row, Col, Button, ListGroup, ListGroupItem } from 'reactstrap'

const resin = {
  thermoplastic: {
    abs: 'Acrylonitrile butadiene styrene (ABS)',
    polyamide: 'Polyamide',
    pe: 'Polyethylene (PE)',
    pc: 'Polycarbonate (PC)',
    peek: 'Polyether ether ketone (PEEK)',
    pp: 'Polypropylene (PP)',
    pps: 'Polyphenylene Sulfide (PPS)',
    ps: 'Polystyrene (PS)',
    ptfe: "Polytetrafluoroethylene (PTFE; Teflon)",
    pvc: 'Polyvinyl chloride (PVC)',
  },
  thermoset: {
    epoxy: 'Epoxy',
    phenolic: 'Phenolic (Bakelite)',
    polyester: 'Polyester',
    polyimide: "Polyimide",
    pur: 'Polyurethane (PUR)',
    silicone: 'Silicone',
    ve: 'Vinyl ester (VE)',
    vulcanizedrubber: "Vulcanized rubber",
  },
  polyamide: {
    pa: 'Nylon (PA)',
    pa12: 'Nylon 12 (PA12)',
    pa6: 'Nylon 6 (PA6)',
    pa66: 'Nylon 6,6 (PA6,6)',
  },
  polyethylene: {
    hdpe: 'High density polyethylene (HDPE)',
    ldpe: 'Low density polyethylene (LDPE)',
    mdpe: 'Medium density polyethylene (MDPE)',
    uhmwpe: 'Ultra high molecular weight polyethylene (UHMWPE)',
  },
}

const reinforcement = {
  fiber: {
    cf: 'Graphite (Carbon; CF)',
    gf: 'Glass (Fiberglass: GF)',
    aramid: 'Aramid',
    boron: 'Boron',
    ceramic: 'Ceramic',
    natural: 'Natural',
  },
  particulate: {
    choppedfibers: 'Chopped fibers',
    platelets: 'Platelets',
    hollowspheres: 'Hollow spheres',
    cnt: "Carbon nanotubes"
  },
}

const form = {
  ground: 'Ground',
  shred: 'Shredded',
  smc: 'Sheet molding compound (SMC)',
  bmc: 'Bulk modling compound (BMC)',
  bulk: 'Bulk',
  choptape: 'Chopped tape',
  trimoff: 'Trim offs',
  mat: 'Mat',
  prepreg: 'Prepreg',
}

class Path extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resin: '',
      reinforcement: '',
      form: ''
    }

    this.handleResinButtonClick = this.handleResinButtonClick.bind(this)
    this.handleResinItemClick = this.handleResinItemClick.bind(this)

    this.handleReinforcementButtonClick = this.handleReinforcementButtonClick.bind(this)
    this.handleReinforcementItemClick = this.handleReinforcementItemClick.bind(this)

    this.handleFormButtonClick = this.handleFormButtonClick.bind(this)
    this.handleFormItemClick = this.handleFormItemClick.bind(this)

    this.handleSelectButtonClick = this.handleSelectButtonClick.bind(this)
  }

  handleResinButtonClick() {
    this.setState({resin: (this.state.resin == '' ? ',' : '')})
  }

  handleResinItemClick(path, name) {
    this.setState({resin: path + name})
  }

  handleReinforcementButtonClick() {
    this.setState({reinforcement: (this.state.reinforcement == '' ? ',' : '')})
  }

  handleReinforcementItemClick(path, name) {
    this.setState({reinforcement: path + name})
  }

  handleFormButtonClick() {
    this.setState({form: (this.state.form == '' ? ',' : '')})
  }

  handleFormItemClick(path, name) {
    this.setState({form: path + name})
  }

  handleSelectButtonClick() {
    const resin = this.state.resin ? this.state.resin : ','
    const reinforcement = this.state.reinforcement ? this.state.reinforcement : ','
    const form = this.state.form ? this.state.form : ','
    const path = ',resin' + resin + ',reinforcement' + reinforcement + ',form' + form
    console.log(path)
  }

  toListGroupItems(path, mapping, handler) {
    const items = []
    for (const name in mapping) {
      items.push(
        <ListGroupItem key={name} tag="button" action  onClick={() => handler(path, name)} active={false}>
          {mapping[name]}
        </ListGroupItem>
      )
    }
    return items
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Button color="primary" size="lg" block className="mb-3" onClick={this.handleResinButtonClick} active={this.state.resin != ''}>Resin</Button>

            {/^,($|thermoplastic,)/.test(this.state.resin) &&
              <div>
                <h3>Thermoplastic</h3>
                <ListGroup className="mb-3">
                  {this.toListGroupItems(',thermoplastic,', resin.thermoplastic, this.handleResinItemClick)}
                </ListGroup>
              </div>
            }
            {/^,thermoplastic,polyamide/.test(this.state.resin) &&
              <div>
                <h3>Polyamide</h3>
                <ListGroup className="mb-3">
                  {this.toListGroupItems(',thermoplastic,polyamide,', resin.polyamide, this.handleResinItemClick)}
                </ListGroup>
              </div>
            }
            {/^,thermoplastic,pe/.test(this.state.resin) &&
              <div>
                <h3>Polyethylene</h3>
                <ListGroup className="mb-3">
                  {this.toListGroupItems(',thermoplastic,pe,', resin.polyethylene, this.handleResinItemClick)}
                </ListGroup>
              </div>
            }
            {/^,($|thermoset,)/.test(this.state.resin) &&
              <div>
                <h3>Thermoset</h3>
                <ListGroup className="mb-3">
                  {this.toListGroupItems(',thermoset,', resin.thermoset, this.handleResinItemClick)}
                </ListGroup>
              </div>
            }
          </Col>
          <Col>
            <Button color="primary" size="lg" block className="mb-3" onClick={this.handleReinforcementButtonClick} active={this.state.reinforcement != ''}>Reinforcement</Button>

            {/^,(fiber,)?/.test(this.state.reinforcement) &&
              <div>
                <h3>Fiber</h3>
                <ListGroup className="mb-3">
                  {this.toListGroupItems(',fiber,', reinforcement.fiber, this.handleReinforcementItemClick)}
                </ListGroup>
              </div>
            }
            {/^,(particulate,)?/.test(this.state.reinforcement) &&
              <div>
                <h3>Particulate</h3>
                <ListGroup className="mb-3">
                  {this.toListGroupItems(',particulate,', reinforcement.particulate, this.handleReinforcementItemClick)}
                </ListGroup>
              </div>
            }
          </Col>
          <Col>
            <Button color="primary" size="lg" block className="mb-3" onClick={this.handleFormButtonClick} active={this.state.form != ''}>Form</Button>

            {this.state.form &&
              <div>
                <ListGroup className="mb-3">
                  {this.toListGroupItems(',', form, this.handleFormItemClick)}
                </ListGroup>
              </div>
            }
          </Col>
        </Row>

        {(this.state.resin || this.state.reinforcement || this.state.form) &&
          <Row>
            <Col>
              <div className="d-flex flex-row-reverse">
                <Button color="primary" size="lg" block className='mb-3' onClick={this.handleSelectButtonClick}>Select</Button>
              </div>
            </Col>
          </Row>
        }
      </div>
    );
  }
}

export default Path;

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
    ptfe: "olytetrafluoroethylene (PTFE; Teflon)",
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

    this.onResinButtonClick = this.onResinButtonClick.bind(this)
    this.onReinforcementButtonClick = this.onReinforcementButtonClick.bind(this)
    this.onFormButtonClick = this.onFormButtonClick.bind(this)
  }

  onResinButtonClick() {
    this.setState({resin: (this.state.resin == '' ? ',' : '')})
  }

  onReinforcementButtonClick() {
    this.setState({reinforcement: (this.state.reinforcement == '' ? ',' : '')})
  }

  onFormButtonClick() {
    this.setState({form: (this.state.form == '' ? ',' : '')})
  }

  toListGroupItems(mapping) {
    const items = []
    for (const name in mapping) {
      items.push(
        <ListGroupItem key={name} tag="button" action>{mapping[name]}</ListGroupItem>
      )
    }
    return items
  }

  render() {
    return (
      <Row>
        <Col>
          <Button color="primary" size="lg" block className="mb-3" onClick={this.onResinButtonClick} active={this.state.resin != ''}>Resin</Button>
          {/^,(thermoplastic)?$/.test(this.state.resin) &&
            <div>
              <h3>Thermoplastic</h3>
              <ListGroup className="mb-3">
                {this.toListGroupItems(resin.thermoplastic)}
              </ListGroup>
            </div>
          }
          {this.state.resin == ',thermoplastic,polyamide,' &&
            <div>
              <h3>Polyamide</h3>
              <ListGroup className="mb-3">
                {this.toListGroupItems(resin.polyamide)}
              </ListGroup>
            </div>
          }
          {this.state.resin == ',thermoplastic,pe,' &&
            <div>
              <h3>Polyethylene</h3>
              <ListGroup className="mb-3">
                {this.toListGroupItems(resin.polyethylene)}
              </ListGroup>
            </div>
          }
          {/^,(thermoset)?$/.test(this.state.resin) &&
            <div>
              <h3>Thermoset</h3>
              <ListGroup className="mb-3">
                {this.toListGroupItems(resin.thermoset)}
              </ListGroup>
            </div>
          }
        </Col>
        <Col>
          <Button color="primary" size="lg" block className="mb-3" onClick={this.onReinforcementButtonClick} active={this.state.reinforcement != ''}>Reinforcement</Button>
          {/^,(fiber)?$/.test(this.state.reinforcement) &&
            <div>
              <h3>Fiber</h3>
              <ListGroup className="mb-3">
                {this.toListGroupItems(reinforcement.fiber)}
              </ListGroup>
            </div>
          }
          {/^,(particulate)?$/.test(this.state.reinforcement) &&
            <div>
              <h3>Particulate</h3>
              <ListGroup className="mb-3">
                {this.toListGroupItems(reinforcement.particulate)}
              </ListGroup>
            </div>
          }
        </Col>
        <Col>
          <Button color="primary" size="lg" block className="mb-3" onClick={this.onFormButtonClick} active={this.state.form != ''}>Form</Button>
          {this.state.form &&
            <div>
              <ListGroup>
                {this.toListGroupItems(form)}
              </ListGroup>
            </div>
          }
        </Col>
      </Row>
    );
  }
}

export default Path;

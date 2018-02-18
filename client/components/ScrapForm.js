import React, { Component } from 'react'
import { Row, Col, Label, Button, Form, FormGroup, ListGroup, ListGroupItem,
  Input, InputGroup, InputGroupAddon } from 'reactstrap'

// TODO Move these objects into database
const thermoplastics = [
  {
    label: 'Acrylonitrile butadiene styrene',
    short: 'ABS',
    value: ',resin,thermoplastic,abs',
  },
  {
    label: 'Polyamide',
    short: 'PA',
    value: ',resin,thermoplastic,polyamide,',
  },
  {
    label: 'Polyethylene',
    short: 'PE',
    value: ',resin,thermoplastic,polyethylene,',
  },
  {
    label: 'Polycarbonate',
    short: 'PC',
    value: ',resin,thermoplastic,pc',
  },
  {
    label: 'Polyether ether ketone',
    short: 'PEEK',
    value: ',resin,thermoplastic,peek',
  },
  {
    label: 'Polypropylene',
    short: 'PP',
    value: ',resin,thermoplastic,pp',
  },
  {
    label: 'Polyphenylene Sulfid',
    short: 'PPS',
    value: ',resin,thermoplastic,pps',
  },
  {
    label: 'Polystyrene',
    short: 'PS',
    value: ',resin,thermoplastic,ps',
  },
  {
    label: 'Polytetrafluoroethylene / Teflon',
    short: 'PTFE',
    value: ',resin,thermoplastic,ptfe',
  },
  {
    label: 'Polyvinyl chloride',
    short: 'PVC',
    value: ',resin,thermoplastic,pvc',
  },
]
const thermosets = [
  {
    label: 'Epoxy',
    value: ',resin,thermoset,epoxy',
  },
  {
    label: 'Phenolic / Bakelite',
    value: ',resin,thermoset,phenolic',
  },
  {
    label: 'Polyester',
    value: ',resin,thermoset,polyester',
  },
  {
    label: 'Polyimide',
    value: ',resin,thermoset,polyimide',
  },
  {
    label: 'Polyurethane',
    short: 'PUR',
    value: ',resin,thermoset,pur',
  },
  {
    label: 'Silicone',
    value: ',resin,thermoset,silicone',
  },
  {
    label: 'Vinyl ester',
    short: 'VE',
    value: ',resin,thermoset,ve',
  },
  {
    label: 'Vulcanized rubber',
    value: ',resin,thermoset,vulcanizedrubber',
  },
]
const polyamides = [
  {
    label: 'Nylon',
    short: 'PA',
    value: ',resin,thermoplastic,polyamide,pa',
  },
  {
    label: 'Nylon 12',
    short: 'PA12',
    value: ',resin,thermoplastic,polyamide,pa12',
  },
  {
    label: 'Nylon 6',
    short: 'PA6',
    value: ',resin,thermoplastic,polyamide,pa6',
  },
  {
    label: 'Nylon 6,6',
    short: 'PA6,6',
    value: ',resin,thermoplastic,polyamide,pa66',
  },
]
const polyethylenes = [
  {
    label: 'High density polyethylene',
    short: 'HDPE',
    value: ',resin,thermoplastic,polyethylene,hdpe',
  },
  {
    label: 'Low density polyethylene',
    short: 'LDPE',
    value: ',resin,thermoplastic,polyethylene,ldpe',
  },
  {
    label: 'Medium density polyethylene',
    short: 'MDPE',
    value: ',resin,thermoplastic,polyethylene,mdpe',
  },
  {
    label: 'Ultra high molecular weight polyethylene',
    short: 'UHMWPE',
    value: ',resin,thermoplastic,polyethylene,uhmwpe',
  },
]
const fibers = [
  {
    label: 'Graphite / Carbon',
    short: 'CF',
    value: ',reinforcement,fiber,graphite,',
  },
  {
    label: 'Glass / Fiberglass',
    short: 'GF',
    value: ',reinforcement,fiber,glass,',
  },
  {
    label: 'Aramid',
    value: ',reinforcement,fiber,aramid,',
  },
  {
    label: 'Boron',
    value: ',reinforcement,fiber,boron',
  },
  {
    label: 'Ceramic',
    value: ',reinforcement,fiber,ceramic',
  },
  {
    label: 'Natural',
    value: ',reinforcement,fiber,natural,',
  },
]
const graphites = [
  {
    label: 'Low modulus',
    value: ',reinforcement,fiber,graphite,low',
  },
  {
    label: 'Standard modulus',
    value: ',reinforcement,fiber,graphite,standard',
  },
  {
    label: 'Intermediate modulus',
    value: ',reinforcement,fiber,graphite,intermediate',
  },
  {
    label: 'High modulus',
    value: ',reinforcement,fiber,graphite,high',
  },
  {
    label: 'Ultra modulus',
    value: ',reinforcement,fiber,graphite,ultrahigh',
  },
  {
    label: 'Other',
    value: ',reinforcement,fiber,graphite,other',
  },
]
const glasses = [
  {
    label: 'A-glass / Alkali glass',
    value: ',reinforcement,fiber,glass,alkali',
  },
  {
    label: 'C-glass / Chemical glass',
    value: ',reinforcement,fiber,glass,chemical',
  },
  {
    label: 'E-glass / Electrical glass',
    value: ',reinforcement,fiber,glass,electrical',
  },
  {
    label: 'S-glass / Structural glass',
    value: ',reinforcement,fiber,glass,structural',
  },
  {
    label: 'D-glass / Dielectric glass',
    value: ',reinforcement,fiber,glass,dielectric',
  },
]
const aramids = [
  {
    label: 'Kevlar',
    value: ',reinforcement,fiber,aramid,kevlar',
  },
  {
    label: 'Kevlar',
    value: ',reinforcement,fiber,aramid,twaron',
  },
  {
    label: 'Other',
    value: ',reinforcement,fiber,aramid,other',
  },
]
const naturals = [
  {
    label: 'Bamboo',
    value: ',reinforcement,fiber,natural,bamboo',
  },
  {
    label: 'Sisal',
    value: ',reinforcement,fiber,natural,sisal',
  },
  {
    label: 'Hemp',
    value: ',reinforcement,fiber,natural,hemp',
  },
  {
    label: 'Jute',
    value: ',reinforcement,fiber,natural,jute',
  },
  {
    label: 'Kenaf',
    value: ',reinforcement,fiber,natural,kenaf',
  },
  {
    label: 'Other',
    value: ',reinforcement,fiber,natural,other',
  },
]
const particulates = [
  {
    label: 'Chopped fibers',
    value: ',reinforcement,particulate,choppedfibers',
  },
  {
    label: 'Platelets',
    value: ',reinforcement,particulate,platelets',
  },
  {
    label: 'Hollow spheres',
    value: ',reinforcement,particulate,hollowspheres',
  },
  {
    label: 'Carbon nanotubes',
    short: 'CNT',
    value: ',reinforcement,particulate,cnt',
  },
]
const forms = [
 {
   label: 'Ground',
   value: 'ground',
 },
 {
   label: 'Shredded',
   value: 'shredded',
 },
 {
   label: 'Sheet molding compound',
   short: 'SMC',
   value: 'smc',
 },
 {
   label: 'Bulk modling compound',
   short: 'BMC',
   value: 'bmc',
 },
 {
   label: 'Bulk',
   value: 'bulk',
 },
 {
   label: 'Chopped tape',
   value: 'choppedtape',
 },
 {
   label: 'Trim offs',
   value: 'trimoffs',
 },
 {
   label: 'Mat',
   value: 'mat',
 },
 {
   label: 'Prepreg',
   value: 'prepreg',
 },
]

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

class ScrapForm extends Component {
  constructor(props) {
    super(props)

    if (props.state) {
      this.state = props.state
    } else {
      this.state = ScrapForm.defaultState
    }

    this.handleView = props.onView

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)

    this.handleResinToggle = this.handleResinToggle.bind(this)
    this.handleResin = this.handleResin.bind(this)

    this.handleReinforcementToggle = this.handleReinforcementToggle.bind(this)
    this.handleReinforcement = this.handleReinforcement.bind(this)

    this.isDisabled = this.isDisabled.bind(this)
  }

  handleResinToggle() {
    this.setState({resin: (/^,.+/.test(this.state.resin) ? '' : ',resin,')})
  }

  handleResin(value) {
    this.setState({resin: value})
  }

  handleReinforcementToggle() {
    this.setState({reinforcement: (/^,.+/.test(this.state.reinforcement) ? '' : ',reinforcement,')})
  }

  handleReinforcement(value) {
    this.setState({reinforcement: value})
  }

  handleSubmit(event) {
    const state = {
      resin: this.state.resin,
      reinforcement: this.state.reinforcement,
      form: event.target.form.value,
      origin_company: event.target.origin_company.value,
      original_material: event.target.original_material.value,
      manufacturing_method: event.target.manufacturing_method.value,
      current_location: event.target.current_location.value,
      quantity: event.target.quantity.value,
      research_notes: event.target.research_notes.value,
    }
    this.setState(state)
    this.handleView(state)
    event.preventDefault()
  }

  handleReset(event) {
    this.setState(ScrapForm.defaultState)
    event.preventDefault()
  }

  isDisabled() {
    return (
      this.state.resin == '' && this.state.reinforcement == '' ||
      this.state.resin.endsWith(',') ||
      this.state.reinforcement.endsWith(',')
    )
  }

  render() {
    return (
      <Form onReset= {this.handleReset} onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Col>
            <Button className="m-2" color="primary" size="lg" block
                    onClick={this.handleResinToggle}
                    active={/^,resin,?/.test(this.state.resin)}>
              Resin
            </Button>
            {/^,resin,($|thermoplastic,)/.test(this.state.resin) &&
              <PathList state={this.state.resin} items={thermoplastics}
                        onClick={this.handleResin}>
                Thermoplastic
              </PathList>
            }
            {/^,resin,($|thermoset,)/.test(this.state.resin) &&
              <PathList state={this.state.resin} items={thermosets}
                        onClick={this.handleResin}>
                Thermoset
              </PathList>
            }
            {/^,resin,thermoplastic,polyamide,/.test(this.state.resin) &&
              <PathList state={this.state.resin} items={polyamides}
                        onClick={this.handleResin}>
                Polyamide
              </PathList>
            }
            {/^,resin,thermoplastic,polyethylene,/.test(this.state.resin) &&
              <PathList state={this.state.resin} items={polyethylenes}
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
              <PathList state={this.state.reinforcement} items={fibers}
                        onClick={this.handleReinforcement}>
                Fiber
              </PathList>
            }
            {/^,reinforcement,($|particulate,)/.test(this.state.reinforcement) &&
              <PathList state={this.state.reinforcement} items={particulates}
                        onClick={this.handleReinforcement}>
                Particulate
              </PathList>
            }
            {/^,reinforcement,fiber,graphite,/.test(this.state.reinforcement) &&
              <PathList state={this.state.reinforcement} items={graphites}
                        onClick={this.handleReinforcement}>
                Graphite
              </PathList>
            }
            {/^,reinforcement,fiber,glass,/.test(this.state.reinforcement) &&
              <PathList state={this.state.reinforcement} items={glasses}
                        onClick={this.handleReinforcement}>
                Glass
              </PathList>
            }
            {/^,reinforcement,fiber,aramid,/.test(this.state.reinforcement) &&
              <PathList state={this.state.reinforcement} items={aramids}
                        onClick={this.handleReinforcement}>
                Aramids
              </PathList>
            }
            {/^,reinforcement,fiber,natural,/.test(this.state.reinforcement) &&
              <PathList state={this.state.reinforcement} items={naturals}
                        onClick={this.handleReinforcement}>
                Natural
              </PathList>
            }
          </Col>
        </FormGroup>
        <hr />
        <FormGroup row>
          <Col>
            <FormGroup>
              <Label for="origin-company">Origin Company</Label>
              <Input type="text" name="origin_company" id="origin-company"
                     defaultValue={this.state.origin_company}
                     disabled={this.isDisabled()} />
            </FormGroup>
            <FormGroup>
              <Label for="manufacturing-method">Manufacturing Method</Label>
              <Input type="text" name="manufacturing_method" id="manufacturing-method"
                     defaultValue={this.state.manufacturing_method}
                     disabled={this.isDisabled()} />
            </FormGroup>
            <FormGroup>
              <Label for="quantity">Quantity</Label>
              <InputGroup>
                <Input type="number" min="0" name="quantity" id="quantity"
                       defaultValue={this.state.quantity}
                       disabled={this.isDisabled()} />
                <InputGroupAddon addonType="append">kg</InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="original-material">Original Material</Label>
              <Input type="text" name="original_material" id="original-material"
                     defaultValue={this.state.original_material}
                     disabled={this.isDisabled()} />
            </FormGroup>
            <FormGroup>
              <Label for="current-location">Current Location</Label>
              <Input type="text" name="current_location" id="current-location"
                     defaultValue={this.state.current_location}
                     disabled={this.isDisabled()} />
            </FormGroup>
            <FormGroup>
              <Label for="form">Form</Label>
              <Input type="select" name="form" id="form"
                     disabled={this.isDisabled()}>
                {forms.map(form =>
                  <option key={form.value} value={form.value}>
                    {form.label + (form.short ? ' (' + form.short + ')' : '')}
                  </option>
                )}
              </Input>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Label for="research-notes">Research Notes</Label>
            <Input type="textarea" rows="5" name="research_notes" id="research-notes"
                   defaultValue={this.state.research_notes}
                   disabled={this.isDisabled()} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Button outline type="reset" color="secondary" size="lg" block
                    disabled={this.state.resin == '' && this.state.reinforcement == ''}>
              Reset
            </Button>
          </Col>
          <Col>
            <Button type="submit" color="primary" size="lg" block
                    disabled={this.isDisabled()}>
              Create
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

ScrapForm.defaultState = {
  resin: '',
  reinforcement: '',
  form: '',
  origin_company: '',
  original_material: '',
  manufacturing_method: '',
  current_location: '',
  quantity: 0,
  research_notes: '',
}

export default ScrapForm

import React, { Component } from 'react';
import { Row, Col, Button, ListGroup, ListGroupItem } from 'reactstrap'

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

function PathListItem(props) {
  const re = new RegExp('^' + props.value + (props.value.endsWith(',') ? '' : '$'))
  return (
    <ListGroupItem tag="button" action
                   onClick={() => props.onClick(props.value)}
                   active={re.test(props.state)}>
      {props.label + (props.short ? ' (' + props.short + ')' : '')}
    </ListGroupItem>
  )
}

const PathList = props => {
  const { items, children, ...other } = props
  return (
    <div>
      <h3>{children.toString()}</h3>
      <ListGroup className="mb-3">
        {items.map(item =>
          <PathListItem key={item.value} {...item} {...other} />
        )}
      </ListGroup>
    </div>
  )
}

class ScrapPath extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resin: '',
      reinforcement: ''
    }

    this.onCreate = props.onCreate

    this.handleResinButtonClick = this.handleResinButtonClick.bind(this)
    this.handleResinItemClick = this.handleResinItemClick.bind(this)
    this.handleReinforcementButtonClick = this.handleReinforcementButtonClick.bind(this)
    this.handleReinforcementItemClick = this.handleReinforcementItemClick.bind(this)
    this.handleCreateButtonClick = this.handleCreateButtonClick.bind(this)
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this)
  }

  handleResinButtonClick() {
    this.setState({resin: (/^,.+/.test(this.state.resin) ? '' : ',resin,')})
  }

  handleResinItemClick(value) {
    this.setState({resin: value})
  }

  handleReinforcementButtonClick() {
    this.setState({reinforcement: (/^,.+/.test(this.state.reinforcement) ? '' : ',reinforcement,')})
  }

  handleReinforcementItemClick(value) {
    this.setState({reinforcement: value})
  }

  handleResetButtonClick() {
    this.setState({
      resin: '',
      reinforcement: '',
    })
  }

  handleCreateButtonClick() {
    const path = this.state.resin + this.state.reinforcement
    this.onCreate(path)
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Button color="primary" size="lg" block className="mb-3" onClick={this.handleResinButtonClick} active={/^,resin,?/.test(this.state.resin)}>Resin</Button>
            {/^,resin,($|thermoplastic,)/.test(this.state.resin) &&
              <PathList state={this.state.resin} items={thermoplastics} onClick={this.handleResinItemClick}>
                Thermoplastic
              </PathList>
            }
            {/^,resin,($|thermoset,)/.test(this.state.resin) &&
              <PathList state={this.state.resin} items={thermosets} onClick={this.handleResinItemClick}>
                Thermoset
              </PathList>
            }
            {/^,resin,thermoplastic,polyamide,/.test(this.state.resin) &&
              <PathList state={this.state.resin} items={polyamides} onClick={this.handleResinItemClick}>
                Polyamide
              </PathList>
            }
            {/^,resin,thermoplastic,polyethylene,/.test(this.state.resin) &&
              <PathList state={this.state.resin} items={polyethylenes} onClick={this.handleResinItemClick}>
                Polyethylene
              </PathList>
            }
          </Col>
          <Col>
            <Button color="primary" size="lg" block className="mb-3" onClick={this.handleReinforcementButtonClick} active={/^,reinforcement,?/.test(this.state.reinforcement)}>Reinforcement</Button>
            {/^,reinforcement,($|fiber,)/.test(this.state.reinforcement) &&
              <PathList state={this.state.reinforcement} items={fibers} onClick={this.handleReinforcementItemClick}>
                Fiber
              </PathList>
            }
            {/^,reinforcement,($|particulate,)/.test(this.state.reinforcement) &&
              <PathList state={this.state.reinforcement} items={particulates} onClick={this.handleReinforcementItemClick}>
                Particulate
              </PathList>
            }
            {/^,reinforcement,fiber,graphite,/.test(this.state.reinforcement) &&
              <PathList state={this.state.reinforcement} items={graphites} onClick={this.handleReinforcementItemClick}>
                Graphite
              </PathList>
            }
            {/^,reinforcement,fiber,glass,/.test(this.state.reinforcement) &&
              <PathList state={this.state.reinforcement} items={glasses} onClick={this.handleReinforcementItemClick}>
                Glass
              </PathList>
            }
            {/^,reinforcement,fiber,aramid,/.test(this.state.reinforcement) &&
              <PathList state={this.state.reinforcement} items={aramids} onClick={this.handleReinforcementItemClick}>
                Aramids
              </PathList>
            }
            {/^,reinforcement,fiber,natural,/.test(this.state.reinforcement) &&
              <PathList state={this.state.reinforcement} items={naturals} onClick={this.handleReinforcementItemClick}>
                Natural
              </PathList>
            }
          </Col>
        </Row>
        {(this.state.resin != '' || this.state.reinforcement != '') &&
          <Row>
            <Col>
              <Button outline color="secondary" size="lg" block className='mb-3'
                      onClick={this.handleResetButtonClick}
                      disabled={this.state.resin == '' && this.state.reinforcement == ''}>
                Reset
              </Button>
            </Col>
            <Col>
              <Button color="secondary" size="lg" block className='mb-3'
                      onClick={this.handleCreateButtonClick}
                      disabled={this.state.resin.endsWith(',') || this.state.reinforcement.endsWith(',')}>
                Create
              </Button>
            </Col>
          </Row>
        }
      </div>
    );
  }
}

export default ScrapPath;

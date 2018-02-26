import React, { Component } from 'react'
import { Button, ButtonGroup, Nav, NavItem, NavLink } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import CogIcon from '@fortawesome/fontawesome-free-solid/faCog'
import FolderIcon from '@fortawesome/fontawesome-free-solid/faFolder'
import UserIcon from '@fortawesome/fontawesome-free-solid/faUser'
import UserTimesIcon from '@fortawesome/fontawesome-free-solid/faUserTimes'

class PageHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: false
    }
  }

  componentDidMount() {
    fetch('/user', { credentials: 'same-origin', redirect: 'error' })
      .then(
        res => this.setState({ auth: res.ok }),
        err => console.error(err)
      )
  }

  handleNavigate(page, event) {
    this.props.onNavigate(page)
    event.preventDefault()
  }

  render() {
    const pages = ['Home', 'About', 'Learn', 'Search', 'Contact']
    const logo =
      <img className="m-2" width='64px' height='64px' src='/images/logo.svg' alt='Composites Recycling' />
    const navigation =
      <Nav className="p-2" pills>
        {pages.map(page =>
          <NavItem key={page}>
            <NavLink href="#"
                     onClick={this.handleNavigate.bind(this, page.toLowerCase())}
                     active={this.props.page === page.toLowerCase()}>
              {page}
            </NavLink>
          </NavItem>
        )}
      </Nav>
    const toolbar =
        <ButtonGroup>
          <Button color="primary"
                  active={this.props.page === 'create'}
                  disabled={!this.state.auth}
                  onClick={() => this.props.onNavigate('create')}>
            <FontAwesomeIcon icon={CogIcon} />
          </Button>
          <Button color="primary"
                  active={this.props.page === 'folder'}
                  disabled={!this.state.auth}
                  onClick={() => this.props.onNavigate('folder')}>
            <FontAwesomeIcon icon={FolderIcon} />
          </Button>
          <Button color="primary"
                  onClick={() => location.href = this.state.auth ? '/logout' : '/login'}>
            <FontAwesomeIcon icon={this.state.auth ? UserTimesIcon : UserIcon} />
          </Button>
        </ButtonGroup>
    return (
      <header>
        <div className="d-flex align-items-center">
          {logo}
          {navigation}
          <div className="p-2 ml-auto">
            {toolbar}
          </div>
        </div>
        <hr />
      </header>
    )
  }
}

export default PageHeader

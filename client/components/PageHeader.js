import React, { Component } from 'react'
import { Button, ButtonGroup, Nav, NavItem, NavLink } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import CogIcon from '@fortawesome/fontawesome-free-solid/faCog'
import FolderIcon from '@fortawesome/fontawesome-free-solid/faFolder'
import UserIcon from '@fortawesome/fontawesome-free-solid/faUser'

class PageHeader extends Component {
  constructor(props) {
    super(props)
  }

  handleNavigate(page, event) {
    this.props.onNavigate(page)
    event.preventDefault()
  }

  render() {
    const pages = ['Home', 'About', 'Learn', 'Search', 'Contact']
    return (
      <header>
        <div className="d-flex align-items-center">
          {/* Logo */}
          <img className="m-2" width='64px' height='64px' src='/images/logo.svg' alt='Composites Recycling' />
          {/* Navigation */}
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
          {/* Buttons */}
          <ButtonGroup className="p-2 ml-auto">
            <Button color="primary" active={this.props.page === 'create'}
                    onClick={() => this.props.onNavigate('create')}>
              <FontAwesomeIcon icon={CogIcon} />
            </Button>
            <Button color="primary" active={this.props.page === 'folder'}
                    onClick={() => this.props.onNavigate('folder')}>
              <FontAwesomeIcon icon={FolderIcon} />
            </Button>
            <Button color="primary">
              <FontAwesomeIcon icon={UserIcon} />
            </Button>
          </ButtonGroup>
        </div>
        <hr />
      </header>
    )
  }
}

export default PageHeader

import React from 'react'
import { Row, Col, Button, Jumbotron } from 'reactstrap'
import './HomePage.css'

function HomePage(props) {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Composite Scrap Database</h1>
        <p className="lead">
          Find information on composite scrap, available composite scrap, and
          existing composite recyclers.
        </p>
        <Button color="primary" size="lg"
                onClick={() => props.onNavigate('search')}>
          Search
        </Button>
      </Jumbotron>
      <Row>
        <Col>
          <h3>What are composites?</h3>
          <p>
            A composite is a material made from two or more separate materials
            or elements that when combined create a stronger material.
          </p>
          <Button onClick={() => location.href = 'http://compositeslab.com/composites-101/'}>Learn more</Button>
        </Col>
        <Col>
          <h3>A composites industry overview</h3>
          <p>
            Read more about the composites industry and find additional
            resources.
          </p>
          <Button onClick={() => props.onNavigate('overview')}>View details</Button>
        </Col>
        <Col>
          <h3>The CRTEP project</h3>
          <p>
            Read more about the Composites Recycling Technician Education
            Program (CRTEP) and explore the educational modules.
          </p>
          <Button onClick={() => props.onNavigate('about')}>
            View details
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default HomePage

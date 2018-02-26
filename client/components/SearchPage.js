import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import PathSelect from './PathSelect'

function SearchPage(props) {
  return (
    <div>
      <PathSelect />
      <Row>
        <Col>
          <Button className="m-2" outline size="lg" block disabled>
            Reset
          </Button>
        </Col>
        <Col>
          <Button className="m-2" size="lg" block disabled>
            Search
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default SearchPage

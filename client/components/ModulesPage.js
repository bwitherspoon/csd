import React, { Component } from 'react'
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

class ModulesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: '0'
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle(tab) {
    if (this.state.active != tab) {
      this.setState({
        active: tab
      })
    }
  }

  render() {
    const titles = [
      'Overview on Materials Recycling',
      'Composite Manufacturing Methods: Thermosets and Thermoplastics',
      'Challenges of Recycling Composites I',
      'Challenges of Recycling Composites II',
      'Sources of Scrap Materials in Production Facilities',
      'Methods of Recycling Thermosets',
      'Methods of Recycling Thermoplastics',
      'Considering Components/Parts for Manufacture from Recycled Materials',
      'Design for Recycling',
      'Understanding Public Perception and Consumer Habits',
    ]
    const links = [
      'http://cdspooner.com/crtep/Lecture_1-Overview_on_Materials_Recycling.pdf',
      'http://cdspooner.com/crtep/Lecture_2-Composite_Manufacturing_Meth_TS_and_TP.pdf',
      'http://cdspooner.com/crtep/Lecture_3-Challenges_of_Recycling_Composites_TS.pdf',
      'http://cdspooner.com/crtep/Lecture_4-Challenges_of_Recycling_Composites_TP.pdf',
      'http://cdspooner.com/crtep/Lecture_5-Sources_of_Scrap_Material_in_Production_Facilities.pdf',
      'http://cdspooner.com/crtep/Lecture_6-Methods_of_Recycling_Thermosets.pdf',
      'http://cdspooner.com/crtep/Lecture_7-Methods_of_Recycling_Thermoplastics.pdf',
      'http://cdspooner.com/crtep/Lecture_8-Considering_Recycled_Components_for_Manufacture.pdf',
      'http://cdspooner.com/crtep/Lecture_9-Design_for_Recycling.pdf',
      'http://cdspooner.com/crtep/Lecture_10-Understanding_Public_Perception_and_Consumer_Habits.pdf',
    ]
    const navs = []
    for (let index = 0; index < 10; index++) {
      const num = index + 1
      navs.push(
        <NavItem key={'module' + num}>
          <NavLink active={this.state.active == num.toString()}
                   onClick={() => this.toggle(num.toString())}>
                   {'Module ' + num}
          </NavLink>
        </NavItem>
      )
    }
    return (
      <div>
        <Nav tabs>
          {navs}
        </Nav>
        <TabContent activeTab={this.state.active}>
          <TabPane tabId="1">
            <Row className="m-4">
              <Col>
                <h3 className="text-center">
                  <a href={links[0]}>{titles[0]}</a>
                </h3>
                <h5>Module 1 Outline</h5>
                <ol type="a">
                  <li>A Brief Introduction to Composites</li>
                  <li>“Waste” versus “Scrap”</li>
                  <li>Recycling Trends</li>
                  <li>Industry Perspective on Recyclings</li>
                  <li>Basic Introduction to Current Composite Recycling in Industry</li>
                </ol>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row className="m-4">
              <Col>
                <h3 className="text-center">
                  <a href={links[4]}>{titles[4]}</a>
                </h3>
                <h5>Module 4 Outline</h5>
                <ol type="a">
                  <li>Six Sources of Manufacturing Scrap</li>
                  <li>Raw Material and Material Trim-Offs Scrap</li>
                  <li>Part Trim-Offs Scrap</li>
                  <li>Machining/Finishing Scrap</li>
                  <li>Reject Parts and End of Life Components as Scrap</li>
                  <li>Storing versus Landfilling versus Outsourcing Scrap</li>
                </ol>
              </Col>
            </Row>
          </TabPane>
          {[1, 2, 3, 5, 6, 7, 8, 9].map(n =>
            <TabPane key={n} tabId={(n+1).toString()}>
              <Row className="m-4">
                <Col>
                  <h3 className="text-center">
                    <a href={links[n]}>{titles[n]}</a>
                  </h3>
                </Col>
              </Row>
            </TabPane>
          )}
        </TabContent>
      </div>
    )
  }
}

export default ModulesPage

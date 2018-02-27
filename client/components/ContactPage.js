import React from 'react'
import { Row, Col } from 'reactstrap'

function ContactPage(props) {
  return (
    <Row>
      <Col>
        <h3>Mailing Address</h3>
        <p>SVC CRTEP<br />Darren Greeno<br />2405 E. College Way<br />Mount Vernon, WA 98273</p>
        <h3>Office Location</h3>
        <p>2405 E. College Way, Nelson Hall<br />Mount Vernon, WA 98273</p>
        <h3>Contact Information</h3>
        <p><b>Phone:</b> (360) 416-7729</p>
        <p>
          <b>Darren Greeno, Principal Investigator</b>
           <br />
           NSF Composites Recycling Technician Education Program (CRTEP)
           <br />
           <a href='mailto:darren.greeno@skagit.edu'>darren.greeno@skagit.edu</a>
        </p>
        <p>
           <b>Brian Pillay, Co Principal Investigator</b>
           <br />
           NSF Composites Recycling Technician Education Program (CRTEP)
           <br />
           <a href='mailto:pillay@uab.edu'>pillay@uab.edu</a>
        </p>
      </Col>
    </Row>
  )
}

export default ContactPage

import React from 'react'
import { Row, Col, Button } from 'reactstrap'

function AboutPage(props) {
  return (
    <div>
      <Row>
        <Col>
          <h2 className="text-center">Composites Recycling Technician Education Program (CRTEP)</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            The <strong>CRTEP</strong> project will provide a workforce education
            solution for technicians who can safely and efficiently identify,
            handle, sort, track and catalogue composite waste stream material,
            diverted during the manufacturing process, for future use in secondary
            fabrication and manufacturing. The project will advance knowledge
            across multiple fields and industries as protocols and training
            pathways are created that provide technicians with the foundational
            knowledge, skills and abilities needed to handle composite waste
            stream materials, treating them as a new resource. Incumbent
            technicians will have the opportunity to enhance core skill sets,
            making them more competitive in the work environment. New students
            will benefit from cutting-edge curriculum. Industry will explore new
            roles for technicians, and new methods to reclaim and repurpose
            materials.
          </p>
          <Button color="primary" onClick={() => props.onNavigate('learn')}>
            Learn more
          </Button>
        </Col>
        <Col>
          <p>
            This innovative project has been established through funding from the
            National Science Foundation, and includes the following partners:
            Skagit Valley College (lead college), The University of Alabama at
            Birmingham, Peninsula College, and the National Resource Center for
            Materials Technology Education (MatEdu), housed at Edmonds Community
            College.
          </p>
          <p>
            The <strong>CRTEP</strong> project would not be possible without the support of
            our many partners. We would like to thank the <em>National Science Foundation,
            American Composites Manufacturing Association (ACMA), Composite Recycling
            Technology Center (CRTC), Connora Technologies, Fiberglass Supply, Hexcel
            Corporation, Janicki Industries, Northwest Workforce Council, Polystrand Inc.,
            Southeast Maritime and Transportation Center (SMART), The Boeing Company , The
            Composites Institute (IACMI).</em>
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default AboutPage

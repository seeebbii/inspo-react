
import { Col, Container, Row } from 'reactstrap'
import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { STRINGS } from '../../utils/Enums'

export default function Concept() {

  return <>
  <Container fluid>
    <Row style={{height:"100vh"}}>
      <Col style={{marginTop:"20px"}}>
         {/* Search Bar */}
         <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "35px",
                border: "2px solid black",
                margin: "auto",
                borderRadius: "8px",
                padding: "3px 5px",
              }}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "black", fontSize: "12px" }}
              />
              <input
                style={{
                  border: "none",
                  outline: "none",
                  width: "40vw",
                  marginLeft: "10px",
                }}
                placeholder="Search"
              />
            </div>
            <br />
        <div style={{height:"90vh",width:"100%",borderRadius:"8px", border:"2px solid black",margin:"auto",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <p style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD,fontSize:"35px"}}>Concept</p>
         
        </div>
      </Col>
    </Row>
  </Container>
  
  
  </>
  
}

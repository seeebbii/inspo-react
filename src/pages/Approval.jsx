
import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { STRINGS } from '../utils/Enums'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function Approval() {


  let navigate=useNavigate()
    
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
        <div style={{flexDirection:"column", height:"90vh",width:"100%",borderRadius:"8px", border:"2px solid black",margin:"auto",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <p style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD,fontSize:"35px"}}>SELECT ONE </p>
          <Container>
            <Row>
              <Col className='approvalBox' style={{display:"flex",justifyContent:"flex-end"}}>
                <div onClick={()=>navigate(STRINGS.ROUTES.CONCEPT_APPROVAL)} style={{cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px",height:"80px",width:"250px",border:"2px solid black",borderRadius:"8px"}}>
                <span style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD,fontSize:"20px"}}>CONCEPT</span>

                </div>
              </Col>
              <Col className='approvalBox'>
                <div  onClick={()=>navigate(STRINGS.ROUTES.INFLUENCER_APPROVAL)}  style={{cursor:"pointer", display:"flex",justifyContent:"center",alignItems:"center", marginTop:"10px",height:"80px",width:"250px",border:"2px solid black",borderRadius:"8px"}}>
                  <span style={{fontFamily:STRINGS.FONTS.HELVITICA_BOLD,fontSize:"20px"}}>INFLUENCER</span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Col>
    </Row>
  </Container>
  
  
  </>
  
}

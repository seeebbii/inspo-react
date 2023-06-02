
import React from 'react'
import AsideMenu from '../Components/AsideMenu'
import { Col, Container, Row } from 'reactstrap'

export default function Dashboard() {

    
  return <>
  <Container fluid>
    <Row style={{height:"100vh"}}>
      <Col sm="3" style={{marginTop:"20px"}} >
        <AsideMenu />
      </Col>
      <Col sm="9" style={{marginTop:"20px"}}>
        <div style={{height:"96vh",border:"2px solid black",margin:"auto"}}>
          DASHBOARD
        </div>
      </Col>
    </Row>
  </Container>
  
  
  </>
  
}

import { Switch } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { STRINGS } from "../utils/Enums";

export default function Login() {
  const label = { inputProps: { "aria-label": "Color switch demo" } };
  let navigate=useNavigate()

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
        marginBottom: "40px",
      }}
    >
      <Container fluid>
        <Row>
          <Col md="3"></Col>
          <Col style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{fontWeight:'700',fontSize:"20px",fontFamily:"Helvetica bold "}}>INSPO</p>
              <div className="downloadBtn">
                <p style={{fontSize:"10px",fontWeight:"700",paddingTop:"4px"}}>DOWNLOAD INSPO</p>
              </div>
          </Col>
          <Col md="3"></Col>
        </Row>
        <Row style={{ marginTop: "35px" }}>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "30px", fontWeight: "700",fontFamily:"Helvetica bold" }}> HELLO!!!</p>
            <p style={{fontFamily:"Helvetica "}}> LOGIN INSPIRING ADMINS AND DO ADMIN THINGS </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "35px" }}>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
            className="loginBox"
              style={{
                width: "30vw",
                height: "400px",
                border: "2px solid black",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "15px",
                  marginRight: "15px",
                  marginTop: "35px",
                  fontFamily:"Helvetica ",
                  fontSize:"15px"
                }}
              >
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter Email"
                    type="email"
                    style={{ border: "2px solid black", height: "50px" }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Password</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Enter Password"
                    type="password"
                    style={{ border: "2px solid black", height: "50px" }}
                  />
                </FormGroup>
                <Label check>Remember me</Label>

                <Switch {...label} defaultChecked color="default" />

                <Container
                 onClick={()=>navigate(STRINGS.ROUTES.DASHBOARD)}>
                  <div className="loginBtn">
                    <p>LETS GO</p>
                  </div>
                </Container>
              </div>
            </div>
          </Col>
        </Row>

        <Row style={{ marginTop: "60px" }}>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <p>IF YOU ARE A USER THIS PAGE IS NOT FOR YOU PLEASE CLICK HERE</p>
              <Container>
                <div className="loginBtn">
                  <p>BUTTON</p>
                </div>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

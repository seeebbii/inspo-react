import React from "react";
import { STRINGS } from "../utils/Enums";
import { Container, Row, Col } from "reactstrap";
import { faHouse,faChartSimple,faWrench, faUser, faFile,faSheetPlastic, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AsideMenu() {
  return (
    <div
      style={{
        height: "82vh",
        border: "2px solid black",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <div style={{ marginTop: "8px" }}>
        <p
          style={{
            fontSize: "24px",
            textAlign: "center",
            fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
          }}
        >
          INSPO
        </p>
      </div>
      <hr />

      <Container style={{marginBottom:"8px"}}>
        <div
          style={{
            height:"45px",
            cursor:"pointer",
            alignItems: "center",
            borderRadius:"8px",
            border: "2px solid black",
            padding: "5px 10px",
          }}
        >
          <Row>
            <Col md='2'>
              <div className="menuIcon">
                <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff",fontSize:"12px" }} />
              </div>
            </Col>

            <Col md='8'>
              <div>
                <p
                  style={{
                    paddingTop: "6px",
                    color: "black",
                    fontSize:"12px",

                    fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                  }}
                >
                  {" "}
                  Dashboard
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Container style={{marginBottom:"8px"}}>
        <div
          style={{
            height:"45px",
            cursor:"pointer",
            alignItems: "center",
            borderRadius:"8px",
            // border: "2px solid black",
            padding: "5px 10px",
          }}
        >
          <Row>
            <Col md='2'>
              <div className="menuIcon">
                <FontAwesomeIcon icon={faChartSimple} style={{ color: "#ffffff",fontSize:"12px" }} />
              </div>
            </Col>

            <Col md='8'>
              <div>
                <p
                  style={{
                    paddingTop: "6px",
                    color: "black",
                    fontSize:"12px",

                    fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                  }}
                >
                  {" "}
                  Tables
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      
      <Container style={{marginBottom:"8px"}}>
        <div
          style={{
            height:"45px",
            cursor:"pointer",
            alignItems: "center",
            borderRadius:"8px",
            // border: "2px solid black",
            padding: "5px 10px",
          }}
        >
          <Row>
            <Col md='2'>
              <div className="menuIcon">
                <FontAwesomeIcon icon={faWrench} style={{ color: "#ffffff",fontSize:"12px" }} />
              </div>
            </Col>

            <Col md='8'>
              <div>
                <p
                  style={{
                    paddingTop: "6px",
                    color: "black",
                    fontSize:"12px",

                    fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                  }}
                >
                  {" "}
                  RTL
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      
      <Container style={{marginBottom:"8px"}}>
        <div
          style={{
            height:"45px",
            cursor:"pointer",
            alignItems: "center",
            borderRadius:"8px",
            // border: "2px solid black",
            padding: "5px 10px",
          }}
        >
          <Row>
            <Col >
              <div>
                <p
                  style={{
                    paddingTop: "6px",
                    color: "black",
                    fontSize:"13px",

                    fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                  }}
                >
                  {" "}
                  ACCOUNTS PAGES
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Container style={{marginBottom:"8px"}}>
        <div
          style={{
            height:"45px",
            cursor:"pointer",
            alignItems: "center",
            borderRadius:"8px",
            // border: "2px solid black",
            padding: "5px 10px",
          }}
        >
          <Row>
            <Col md='2'>
              <div className="menuIcon">
                <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff",fontSize:"12px" }} />
              </div>
            </Col>

            <Col md='8'>
              <div>
                <p
                  style={{
                    paddingTop: "6px",
                    color: "black",
                    fontSize:"12px",

                    fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                  }}
                >
                  {" "}
                  PROFILE
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container style={{marginBottom:"8px"}}>
        <div
          style={{
            height:"45px",
            cursor:"pointer",
            alignItems: "center",
            borderRadius:"8px",
            // border: "2px solid black",
            padding: "5px 10px",
          }}
        >
          <Row>
            <Col md='2'>
              <div className="menuIcon">
                <FontAwesomeIcon icon={faFile} style={{ color: "#ffffff",fontSize:"12px" }} />
              </div>
            </Col>

            <Col md='8'>
              <div>
                <p
                  style={{
                    paddingTop: "6px",
                    color: "black",
                    fontSize:"12px",

                    fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                  }}
                >
                  {" "}
                  APPROVAL
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container style={{marginBottom:"8px"}}>
        <div
          style={{
            height:"45px",
            cursor:"pointer",
            alignItems: "center",
            borderRadius:"8px",
            // border: "2px solid black",
            padding: "5px 10px",
          }}
        >
          <Row>
            <Col md='2'>
              <div className="menuIcon">
                <FontAwesomeIcon icon={faSheetPlastic} style={{ color: "#ffffff",fontSize:"12px" }} />
              </div>
            </Col>

            <Col md='8'>
              <div>
                <p
                  style={{
                    paddingTop: "6px",
                    color: "black",
                    fontSize:"12px",

                    fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                  }}
                >
                  {" "}
                  FORMS
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container style={{marginBottom:"8px"}}>
        <div
          style={{
            height:"45px",
            cursor:"pointer",
            alignItems: "center",
            borderRadius:"8px",
            // border: "2px solid black",
            padding: "5px 10px",
          }}
        >
          <Row>
            <Col md='2'>
              <div className="menuIcon">
                <FontAwesomeIcon icon={faRocket} style={{ color: "#ffffff",fontSize:"12px" }} />
              </div>
            </Col>

            <Col md='8'>
              <div>
                <p
                  style={{
                    paddingTop: "6px",
                    color: "black",
                    fontSize:"12px",

                    fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                  }}
                >
                  {" "}
                  RATINGS
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      
    </div>
  );
}

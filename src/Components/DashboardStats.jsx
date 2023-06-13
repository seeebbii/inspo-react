import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { faFile, faGlobe, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { STRINGS } from '../utils/Enums';

export default function DashboardStats() {
  return (
    <Container fluid style={{ marginTop: "10px" }}>
    <Row>
      <Col md="3">
        <div
          style={{
            border: "2px solid black",
            borderRadius: "8px",
            padding: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                }}
              >
                TODAY'S SIGN UP <br /> 567
              </p>
            </div>

            <div className="menuIcon">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#ffffff", fontSize: "12px" }}
              />
            </div>
          </div>
          <p
            style={{
              // lineHeight: "5px",
              marginBottom: "0px",
              color: "green",
              fontSize: "11px",
              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
            }}
          >
            +3.84%{" "}
            <span style={{ color: "gray" }}>Since Last Month</span>
          </p>
        </div>
      </Col>
      <Col md="3">
        <div
          style={{
            border: "2px solid black",
            borderRadius: "8px",
            padding: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                }}
              >
                TODAY'S USERS  <br /> 7,020
              </p>
            </div>

            <div className="menuIcon">
              <FontAwesomeIcon
                icon={faGlobe}
                style={{ color: "#ffffff", fontSize: "12px" }}
              />
            </div>
          </div>
          <p
            style={{
              // lineHeight: "5px",
              marginBottom: "0px",
              color: "green",
              fontSize: "11px",
              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
            }}
          >
            +5.84%{" "}
            <span style={{ color: "gray" }}>Since Last Month</span>
          </p>
        </div>
      </Col>
      <Col md="3">
        <div
          style={{
            border: "2px solid black",
            borderRadius: "8px",
            padding: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                }}
              >
               ACCEPTED <br /> 12,400
              </p>
            </div>

            <div className="menuIcon">
              <FontAwesomeIcon
                icon={faFile}
                style={{ color: "#ffffff", fontSize: "12px" }}
              />
            </div>
          </div>
          <p
            style={{
              // lineHeight: "5px",
              marginBottom: "0px",
              color: "green",
              fontSize: "11px",
              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
            }}
          >
            +7.84%{" "}
            <span style={{ color: "gray" }}>Since Last Month</span>
          </p>
        </div>
      </Col>

      <Col md="3">
        <div
          style={{
            border: "2px solid black",
            borderRadius: "8px",
            padding: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                }}
              >
                DENIED <br /> 15,020
              </p>
            </div>

            <div className="menuIcon">
              <FontAwesomeIcon
                icon={faFile}
                style={{ color: "#ffffff", fontSize: "12px" }}
              />
            </div>
          </div>
          <p
            style={{
              // lineHeight: "5px",
              marginBottom: "0px",
              color: "green",
              fontSize: "11px",
              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
            }}
          >
            +7.12%{" "}
            <span style={{ color: "gray" }}>Since Last Month</span>
          </p>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

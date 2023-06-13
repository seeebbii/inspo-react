import { Col, Container, Row } from "reactstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { STRINGS } from "../../utils/Enums";
import ApprovalsTable from "../DataTables/ApprovalsTable";

export default function Influencer() {
  return (
    <>
      <Container fluid>
        <Row style={{ height: "100vh" }}>
          <Col style={{ marginTop: "20px" }}>
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
            <Container fluid >
              <Row>
                <Col>
                  <div
                  className="customScroll"
                    style={{
                      border: "2px solid black",
                      borderRadius: "8px",
                      height:"90vh",
                      overflow:"auto",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "15px ",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "17px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                        }}
                      >
                       CONCEPT APPROVAL<br />{" "}
                      </p>
                      <div className="dashboardBtn">
                        <p style={{ fontSize: "11px", fontWeight: "700" }}>
                          SEE ALL
                        </p>
                      </div>
                    </div>

                    <ApprovalsTable type="CONCEPT" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

import { Col, Container, Row } from "reactstrap";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { STRINGS } from "../utils/Enums";
import {
  faFile,
  faGlobe,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Chart from "react-apexcharts";
import DashboardStats from "../Components/DashboardStats";
import PageVisitsTable from "../Components/DataTables/PageVisitsTable";
import SocialVisits from "../Components/DataTables/SocialVisits";

export default function Dashboard() {
  let initialStateLine = {
    options: {
      stroke: {
        curve: "smooth",
        width: 2,
      },
      colors: ["#000000"],
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [98, 200, 250, 160, 220, 320, 400, 420, 485, 520, 420, 350],
      },
      {
        name: "data2",
        data: [420, 218, 230, 190, 350, 410, 370, 320, 420, 480, 460, 500],
      },
    ],
  };

  let initialStateBar = {
    options: {
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          barWidth: 10,
        },
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#000000"],
      chart: {
        type: "bar",
        width: 50,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "March", "April", "May"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [10, 22, 15, 26, 25],
      },
    ],
  };

  const [graphConfig, setGraphConfig] = useState(initialStateLine);
  const [barGraphConfig, setBarGraphConfig] = useState(initialStateBar);

  return (
    <>
      <Container fluid>
        <Row>
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

            {/* DASHBOARD STATISTICS */}
            <DashboardStats />

            {/* Graphs */}

            <Container style={{ marginTop: "10px" }}>
              <Row>
                <Col md="8">
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
                            fontSize: "13px",
                            fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                          }}
                        >
                          OVERVIEW <br />{" "}
                          <p
                            style={{
                              fontSize: "11px",
                              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                            }}
                          >
                            (+5) more IN 2023{" "}
                          </p>
                        </p>
                      </div>
                    </div>

                    <Chart
                      options={graphConfig.options}
                      series={graphConfig.series}
                      type="line"
                      // width="500"
                    />
                  </div>
                </Col>

                <Col
                  md="4"
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
                        PERFORMANCE
                      </p>
                    </div>
                  </div>
                  <Chart
                    options={barGraphConfig.options}
                    series={barGraphConfig.series}
                    type="bar"
                    height={400}
                    // width="500"
                  />
                </Col>
              </Row>
            </Container>

            {/* DATA TABLES  */}

            <Container style={{ marginTop: "10px" }}>
              <Row>
                <Col md="8">
                  <div
                    style={{
                      border: "2px solid black",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding:"15px "
                      }}
                    >
                        <p
                          style={{
                            fontSize: "17px",
                            fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                          }}
                        >
                          PAGE VISITS <br />{" "}
                        </p>
                        <div className="dashboardBtn">
                          <p style={{ fontSize: "11px", fontWeight: "700" }}>
                           SEE ALL
                          </p>
                      </div>
                    </div>

                    <PageVisitsTable />        

                  </div>
                </Col>

                <Col
                  md="4"
                  style={{
                    border: "2px solid black",
                    borderRadius: "8px",
                  }}
                >
                     
                    <div
                  
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding:"15px "
                      }}
                    >
                        <p
                          style={{
                            fontSize: "17px",
                            fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                          }}
                        >
                          SOCIAL VISITS <br />{" "}
                        </p>
                        <div className="dashboardBtn">
                          <p style={{ fontSize: "11px", fontWeight: "700" }}>
                           SEE ALL
                          </p>
                      </div>
                    </div>

                    <SocialVisits />        

                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}

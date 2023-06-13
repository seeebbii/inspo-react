import { Col, Container, Row } from "reactstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { STRINGS } from "../utils/Enums";
import { Switch } from "@mui/material";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import boxThreeImg from "../assets/Images/boxThreeImg.png";
import launch from "../assets/Images/launch.jpg";

export default function Profile() {
  const label = { inputProps: { "aria-label": "Color switch demo" } };

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
            {/* Profile Portion    */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Container fluid> 
                <Row>
                  <Col>
                    <div
                      style={{
                        marginTop: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          height: "80px",
                          width: "80px",
                          backgroundColor: "lightGrey",
                          borderRadius: "5px",
                        }}
                      ></div>
                      <div
                        style={{
                          marginLeft: "8px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "13px",
                            fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                            lineHeight: "17px",
                          }}
                        >
                          INSPIRED EDIBLES <br />{" "}
                          <span
                            style={{
                              fontSize: "13px",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                            }}
                          >
                            OSAMA@INSPO.COM{" "}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" style={{ margin: "auto" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="profileBtn">
                        <p style={{ paddingTop: "13px" }}>OVERVIEW</p>
                      </div>
                      <div className="profileBtn">
                        <p style={{ paddingTop: "13px" }}>TEAMS</p>
                      </div>
                      <div className="profileBtn">
                        <p style={{ paddingTop: "13px" }}>PROJECTS</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <br />

            {/* Settings portion */}

            <Container fluid>
              <Row>
                {/* BOX one */}
                <Col md="4">
                  <div
                  className="customScroll"
                    style={{
                      border: "2px solid black",
                      borderRadius: "8px",
                      height: "325px",
                      overflow:"auto",
                      padding: "12px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                        lineHeight: "17px",
                      }}
                    >
                      Platform Settings
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                        lineHeight: "8px",
                      }}
                    >
                      Account
                    </p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Switch
                        size="small"
                        {...label}
                        defaultChecked
                        color="default"
                      />

                      <p
                        style={{
                          fontSize: "10px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                          lineHeight: "10px",
                          paddingTop: "15px",
                        }}
                      >
                        Email me when someone follows me
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Switch
                        size="small"
                        {...label}
                        defaultChecked
                        color="default"
                      />

                      <p
                        style={{
                          fontSize: "10px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                          lineHeight: "10px",

                          paddingTop: "15px",
                        }}
                      >
                        Email me when someone answers on my post
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Switch
                        size="small"
                        {...label}
                        defaultChecked
                        color="default"
                      />

                      <p
                        style={{
                          fontSize: "10px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                                                    lineHeight: "10px",

                          paddingTop: "15px",
                        }}
                      >
                        Email me when someone mentions me
                      </p>
                    </div>
                    <br />
                    <p
                      style={{
                        fontSize: "11px",
                        fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                        lineHeight: "8px",
                      }}
                    >
                      APPLICATION
                    </p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Switch
                        size="small"
                        {...label}
                        defaultChecked
                        color="default"
                      />
                      <p
                        style={{
                          fontSize: "10px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                                                    lineHeight: "10px",

                          paddingTop: "15px",
                        }}
                      >
                        New launches and projects
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Switch
                        size="small"
                        {...label}
                        defaultChecked
                        color="default"
                      />

                      <p
                        style={{
                          fontSize: "10px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                                                  lineHeight: "10px",

                          paddingTop: "15px",
                        }}
                      >
                        Monthly product updates
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Switch
                        size="small"
                        {...label}
                        defaultChecked
                        color="default"
                      />

                      <p
                        style={{
                          fontSize: "10px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                                                  lineHeight: "10px",

                          paddingTop: "15px",
                        }}
                      >
                        Subscribe to newsletter
                      </p>
                    </div>
                  </div>
                </Col>
                {/* Box two */}
                <Col md="4">
                  <div
                  className="customScroll"
                    style={{
                      border: "2px solid black",
                      borderRadius: "8px",
                      height: "325px",
                      padding: "15px",
                      overflow:"auto"
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                        lineHeight: "17px",
                      }}
                    >
                      Profile Information
                    </p>
                    <p
                      style={{
                        fontSize: "11px",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                        lineHeight: "17px",
                      }}
                    >
                      Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                      answer is no. If two equally difficult paths, choose the
                      one more painful in the short term (pain avoidance is
                      creating an illusion of equality).
                    </p>
                    <hr />

                    <div style={{ display: "flex" }}>
                      <p
                        style={{
                          marginRight: "5px",
                          fontSize: "11px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                        }}
                      >
                        Full Name :{" "}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        Osama Edibles
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p
                        style={{
                          marginRight: "5px",
                          fontSize: "11px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                        }}
                      >
                        Mobile :{" "}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        +923362524521
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p
                        style={{
                          marginRight: "5px",
                          fontSize: "11px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                        }}
                      >
                        Email :{" "}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        OSAMA@INSPO.COM
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p
                        style={{
                          marginRight: "5px",
                          fontSize: "11px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                        }}
                      >
                        Location :{" "}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        Kuwait
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p
                        style={{
                          marginRight: "5px",
                          fontSize: "11px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                        }}
                      >
                        Social Media :{" "}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          style={{
                            color: "black",
                            fontSize: "12px",
                            marginRight: "10px",
                          }}
                        />
                        <FontAwesomeIcon
                          icon={faInstagram}
                          style={{ color: "black", fontSize: "12px" }}
                        />
                      </p>
                    </div>
                  </div>
                </Col>
                {/* Box three */}
                <Col md="4" >
                  <div
                  className="customScroll"
                    style={{
                      border: "2px solid black",
                      borderRadius: "8px",
                      height: "325px",
                      padding: "15px",
                      overflow:"auto"
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                        lineHeight: "17px",
                      }}
                    >
                      Conversations
                    </p>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <img
                          src={boxThreeImg}
                          style={{ borderRadius: "8px" }}
                          width={40}
                          height={40}
                        />
                        <div style={{ marginLeft: "8px" }}>
                          <p
                            style={{
                              fontSize: "11px",
                              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                            }}
                          >
                            Esthera Jackson <br />{" "}
                            <span
                              style={{
                                fontSize: "11px",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                              }}
                            >
                              Hi! I need more informations...
                            </span>
                          </p>
                        </div>
                      </div>

                      <p
                        style={{
                          fontSize: "11px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                          lineHeight: "17px",
                        }}
                      >
                        Reply
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "5px",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <img
                          src={boxThreeImg}
                          style={{ borderRadius: "8px" }}
                          width={40}
                          height={40}
                        />
                        <div style={{ marginLeft: "8px" }}>
                          <p
                            style={{
                              fontSize: "11px",
                              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                            }}
                          >
                            Esthera Jackson <br />{" "}
                            <span
                              style={{
                                fontSize: "11px",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                              }}
                            >
                              Hi! I need more informations...
                            </span>
                          </p>
                        </div>
                      </div>

                      <p
                        style={{
                          fontSize: "11px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                          lineHeight: "17px",
                        }}
                      >
                        Reply
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "5px",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <img
                          src={boxThreeImg}
                          style={{ borderRadius: "8px" }}
                          width={40}
                          height={40}
                        />
                        <div style={{ marginLeft: "8px" }}>
                          <p
                            style={{
                              fontSize: "11px",
                              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                            }}
                          >
                            Esthera Jackson <br />{" "}
                            <span
                              style={{
                                fontSize: "11px",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                              }}
                            >
                              Hi! I need more informations...
                            </span>
                          </p>
                        </div>
                      </div>

                      <p
                        style={{
                          fontSize: "11px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                          lineHeight: "17px",
                        }}
                      >
                        Reply
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "5px",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <img
                          src={boxThreeImg}
                          style={{ borderRadius: "8px" }}
                          width={40}
                          height={40}
                        />
                        <div style={{ marginLeft: "8px" }}>
                          <p
                            style={{
                              fontSize: "11px",
                              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                            }}
                          >
                            Esthera Jackson <br />{" "}
                            <span
                              style={{
                                fontSize: "11px",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                              }}
                            >
                              Hi! I need more informations...
                            </span>
                          </p>
                        </div>
                      </div>

                      <p
                        style={{
                          fontSize: "11px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                          lineHeight: "17px",
                        }}
                      >
                        Reply
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "5px",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <img
                          src={boxThreeImg}
                          style={{ borderRadius: "8px" }}
                          width={40}
                          height={40}
                        />
                        <div style={{ marginLeft: "8px" }}>
                          <p
                            style={{
                              fontSize: "11px",
                              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                            }}
                          >
                            Esthera Jackson <br />{" "}
                            <span
                              style={{
                                fontSize: "11px",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                              }}
                            >
                              Hi! I need more informations...
                            </span>
                          </p>
                        </div>
                      </div>

                      <p
                        style={{
                          fontSize: "11px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                          lineHeight: "17px",
                        }}
                      >
                        Reply
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>

            {/* PROJECT  */}

            <Container fluid style={{ margin: "10px 0px" }}>
              <Row>
                <Col>
                  <div
                    style={{
                      border: "2px solid black",
                      borderRadius: "8px",
                      height: "auto",
                      padding: "12px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                        lineHeight: "17px",
                      }}
                    >
                      PROJECTS
                    </p>
                    <Container>
                      <Row>
                        <Col md="4">
                          <div style={{width:"100%"}}>
                          <img 
                            src={launch}
                            style={{display:"block", borderRadius: "8px" }}
                            height={150}
                          />{" "}
                          </div>
                          <br />
                          <span
                            style={{
                              fontSize: "11px",
                              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                            }}
                          >
                            Project # 2
                          </span>
                          <br />
                          <span
                            style={{
                              fontSize: "14px",
                              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                            }}
                          >
                            LAUNCH
                          </span>{" "}
                          <br />
                          <p
                            style={{
                              fontSize: "11px",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              lineHeight: "12px",
                            }}
                          >
                            As Uber works through a huge amount of internal
                            management turmoil.
                          </p>
                          <div className="viewAllBtn">
                            <p
                              style={{
                                paddingTop: "15px",
                                paddingRight: "15px",
                                paddingLeft: "15px",
                              }}
                            >
                              VIEW ALL
                            </p>
                          </div>
                        </Col>
                       
                        <Col md="4">
                          <div style={{width:"100%"}}>
                          <img 
                            src={launch}
                            style={{display:"block", borderRadius: "8px" }}
                            height={150}
                          />{" "}
                          </div>
                          <br />
                          <span
                            style={{
                              fontSize: "11px",
                              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                            }}
                          >
                            Project # 2
                          </span>
                          <br />
                          <span
                            style={{
                              fontSize: "14px",
                              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                            }}
                          >
                            LAUNCH
                          </span>{" "}
                          <br />
                          <p
                            style={{
                              fontSize: "11px",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              lineHeight: "12px",
                            }}
                          >
                            As Uber works through a huge amount of internal
                            management turmoil.
                          </p>
                          <div className="viewAllBtn">
                            <p
                              style={{
                                paddingTop: "15px",
                                paddingRight: "15px",
                                paddingLeft: "15px",
                              }}
                            >
                              VIEW ALL
                            </p>
                          </div>
                        </Col>
                       
                        <Col md="4">
                          <div style={{width:"100%"}}>
                          <img 
                            src={launch}
                            style={{display:"block", borderRadius: "8px" }}
                            height={150}
                          />{" "}
                          </div>
                          <br />
                          <span
                            style={{
                              fontSize: "11px",
                              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                            }}
                          >
                            Project # 2
                          </span>
                          <br />
                          <span
                            style={{
                              fontSize: "14px",
                              fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                            }}
                          >
                            LAUNCH
                          </span>{" "}
                          <br />
                          <p
                            style={{
                              fontSize: "11px",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              lineHeight: "12px",
                            }}
                          >
                            As Uber works through a huge amount of internal
                            management turmoil.
                          </p>
                          <div className="viewAllBtn">
                            <p
                              style={{
                                paddingTop: "15px",
                                paddingRight: "15px",
                                paddingLeft: "15px",
                              }}
                            >
                              VIEW ALL
                            </p>
                          </div>
                        </Col>
                       
                      </Row>
                    </Container>
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

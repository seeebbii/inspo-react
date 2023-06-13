import { Col, Container, Row } from "reactstrap";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { STRINGS } from "../utils/Enums";
import { Switch } from "@mui/material";
import boxThreeImg from "../assets/Images/boxThreeImg.png";
import SocialVisits from "../Components/DataTables/SocialVisits";
import FormsTable from "../Components/DataTables/FormsTable";

export default function Forms() {

  const label = { inputProps: { "aria-label": "Color switch demo" } };

  const [init, setInit] = useState({
    selectedTab: 0,
  });

  
  let { selectedTab } = init;

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
            {/* Form Header Portion    */}
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
                      <p
                        style={{
                          fontSize: "13px",
                          fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                          marginTop: "16px",
                        }}
                      >
                        CONCEPT NAME
                      </p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          height: "35px",
                          border: "2px solid black",
                          borderRadius: "8px",
                          padding: "3px 5px",
                          width: "20vw",
                          marginLeft: "8px",
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
                            width: "20vw",
                            marginLeft: "10px",
                          }}
                          placeholder="Search"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" style={{ margin: "auto" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        onClick={() => setInit({ ...init, selectedTab: 0 })}
                        className={`formBtn ${selectedTab == 0 && "active"}`}
                        style={{ marginRight: "5px" }}
                      >
                        <p style={{ paddingTop: "15px" }}>PENDINGS</p>
                      </div>
                      <div
                        onClick={() => setInit({ ...init, selectedTab: 1 })}
                        className={`formBtn ${selectedTab == 1 && "active"}`}
                        style={{ marginRight: "5px" }}
                      >
                        <p style={{ paddingTop: "15px" }}>RATINGS</p>
                      </div>
                      <div
                        onClick={() => setInit({ ...init, selectedTab: 2 })}
                        className={`formBtn ${selectedTab == 2 && "active"}`}
                        style={{ marginRight: "5px" }}
                      >
                        <p style={{ paddingTop: "15px" }}>SCHEDULED</p>
                      </div>
                      <Switch {...label} defaultChecked color="default" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <br />

            {/* PENDING FORM TABS   */}
            {selectedTab==0 &&
             <Container fluid
             style={{
               border: "2px solid black",
               borderRadius: "8px",
               height: "80vh",
               marginBottom:"20px"
             }}
           >
             <Row>
               <Col
                 md="5"
                 style={{
                   display: "flex",
                   flexDirection: "column",
                   alignItems: "center",
                   justifyContent: "center",
                   height: "70vh",
                 }}
               >
                 <div
                   style={{
                     display: "flex",
                     alignItems: "center",
                     padding: "15px",
                   }}
                 >
                   <img
                     src={boxThreeImg}
                     height={120}
                     width={120}
                     style={{ borderRadius: "10px" }}
                   />
                   <div>
                     <p
                       style={{
                         fontSize: "27px",
                         fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                         marginTop: "16px",
                         lineHeight: "25px",
                         marginLeft: "10px",
                       }}
                     >
                       PENDING Tab <br />{" "}
                       <span
                         style={{
                           fontSize: "24px",
                           fontFamily: STRINGS.FONTS.HELVITICA,
                         }}
                       >
                         GC@simmmple.com
                       </span>
                     </p>
                   </div>
                 </div>
                 <br />
                 <br />
                 <p
                   style={{
                     fontSize: "15px",
                     fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                   }}
                 >
                   Pick Concept
                 </p>
                 <div
                 className="customScroll"
                   style={{
                     height: "320px",
                     width: "240px",
                     border: "2px solid black",
                     padding:"10px",
                     overflow:"auto"
                   }}
                 >
                   <div style={{ display: "flex",marginBottom:"5px" }}>
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
                   <div style={{ display: "flex",marginBottom:"5px" }}>
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
                   <div style={{ display: "flex",marginBottom:"5px" }}>
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
                   <div style={{ display: "flex",marginBottom:"5px" }}>
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
                   <div style={{ display: "flex",marginBottom:"5px" }}>
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
                   <div style={{ display: "flex",marginBottom:"5px" }}>
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
                   <div style={{ display: "flex",marginBottom:"5px" }}>
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
                 </div>
               </Col>
               <Col md="7" className="customScroll"  style={{ height: "75vh",overflow:"auto"}}>
                  <FormsTable/>         
               </Col>
             </Row>
           </Container>}

            {/* Ratings FORM TABS   */}
          { selectedTab==1 && 
             <Container fluid
             style={{
               border: "2px solid black",
               borderRadius: "8px",
               height: "80vh",
               marginBottom:"20px"
             }}
           >
             <Row>
               <Col
                 md="5"
                 style={{
                   display: "flex",
                   flexDirection: "column",
                   alignItems: "center",
                   justifyContent: "center",
                   height: "70vh",
                 }}
               >
                 <div
                   style={{
                     display: "flex",
                     alignItems: "center",
                     padding: "15px",
                   }}
                 >
                   <img
                     src={boxThreeImg}
                     height={120}
                     width={120}
                     style={{ borderRadius: "10px" }}
                   />
                   <div>
                     <p
                       style={{
                         fontSize: "27px",
                         fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                         marginTop: "16px",
                         lineHeight: "25px",
                         marginLeft: "10px",
                       }}
                     >
                       Rating Tab <br />{" "}
                       <span
                         style={{
                           fontSize: "24px",
                           fontFamily: STRINGS.FONTS.HELVITICA,
                         }}
                       >
                         GC@simmmple.com
                       </span>
                     </p>
                   </div>
                 </div>
                 <br />
                 <br />
                 <p
                   style={{
                     fontSize: "15px",
                     fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                   }}
                 >
                   Pick Concept
                 </p>
                 <div
                 className="customScroll"
                   style={{
                     height: "320px",
                     width: "240px",
                     border: "2px solid black",
                     padding:"10px",
                     overflow:"auto"
                   }}
                 >
                   <div style={{ display: "flex",marginBottom:"5px" }}>
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
                   <div style={{ display: "flex",marginBottom:"5px" }}>
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
                   <div style={{ display: "flex",marginBottom:"5px" }}>
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
                   <div style={{ display: "flex",marginBottom:"5px" }}>
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
                   <div style={{ display: "flex",marginBottom:"5px" }}>
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
                   <div style={{ display: "flex",marginBottom:"5px" }}>
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
                   <div style={{ display: "flex",marginBottom:"5px" }}>
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
                 </div>
               </Col>
               <Col md="7" className="customScroll"  style={{ height: "75vh",overflow:"auto"}}>
                  <FormsTable/>         
               </Col>
             </Row>
           </Container>}

            {/* Scheduled FORM TABS   */}
            {selectedTab==2 &&
                <Container fluid
                style={{
                  border: "2px solid black",
                  borderRadius: "8px",
                  height: "80vh",
                  marginBottom:"20px"
                }}
              >
                <Row>
                  <Col
                    md="5"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "70vh",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "15px",
                      }}
                    >
                      <img
                        src={boxThreeImg}
                        height={120}
                        width={120}
                        style={{ borderRadius: "10px" }}
                      />
                      <div>
                        <p
                          style={{
                            fontSize: "27px",
                            fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                            marginTop: "16px",
                            lineHeight: "25px",
                            marginLeft: "10px",
                          }}
                        >
                          Scheduled Tab <br />{" "}
                          <span
                            style={{
                              fontSize: "24px",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                            }}
                          >
                            GC@simmmple.com
                          </span>
                        </p>
                      </div>
                    </div>
                    <br />
                    <br />
                    <p
                      style={{
                        fontSize: "15px",
                        fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
                      }}
                    >
                      Pick Concept
                    </p>
                    <div
                    className="customScroll"
                      style={{
                        height: "320px",
                        width: "240px",
                        border: "2px solid black",
                        padding:"10px",
                        overflow:"auto"
                      }}
                    >
                      <div style={{ display: "flex",marginBottom:"5px" }}>
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
                      <div style={{ display: "flex",marginBottom:"5px" }}>
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
                      <div style={{ display: "flex",marginBottom:"5px" }}>
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
                      <div style={{ display: "flex",marginBottom:"5px" }}>
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
                      <div style={{ display: "flex",marginBottom:"5px" }}>
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
                      <div style={{ display: "flex",marginBottom:"5px" }}>
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
                      <div style={{ display: "flex",marginBottom:"5px" }}>
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
                    </div>
                  </Col>
                  <Col md="7" className="customScroll"  style={{ height: "75vh",overflow:"auto"}}>
                     <FormsTable/>         
                  </Col>
                </Row>
              </Container>
            }
          </Col>
        </Row>
      </Container>
    </>
  );


}

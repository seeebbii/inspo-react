import React from "react";
import { Container, Col, Row } from "reactstrap";
import AsideMenu from "../Components/AsideMenu/AsideMenu";
import SideBar from "../Components/SideBar";
import {Layout, theme} from "antd";

export default function MasterLayout({ children }) {
  

  const { Content } = Layout;


  return (
    <>
        <Layout
            style={{
                minHeight: "100vh",
            }}
        >
            <SideBar />
            <Layout className="site-layout">

                <Content >
                    <div
                        style={{
                            // padding: 24,
                            minHeight: 360,
                            background: "white",
                        }}
                    >
                        {children}
                    </div>
                </Content>

            </Layout>
        </Layout>
    </>
  );
}

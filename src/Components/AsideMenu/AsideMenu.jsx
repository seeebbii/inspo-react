import React, { useEffect, useState } from "react";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  FileTextTwoTone,
  TeamOutlined,
  HomeOutlined,
  FileTextOutlined,
  CopyOutlined,
  BankOutlined,
  DollarCircleOutlined,
  SettingOutlined,
  CreditCardOutlined,
  ContainerOutlined,
  TagsOutlined,
  AppstoreOutlined,
  EnvironmentOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Avatar } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { STRINGS } from "../../utils/Enums";

import { Container, Row, Col } from "reactstrap";
import {
  faHouse,
  faChartSimple,
  faWrench,
  faUser,
  faFile,
  faSheetPlastic,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Sider } = Layout;
const { SubMenu } = Menu;

const AsideMenu = ({collapsed}) => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    const pathnames = location.pathname.split("/").filter(Boolean);
   setSelectedKeys([pathnames[0]]);
  }, [location,collapsed]);
   

  return <>
  <div style={{display:"flex",flexDirection:"column",justifyContent:"flex"}}>
    <Menu selectedKeys={selectedKeys} mode="inline">
      <Menu.Item
        key="dashboard"
        icon={
          <div className="menuIcon">
            <FontAwesomeIcon
              icon={faHouse}
              style={{ color: "#ffffff", fontSize: "12px" }}
            />
          </div>
        }
      >
        <Link
          style={{
            textDecorationLine: "none",
            fontSize: "12px",
            fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
            fontWeight: "700",
          }}
          to={`${STRINGS.ROUTES.DASHBOARD}`}
        >
          Dashboard
        </Link>
      </Menu.Item>

      <Menu.Item
        key="tables"
        icon={
          <div className="menuIcon">
            <FontAwesomeIcon
              icon={faChartSimple}
              style={{ color: "#ffffff", fontSize: "12px" }}
            />
          </div>
        }
      >
        <Link
          style={{
            textDecorationLine: "none",
            fontSize: "12px",
            fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
            fontWeight: "700",
          }}
          to={`${STRINGS.ROUTES.TABLES}`}
        >
          Tables
        </Link>
      </Menu.Item>
      <Menu.Item
        key="rtl"
        icon={
          <div className="menuIcon">
            <FontAwesomeIcon
              icon={faWrench}
              style={{ color: "#ffffff", fontSize: "12px" }}
            />
          </div>
        }
      >
        <Link
          style={{
            textDecorationLine: "none",
            fontSize: "12px",
            fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
            fontWeight: "700",
          }}
          to={`${STRINGS.ROUTES.RTL}`}
        >
          RTL
        </Link>
      </Menu.Item>
   {!collapsed &&   <div style={{ padding: "10px 7px" }}>
        <Link
          style={{
            textDecorationLine: "none",
            color: "black",
            fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
          }}
          to={`${STRINGS.ROUTES.RTL}`}
        >
          Account Pages
        </Link>
      </div>}
      <Menu.Item
        key="profile"
        icon={
          <div className="menuIcon">
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "#ffffff", fontSize: "12px" }}
            />
          </div>
        }
      >
        <Link
          style={{
            textDecorationLine: "none",
            fontSize: "12px",
            fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
            fontWeight: "700",
          }}
          to={`${STRINGS.ROUTES.PROFILE}`}
        >
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item
        key="approval"
        icon={
          <div className="menuIcon">
            <FontAwesomeIcon
              icon={faFile}
              style={{ color: "#ffffff", fontSize: "12px" }}
            />
          </div>
        }
      >
        <Link
          style={{
            textDecorationLine: "none",
            fontSize: "12px",
            fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
            fontWeight: "700",
          }}
          to={`${STRINGS.ROUTES.APPROVAL}`}
        >
          Approval
        </Link>
      </Menu.Item>
      <Menu.Item
        key="forms"
        icon={
          <div className="menuIcon">
            <FontAwesomeIcon
              icon={faSheetPlastic}
              style={{ color: "#ffffff", fontSize: "12px" }}
            />
          </div>
        }
      >
        <Link
          style={{
            textDecorationLine: "none",
            fontSize: "12px",
            fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
            fontWeight: "700",
          }}
          to={`${STRINGS.ROUTES.FORMS}`}
        >
          Forms
        </Link>
      </Menu.Item>
      <Menu.Item
        key="ratings"
        icon={
          <div className="menuIcon">
            <FontAwesomeIcon
              icon={faRocket}
              style={{ color: "#ffffff", fontSize: "12px" }}
            />
          </div>
        }
      >
        <Link
          style={{
            textDecorationLine: "none",
            fontSize: "12px",
            fontFamily: STRINGS.FONTS.HELVITICA_BOLD,
            fontWeight: "700",
          }}
          to={`${STRINGS.ROUTES.RATINGS}`}
        >
          Ratings{" "}
        </Link>
      </Menu.Item>
      
    </Menu>

  </div>
      </>
};

export default AsideMenu;

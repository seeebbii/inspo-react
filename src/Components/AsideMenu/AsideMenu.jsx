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

const AsideMenu = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([]);

  // Retrieve the session object from session storage
  const sessionStr = sessionStorage.getItem("user");
  const session = JSON.parse(sessionStr);

  // Access the userType key from the session object
  const userType = session?.userType;
  console.log("type", userType); // print the userType value to the console

  useEffect(() => {
    // Split the pathnames into an array and remove empty items
    const pathnames = location.pathname.split("/").filter(Boolean);
    // Select the first pathname as the selected key
    setSelectedKeys([pathnames[0]]);
  }, [location]);

  return (
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
        <Link style={{textDecorationLine:"none"}}  to={`${STRINGS.ROUTES.DASHBOARD}`}>Dashboard</Link>
      </Menu.Item>

      <Menu.Item
        key="tables"
        icon={
          <div className="menuIcon">
            <FontAwesomeIcon
              icon={faHouse}
              style={{ color: "#ffffff", fontSize: "12px" }}
            />
          </div>
        }
      >
        <Link style={{textDecorationLine:"none"}} to={`${STRINGS.ROUTES.TABLES}`}>Tables</Link>
      </Menu.Item>
      <Menu.Item
        key="rtl"
        icon={
          <div className="menuIcon">
            <FontAwesomeIcon
              icon={faHouse}
              style={{ color: "#ffffff", fontSize: "12px" }}
            />
          </div>
        }
      >
        <Link style={{textDecorationLine:"none"}} to={`${STRINGS.ROUTES.RTL}`}>RTL</Link>
      </Menu.Item>


      {/* <Menu.Item key="9" icon={<FileOutlined />} title="Files">
                <Link to="/files">Files</Link>
            </Menu.Item> */}
    </Menu>
  );
};

export default AsideMenu;

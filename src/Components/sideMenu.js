// Created by :Uday Samineni
// Created On 25-04-2020
// Name:Sidebar Component
import React from "react";
import "antd/dist/antd.css";
import {
  HistoryOutlined,
  UserOutlined,
  CalendarOutlined,
  SettingOutlined,
  DatabaseOutlined,
  HomeOutlined,
  FileOutlined,
  AlignLeftOutlined
} from "@ant-design/icons";

class Sider extends React.Component {
  state = {
    theme: "dark",
    current: "1"
  };

  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light"
    });
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div>
        <div class="sidenav">
          <a href="#" style={{ marginBottom: "10px" }}>
            {" "}
            <AlignLeftOutlined />
          </a>

          <a href="">
            {" "}
            <HomeOutlined />
          </a>
          <a href="#">
            {" "}
            <UserOutlined />
          </a>
          <a href="#">
            {" "}
            <FileOutlined />
          </a>
          <a href="#">
            {" "}
            <HistoryOutlined />
          </a>
          <a href="#">
            {" "}
            <DatabaseOutlined />
          </a>

          <a href="#">
            {" "}
            <CalendarOutlined />
          </a>
          <a href="#">
            {" "}
            <SettingOutlined />
          </a>
        </div>
      </div>
    );
  }
}

export default Sider;

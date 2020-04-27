//Created By:Uday Samineni
//Created on:26-04-2020

import React from "react";
import { Row, Col } from "antd";

const SingleContact = props => {
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Col
      span={8}
      style={{
        backgroundColor: "lightgrey",
        marginTop: "65px",
        marginLeft: "60px",
        height:'50%'
      }}
    >
      <div
        style={{
          backgroundColor: getRandomColor(),
          borderRadius: "40px",
          width: 80,
          height: 80,
          padding: "30px",
          marginLeft: "160px",
          marginTop: "20px",
          color: "white"
        }}
      >
        {props.contact.fullname.split(" ").length >= 2
          ? props.contact.fullname.split(" ")[0][0].toUpperCase() +
            props.contact.fullname.split(" ")[1][0].toUpperCase()
          : props.contact.fullname.charAt(0).toUpperCase() +
            props.contact.fullname.charAt(0).toUpperCase()}
      </div>
      <div style={{ fontSize: "15px", fontWeight: "bold" }}>
        {props.contact.fullname}
      </div>
      <div>{props.contact.company}</div>
      <Col style={{ marginTop: "40px", marginBottom: "20px" }}>
        <Row style={{ marginBottom: "5px" }}>
          <label style={{ color: "grey" }}>Fullname</label>
          <div style={{ marginLeft: "100px", color: "black" }}>
            {props.contact.fullname}
          </div>
        </Row>
        <Row style={{ marginBottom: "5px" }}>
          <label style={{ color: "grey" }}>Company</label>
          <div style={{ marginLeft: "100px", color: "black" }}>
            {props.contact.company}
          </div>
        </Row>
        <Row style={{ marginBottom: "5px" }}>
          <label style={{ color: "grey" }}>Email</label>
          <div style={{ marginLeft: "120px", color: "black" }}>
            {props.contact.email}
          </div>
        </Row>
        <Row style={{ marginBottom: "5px" }}>
          <label style={{ color: "grey" }}>Phone</label>
          <div style={{ marginLeft: "100px", color: "black" }}>
            {props.contact.phone}
          </div>
        </Row>
        <Row style={{ marginBottom: "5px" }}>
          <label style={{ color: "grey" }}>Address</label>
          <div style={{ marginLeft: "100px", color: "black" }}>
            {props.contact.address}
          </div>
        </Row>
      </Col>
    </Col>
  );
};

export default SingleContact;

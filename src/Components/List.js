// Created by :Uday Samineni
// Created On 25-04-2020
// Name:List Component

import React from "react";
import { Row, Col, Checkbox } from "antd";
import chat from "../assets/chat.png";

const List = props => {
  let contacts = props.contacts;
  console.log("Contacts", contacts);
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  let list = (
    <div>
      {contacts.map((item, i) => (
        <Row
          key={i}
          style={{
            padding: "10px",
            marginTop: "30px"
          }}
          span={8}
        >
          <Col span={2}>
            <Checkbox />
          </Col>
          <Col
            span={8}
            onClick={() => {
              props.onContact(item);
            }}
          >
            <Row style={{ marginLeft: "40px" }}>
              <Col
                style={{
                  backgroundColor: getRandomColor(),
                  borderRadius: "20px",
                  padding: "10px"
                }}
                onClick={() => {
                  props.onContact(item);
                }}
              >
                {item.fullname.split(" ").length >= 2
                  ? item.fullname.split(" ")[0][0].toUpperCase() +
                    item.fullname.split(" ")[1][0].toUpperCase()
                  : item.fullname.charAt(0).toUpperCase() +
                    item.fullname.charAt(0).toUpperCase()}
              </Col>
              <Col>
                <div style={{ marginRight: "1rem" }}>{item.fullname}</div>
                <div style={{ marginLeft: "1rem" }}>{item.email}</div>
              </Col>
            </Row>
          </Col>

          <Col span={6}>{item.company}</Col>
          <Col
            span={6}
            onClick={() => {
              let a=[]
             a= props.messages.filter((item,i)=>{
                if(item.reciever===item.fullname){
                  return item
                }
              })
              props.onChatClick(item.fullname,a);
            }}
          >
            <img src={chat} alt="oops...." width="30" height="30" />
          </Col>
        </Row>
      ))}
    </div>
  );
  console.log("List", list);
  return <div>{list}</div>;
};
export default List;

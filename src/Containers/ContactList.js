// Created by :Uday Samineni
// Created On 25-04-2020
// Name:Contact List Component
import React, { useState, useEffect } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import checkValidity from "../Validation/FormValidation";
import Sider from "../Components/sideMenu";
import InboxList from "../Components/InboxList";
import SingleContact from "../Components/SingleContact";
import List from "../Components/List";
import "./index.css";
import ModalComponent from "./Modal";
import ChatModal from "../Components/ChatModal";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import { Row, Col, Menu, Dropdown, message } from "antd";
import {
  MailOutlined,
  DownOutlined,
  BellOutlined,
  ContactsOutlined
} from "@ant-design/icons";
import search from "../assets/search.png";

const ContactList = () => {
  const [visible, setVisible] = useState(false); //State to display dropdown
  const [modal_visible, setModalVisible] = useState(false); //state to maintain modal visibility
  const [chat_modal_visible, setChatModalVisible] = useState(false); //state to maintain chat modal visibility
  const [contact, setContact] = useState(); //state to maintain individual contact details
  const [contact_selected, setContactedSelected] = useState(); //state to maintain selected contact
  const [contact_visible, setContactVisible] = useState(false);
  const [show_inbox, setShowInbox] = useState(false); //state to maintain inbox visibility
  const [reciever, setReciever] = useState(); //state to store chat message reciever
  const [messages, setMessages] = useState([
    { sender: "mike Henry", reciever: "Peter Henry", message: "Hi" },
    { sender: "mike Henry", reciever: "Peter Henry", message: "How are you?" }
  ]); //state to store all the messages two messages are stored for testing
  const [user_messages, setUserMessages] = useState([]);
  const [contacts, setContacts] = useState([
    //state to store all the messages two messages are stored for testing
    { fullname: "Mike Henry", email: "uday@gmail.com", company: "Fission" },
    { fullname: "Peter Henry", email: "uday@gmail.com", company: "Fission" }
  ]);

  const [user, setUser] = useState({ fullname: "Mike Henry", email: "uday@gmail.com", company: "Fission" }); //state to store current user
  const [contact_list, setContactList] = useState({
    firstname: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Search"
      },
      value: "",
      valid: false,
      touched: false,
      validation: {
        required: true
      },
      errorMessage: "Provide the search key*"
    }
  });
  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem("contacts")))
  }, [])
  let FormElements = [];
  for (let key in contact_list) {
    FormElements.push({
      id: key,
      config: contact_list[key]
    });
  }

  let Form = (
    <form>
      {FormElements.map(item => (
        <Input
          elementType={item.config.elementType}
          elementConfig={item.config.elementConfig}
          value={item.value}
          key={item.id}
          invalid={!item.config.valid}
          shouldValidate={item.config.validation}
          touched={item.config.touched}
          errorMessage={item.config.errorMessage}
          changed={e => {
            inputChangeHandler(e, item.id);
          }}
        />
      ))}
    </form>
  );
  const inputChangeHandler = (event, inputIdentifier) => {
    console.log("Event", event.target.value);
    const updatedForm = {
      ...contact_list
    };
    const updatedFormElement = {
      ...contact_list[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedForm[inputIdentifier] = updatedFormElement;
    setContactList(updatedForm);
  };
  const handleSubmit = () => {
    console.log("Hello");
    setModalVisible(true);
  };
  const handleMenuClick = e => {
    if (e.key === "3") {
      setVisible(false);
    }
  };

  const handleVisibleChange = flag => {
    setVisible(flag);
  };
  const menuItemClick = value => {
    setContactedSelected(value);
    let a = [];
    a = messages.filter((item, i) => {
      console.log("Item", item, value, item.reciever === value);
      if (item.reciever == value) {
        return item;
      }
    });
    console.log("AAAAAA", a);
    setUserMessages(a);
    message.success("Logged in as " + value);
  };
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const menu = (
    <Menu onClick={e => handleMenuClick(e)}>
      {contacts.map((item, i) => {
        return (
          <Menu.Item
            onClick={() => {
              menuItemClick(item.fullname);
              setUser(item.fullname);
            }}
          >
            {item.fullname}
          </Menu.Item>
        );
      })}
    </Menu>
  );
  const handleOk = () => {
    console.log("Hi");
    setModalVisible(false);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const formSubmit = value => {
    let a=contacts
    a.push(value)
    setContacts(a)
    localStorage.setItem("contacts",JSON.stringify(a))
    
  };
  const onContactClick = value => {
    
    setContact(value);
    setContactVisible(true);
  };
  const chatClick = value => {
    setReciever(value);
    setChatModalVisible(true);
  };
  const handleChatOk = () => {
    setChatModalVisible(false);
  };
  const handleChatCancel = () => {
    setChatModalVisible(false);
  };
  const chatFormSubmit = value => {
    let obj = {
      sender: user,
      reciever: reciever,
      message: value.message
    };
    messages.push(obj);

    console.log("Hello i am chat submit", obj);
  };
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={1}>
          <Sider />
        </Col>
        <Col className="gutter-row" span={23}>
          <Row>
            <Col className="gutter-row" span={1}>
              <img
                src={search}
                alt="oops..."
                style={{
                  marginTop: "10px",
                  backgroundColor: "#f5f5f0",
                  borderRadius: "15px"
                }}
              />
            </Col>
            <Col span={6} offset={17}>
              <Row justify="space-around" align="middle">
                <Col>
                  <div
                    style={{ marginTop: "12px", fontSize: "18px" }}
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    + Add
                  </div>
                </Col>
                <Col>
                  <div style={{ width: "10px" }}>
                    <NotificationBadge
                      count={user_messages.length}
                      effect={Effect.ROTATE_X}
                    />
                  </div>
                  <MailOutlined
                    style={{
                      marginTop: "12px",
                      fontSize: "14px"
                    }}
                    onClick={() => {
                      setShowInbox(true);
                    }}
                  />
                  {show_inbox && (
                    <div style={{ position: "absolute" }}>
                      <InboxList usermessages={user_messages} />
                    </div>
                  )}
                </Col>
                <Col>
                  <div style={{ marginTop: "12px", fontSize: "12px" }}>
                    <Dropdown
                      overlay={menu}
                      onVisibleChange={e => handleVisibleChange(e)}
                      visible={visible}
                    >
                      <a
                        className="ant-dropdown-link"
                        onClick={e => e.preventDefault()}
                      >
                        {contact_selected
                          ? contact_selected
                          : contacts[0].fullname}{" "}
                        <DownOutlined />
                      </a>
                    </Dropdown>
                  </div>
                </Col>
                <Col>
                  <BellOutlined
                    style={{
                      marginTop: "12px",
                      fontSize: "14px"
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />

          <Row style={{ marginLeft: "70px", marginTop: "50px" }}>
            <Col>
              <Row>
                <ContactsOutlined className="contact_logo" />
                <Col style={{ marginLeft: "10px" }}>
                  <div style={{ fontSize: 25, marginRight: "10rem" }}>
                    Contacts
                  </div>
                  <div style={{ fontSize: 10, marginRight: "2rem" }}>
                    Welcome to FlatCRM Contacts Page
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            span={23}
            style={{ marginTop: "60px", marginLeft: "100px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col span={12} className="gutter-row">
              <Row>
                <div
                  style={{
                    width: "50%",
                    backgroundColor: "lightgrey",
                    borderRadius: "25px",
                    padding: "7px",
                    marginRight: "10px"
                  }}
                >
                  {Form}
                </div>
                <div style={{ width: "20%" }}>
                  <Button handleSubmit={handleSubmit} title="+Add Contact" />
                </div>
              </Row>
              <Row
                style={{
                  backgroundColor: "lightgrey",
                  padding: "10px",
                  marginTop: "30px"
                }}
                span={8}
              >
                <Col span={2}>+</Col>
                <Col span={8} style={{}}>
                  Basic Info
                </Col>
                <Col style={{}} span={6}>
                  Company
                </Col>
                <Col style={{}} span={6}>
                  Chat
                </Col>
              </Row>
              <List
                contacts={contacts}
                onContact={onContactClick}
                onChatClick={chatClick}
              />
            </Col>           
            {contact &&
            <SingleContact contact={contact} />
            }
          </Row>
          <ModalComponent
            visible={modal_visible}
            onhandleOk={() => {
              handleOk();
            }}
            onhandleCancel={() => {
              handleCancel();
            }}
            onFormSubmit={value => {
              formSubmit(value);
            }}
          />
          <ChatModal
            visible={chat_modal_visible}
            onhandleOk={() => {
              handleChatOk();
            }}
            onhandleCancel={() => {
              handleChatCancel();
            }}
            onFormSubmit={value => {
              chatFormSubmit(value);
            }}
            reciever={reciever}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ContactList;

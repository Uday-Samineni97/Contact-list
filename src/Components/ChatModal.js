// Created by :Uday Samineni
// Created On 25-04-2020
// Name:Chat Modal Component
import React, { useState,useEffect } from "react";
import { Modal } from "antd";
import Input from "../Components/Input";
import Button from "../Components/Button";
import checkValidity from "../Validation/FormValidation";

const ChatModal = props => {
  const [RegisterForm, setRegisterForm] = useState({
    //declaring state to get the inputs as specified
    message: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Type your message here..."
      },
      value: "",
      valid: false,
      touched: false,
      validation: {
        required: true
      }
    }
  });

  //Converting RegistrationForm object into array to use map function
  let FormElements = [];
  for (let key in RegisterForm) {
    FormElements.push({
      id: key,
      config: RegisterForm[key]
    });
  }

  //Form to be displayed
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
  //Operation to be done on changing value in input
  const inputChangeHandler = (event, inputIdentifier) => {
    console.log("Event", event.target.value);
    const updatedForm = {
      ...RegisterForm
    };
    const updatedFormElement = {
      ...RegisterForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedForm[inputIdentifier] = updatedFormElement;
    setRegisterForm(updatedForm);
  };
  //Function to be called on clicking Send
  const handleSubmit = () => {
    document.getElementById("chat_room").innerHTML +=
      RegisterForm["message"].value + "<br/>";
    let valid = true;
    let updated = {
      ...RegisterForm
    };
    for (let key in updated) {
      updated[key].touched = true;
      valid = updated[key].valid && valid;
    }

    if (!valid) {
      setRegisterForm(updated);
    } else {
      let obj = {};
      for (let key in updated) {
        Object.assign(obj, {
          [key]: updated[key].value
        });
      }
      props.onFormSubmit(obj);
    }
  };

  return (
    <div>
      <Modal
        title={props.reciever}
        visible={props.visible}
        onOk={props.onhandleOk}
        onCancel={props.onhandleCancel}
      >
        <div id="chat_room" style={{ height: "100px", textAlign: "right" }}>
          <br />
        </div>
        <div style={{ marginBottom: "20px" }}>{Form}</div>
        <Button handleSubmit={handleSubmit} title="Send" />
      </Modal>
    </div>
  );
};

export default ChatModal;

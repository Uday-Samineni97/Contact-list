// Created by :Uday Samineni
// Created On 25-04-2020
// Name:Contact details Component

import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import checkValidity from "../Validation/FormValidation";
import "./index.css";

const ContactForm = () => {
  const [RegisterForm, setRegisterForm] = useState({
    firstname: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "First Name"
      },
      value: "",
      valid: false,
      touched: false,
      validation: {
        required: true
      },
      errorMessage: "First Name is a required Field*"
    },
    lastname: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Last Name"
      },
      value: "",
      valid: false,
      touched: false,
      validation: {
        required: true
      },
      errorMessage: "Last Name is a required Field*"
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Email"
      },
      value: "",
      valid: false,
      touched: false,
      validation: {
        required: true,
        match: ""
      },
      errorMessage: "Email is a required Field*"
    },
    Phone: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Phone"
      },
      value: "",
      valid: false,
      touched: false,
      validation: {
        required: true,
        maxLength: 10
      },
      errorMessage: "Phone is a required Field*"
    },
    Password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password"
      },
      value: "",
      valid: false,
      touched: false,
      validation: {
        required: true
      },
      errorMessage: "Password is a required Field*"
    }
  });
//Converting obj to array
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
  //Function to be called on clicking submit
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
  const handleSubmit = () => {
    console.log("Hello");
    let valid = true;
    let updated = {
      ...RegisterForm
    };
    for (let key in updated) {
      updated[key].touched = true;
      valid = updated[key].valid && valid;
    }
    console.log("Hellov", valid);
    if (!valid) {
      setRegisterForm(updated);
    }
  };
  return (
    <div>
      <h3 className="heading">Register</h3>
      {Form}
      <Button handleSubmit={handleSubmit} title="Sign Up" />
    </div>
  );
};

export default ContactForm;

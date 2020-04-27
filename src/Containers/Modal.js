// Created by :Uday Samineni
// Created On 25-04-2020
// Name:Modal  Component

import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import Input from "../Components/Input";
import Button from "../Components/Button";
import checkValidity from "../Validation/FormValidation";

const ModalComponent = props => {
  const [clearForm, setClearForm] = useState([]);
  const [FormElements,setFormEle] = useState([]);
  useEffect(()=>{
   setFormEle([]) 
   console.log("form ele",FormElements)
  },[]);
  const [RegisterForm, setRegisterForm] = useState({
    fullname: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Full Name"
      },
      value: "",
      valid: false,
      touched: false,
      validation: {
        required: true
      },
      errorMessage: "Full Name is a required Field*"
    },
    company: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Company"
      },
      value: "",
      valid: false,
      touched: false,
      validation: {
        required: true
      },
      errorMessage: "Company is a required Field*"
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
    address: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Address"
      },
      value: "",
      valid: false,
      touched: false,
      validation: {
        required: true
      },
      errorMessage: "Address is a required Field*"
    }
  });

  const handleSubmit = (e) => {
    
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
           
      setFormEle([])
      let abc={
        fullname: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Full Name"
          },
          value: "",
          valid: false,
          touched: false,
          validation: {
            required: true
          },
          errorMessage: "Full Name is a required Field*"
        },
        company: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Company"
          },
          value: "",
          valid: false,
          touched: false,
          validation: {
            required: true
          },
          errorMessage: "Company is a required Field*"
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
        address: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Address"
          },
          value: "",
          valid: false,
          touched: false,
          validation: {
            required: true
          },
          errorMessage: "Address is a required Field*"
        }
      };
      setRegisterForm(abc)
      let FormElements = [];
      for (let key in abc) {
        FormElements.push({
          id: key,
          config: abc[key]
        });
      }
      props.onhandleOk();
      props.onFormSubmit(obj);
    }
  };

  useEffect(() => {
    console.log("useEffect");
    const updatedForm = {
      ...RegisterForm
    };
    for (let key in RegisterForm) {
      updatedForm[key].value = "";
      updatedForm[key].valid = false;
      updatedForm[key].touched = false;
    }
    console.log("UpdatedForm", updatedForm);
    setRegisterForm(updatedForm);
  }, []);
  let FormElements1 = [];
  for (let key in RegisterForm) {
    FormElements1.push({
      id: key,
      config: RegisterForm[key]
    });
  }
  if(FormElements.length==0)
    setFormEle(FormElements1)

  let Form = (
    <form onSubmit={handleSubmit}>
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
      <Button title="Submit" />
    </form>
  );
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
  
  return (
    <div>
      <Modal
        title="Contact Details"
        visible={props.visible}
        onOk={props.onhandleOk}
        onCancel={props.onhandleCancel}
      >
        <div style={{ marginBottom: "20px" }}>{Form}</div>
        
      </Modal>
    </div>
  );
};

export default ModalComponent;

// Created by :Uday Samineni
// Created On 27-04-2020
// Name:Edit Modal Component
import React, { useState } from "react";
import { Modal } from "antd";
import Input from "../Components/Input";
import Button from "../Components/Button";
import checkValidity from "../Validation/FormValidation";
import "./input.css";


const EditModal = props => {
  const [fullname, setFullName] = useState(props.contact.fullname);
  const [email, setEmail] = useState(props.contact.email);
  const [phone, setPhone] = useState(props.contact.Phone);
  const [address, setAddress] = useState(props.contact.address);
  const [comapny, setCompany] = useState(props.contact.company);

  const handleSubmit = () => {
    let a = [];
    let obj = {};
    let contacts = props.contacts;
    a = props.contacts.filter((item, i) => {
      if (item.id === props.contact.id) {
        return item;
      }
    });
    obj = Object.assign(props.contact, {
      id: props.contact.id,
      fullname: fullname,
      email:email,
      phone:phone,
      address:address,
      company:comapny
    });
    props.onFormSubmit(obj);
  };
  
  return (
    <div>
      <Modal visible={props.visible} footer={null} onCancel={props.onhandleEditCancel}>
        <input
        className="InputElement"
          type="text"
          placeholder="Fullname"
          value={fullname}
          onChange={e => {
            setFullName(e.target.value);
          }}
        ></input>
        <input
        className="InputElement"
          type="text"
          placeholder="Company"
          value={comapny}
          onChange={e => {
            setCompany(e.target.value);
          }}
        ></input>
        <input
        className="InputElement"
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
        className="InputElement"
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={e => {
            setPhone(e.target.value);
          }}
        ></input>
        <input
        className="InputElement"
          type="text"
          placeholder="Address"
          value={address}
          onChange={e => {
            setAddress(e.target.value);
          }}
        ></input>
        <Button handleSubmit={handleSubmit} title="Update" />
      </Modal>
    </div>
  );
};

export default EditModal;

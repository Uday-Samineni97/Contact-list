// Created by :Uday Samineni
// Created On 25-04-2020
// Name:InboxList Component

import React from "react";
import "./input.css";


const InboxList = props => {
  return (
    <div className="inbox_div">
     {props.usermessages.map((item, i) => {
        return (
          <div className="inbox_list" key={i}>
            <p style={{marginRight:"1rem",fontSize:14}}>{item.sender}:</p>
            <p style={{fontSize:14}}>{item.message}</p>
          </div>
        );
      })}
  </div>
  );
};
export default InboxList;

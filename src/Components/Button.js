// Created by :Uday Samineni
// Created On 25-04-2020
// Name:Button Component
import React from "react";

const Button=(props)=>{
    return(
        <div>
            <button className="Button" onClick={props.handleSubmit} >{props.title}</button>  
        </div>
    )
}
export default Button;
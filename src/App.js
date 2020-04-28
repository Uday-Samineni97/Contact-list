import React from 'react';
import './App.css';
import ContactForm from "./Containers/ContactList"

function App() {
  if(!localStorage.getItem("contacts")){
    let a=[
      //state to store all the messages two messages are stored for testing
      { id:1,fullname: "Mike Henry", email: "uday@gmail.com", company: "Fission" ,phone:"90909090909",address:'Hyderabad'},
      { id:2,fullname: "Peter Henry", email: "uday@gmail.com", company: "Fission",phone:'7095474067',address:'Khammam' }
    ]
    localStorage.setItem("contacts",JSON.stringify(a))
  }
  return (
    <div className="App">
      <ContactForm />
    </div>
  );
}

export default App;

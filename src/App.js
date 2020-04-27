import React from 'react';
import './App.css';
import ContactForm from "./Containers/ContactList"

function App() {
  if(!localStorage.getItem("contacts")){
    let a=[
      //state to store all the messages two messages are stored for testing
      { fullname: "Mike Henry", email: "uday@gmail.com", company: "Fission" },
      { fullname: "Peter Henry", email: "uday@gmail.com", company: "Fission" }
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

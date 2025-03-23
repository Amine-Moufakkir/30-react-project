import React, { useState } from 'react'
import Title from '../components/Title'


export default function EsignatureApp() {

  const [name, setName] = useState("Sing here");
  const [date, setDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0"
  };
  return (
  <div>
    <Title classes={"title text-center"} text={name} />
    <Title classes={"main-title mb-4 text-center"} text={date? date:"DoB"}/>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, ea corporis officia consequuntur nam nulla dolor architecto? Cum ducimus ex, mollitia laborum cupiditate optio, temporibus, in reiciendis odit beatae quibusdam?
    </p>
    <footer
      className="d-flex"
      style={{
        justifyContent: "space-around",
        position: "relative",
        top: "40vh"
      }}
    >

      <input 
        style={inputStyle} 
        type="date" value={date} 
        onChange={handleDateChange}
      />

      <input 
        style={inputStyle} 
        type="text" value={name} 
        onChange={handleNameChange}
      />
    </footer>
  </div>

);
}

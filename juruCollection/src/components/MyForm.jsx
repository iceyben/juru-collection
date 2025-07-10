import React, { useState } from "react";

const MyForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [textfield, setTextField] = useState("");

  function handleNameChange(event) {
    setFullName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleTextFieldChange(event){
    setTextField(event.target.value);
  }

  function handleSubmit(){
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log('Form submitted:', { name, email });
        // You can send this data to an API, perform validation
      };
  }

  return (
    <form className="my-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Get In Touch</h1>
      <label>
        <h3>Name:</h3>
        <input type="text" value={fullName} onClick={handleNameChange} className="w-full border-b-1 mb-3 py-2" />
      </label>
      <label>
        <h3>Email:</h3>
        <input type="email" value={email} onClick={handleEmailChange} className="w-full border-b-1 mb-3 py-2" />
      </label>
      <label>
        <h3>Message</h3>
        <input type="textfield" value={textfield} onClick={handleTextFieldChange} className="w-full border-b-1 mb-3 py-2" />
      </label>
      <button className="btnSubmit" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default MyForm;

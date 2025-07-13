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

  function handleTextFieldChange(event) {
    setTextField(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Form submitted:", { fullName, email, textfield });
    handleNameChange();
    handleEmailChange();
    handleTextFieldChange();

    // You can send this data to an API, perform validation
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Get In Touch</h1>
      <label>
        <h3 className="font-bold">Name:</h3>
        <input
          type="text"
          value={fullName}
          onChange={handleNameChange}
          className="inputStyle"
        />
      </label>
      <label>
        <h3 className="font-bold">Email:</h3>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="inputStyle"
        />
      </label>
      <label>
        <h3 className="font-bold">Message</h3>
        <input
          type="text"
          value={textfield}
          onChange={handleTextFieldChange}
          className="inputStyle"
        />
      </label>
      <button className="btnSubmit" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default MyForm;

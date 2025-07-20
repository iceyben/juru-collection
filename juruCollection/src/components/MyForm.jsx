import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const MyForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [textfield, setTextField] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Show loading spinner

    const templateParams = {
      from_name: fullName,
      from_email: email,
      message: textfield,
    };

    emailjs
      .send(
        "service_ehbg355",
        "template_ijhs625",
        templateParams,
        "HZxuOlpImSFwSaG7n"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setIsLoading(false); // Stop loading
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send message.");
          setIsLoading(false); // Stop loading
        }
      );

    setFullName("");
    setEmail("");
    setTextField("");
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Get In Touch</h1>
      <label>
        <h3 className="font-bold">Name:</h3>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="inputStyle"
          required
        />
      </label>
      <label>
        <h3 className="font-bold">Email:</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inputStyle"
          required
        />
      </label>
      <label>
        <h3 className="font-bold">Message</h3>
        <input
          type="text"
          value={textfield}
          onChange={(e) => setTextField(e.target.value)}
          className="inputStyle"
          required
        />
      </label>
      <button className="btnSubmit" type="submit" disabled={isLoading}>
        {isLoading ? (
          <div className="flex items-center gap-2 justify-center">
            <span className="loader" /> Sending...
          </div>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default MyForm;

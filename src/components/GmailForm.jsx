import React, { useState } from "react";

const GmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3005/api/send-email", {
      // Replace with your backend server URL
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Email sent successfully");
          // Handle success (e.g., display a success message)
        } else {
          console.log("Email sending failed");
          // Handle error (e.g., display an error message)
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        // Handle error (e.g., display an error message)
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea id="message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GmailForm;

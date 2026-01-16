import { useState } from "react";
import emailjs from "emailjs-com";

export default function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s0jmz37",
        "template_eu525n9",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "vtu6ttxdbJChOeVat"
      )
      .then(() => {
        alert("Message Sent Successfully!");
      })
      .catch(() => {
        alert("Failed to send email");
      });
  };

  return { formData, handleChange, handleSubmit };
}

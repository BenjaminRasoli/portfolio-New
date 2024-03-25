import React, { useEffect, useState } from "react";
import { S } from "./Contact.styled";
import { toast } from "react-toastify";
import Model from "../Canvas/EarthCanvas.component";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!/^[A-Öa-ö]+$/.test(formData.name)) {
      toast.error("You have entered an invalid name");
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      toast.error("You have entered an invalid email address");
    } else if (formData.message === "") {
      toast.error("Please enter a message");
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      };
      const url = "https://back-end-server-node-js-5awn.vercel.app/sendEmail";
      const response = await toast.promise(fetch(url, requestOptions), {
        pending: "Promise is pending",
        success: "Promise resolved 👌",
        error: "Promise rejected 🤯",
      });
      const data = await response.json();
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      <S.MainContactWrapper id="contact">
        <S.MainContact>
          <p>GET IN TOUCH</p>
          <h2>CONTACT.</h2>
          <S.ContactFormWrapper>
            <S.ContactForm onSubmit={(e) => sendEmail(e)}>
              <S.ContactLabel htmlFor="">
                <h6>Your Name</h6>
                <S.ContactInput
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                />
              </S.ContactLabel>

              <S.ContactLabel htmlFor="">
                <h6>Your Email</h6>
                <S.ContactInput
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                />
              </S.ContactLabel>

              <S.ContactLabel htmlFor="">
                <h6>Your Message</h6>
                <S.ContactTextArea
                  type="text"
                  name="message"
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Anything extra?"
                />
              </S.ContactLabel>
              <S.ContactButton type="sumbit">SEND</S.ContactButton>
            </S.ContactForm>
            <Model />
          </S.ContactFormWrapper>
        </S.MainContact>
      </S.MainContactWrapper>
    </>
  );
}

export default Contact;

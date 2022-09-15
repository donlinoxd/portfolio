import {
  Box,
  Clip,
  Button,
  Form,
  Image,
  Title,
  Wrapper,
} from "./contact.styled";
import contact from "../../assets/contact.svg";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        {
          name,
          email,
          message,
        },
        process.env.REACT_APP_EMAIL_JS_API_KEY
      )
      .then(() => {
        alert("Sent");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper id="hire-me">
      <Clip />
      <Image src={contact} alt="Contact me" />

      <Form onSubmit={handleSubmit}>
        <Title>Let's do this</Title>
        <Box>
          <input
            type="text"
            placeholder="Name or Company"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Box>
        <Button type="submit">Send</Button>
      </Form>
    </Wrapper>
  );
};

export default Contact;

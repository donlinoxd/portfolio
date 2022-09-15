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

const Contact = () => {
  return (
    <Wrapper id="hire-me">
      <Clip />
      <Image src={contact} alt="Contact me" />

      <Form>
        <Title>Let's do this</Title>
        <Box>
          <input type="text" placeholder="Name or Company" />
          <input type="text" placeholder="Email" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Message"
          />
        </Box>
        <Button>Send</Button>
      </Form>
    </Wrapper>
  );
};

export default Contact;

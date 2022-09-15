import { Container, Box, Sub, Title, Wrapper } from "./header.styled";
import Illustration from "../Illustration/Illustration";

const Header = () => {
  return (
    <Box id="home">
      <Wrapper>
        <Container>
          <Title>&lt; developer /&gt;</Title>
          <Sub>
            front-end developer with a focus on producing clear, effective, and
            reusable code.
          </Sub>
        </Container>
        <Container>
          <Title>designer</Title>
          <Sub>
            User Interface designer who is passionate about creating elegant and
            useful user experiences. Who is a minimalist and thinks that less is
            more.
          </Sub>
        </Container>
        <Illustration />
      </Wrapper>
    </Box>
  );
};

export default Header;

import { Wrapper, Link, Button } from "./navlinks.styled";

const Navlinks = (props) => {
  return (
    <Wrapper open={props.open}>
      <Link href="#home">Home</Link>
      <Link href="#about">About</Link>
      <Link href="#projects">Projects</Link>
      <Button href="#hire-me">Hire me</Button>
    </Wrapper>
  );
};

export default Navlinks;

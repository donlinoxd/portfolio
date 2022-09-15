import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Logo from "../Logo/Logo";
import Navlinks from "../Navlinks/Navlinks";
import { Burger, Wrapper } from "./Navbar.styled";

const Navbar = () => {
  const mobile = useMediaQuery("(max-width: 600px)");
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Logo />
      {mobile ? (
        <>
          <Burger open={open} onClick={() => setOpen((open) => !open)} />
          <Navlinks open={open} />
        </>
      ) : (
        <Navlinks />
      )}
    </Wrapper>
  );
};

export default Navbar;

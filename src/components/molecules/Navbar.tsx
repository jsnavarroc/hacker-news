
import { Logo,  Nav } from "../atoms/NavbarComponents";
import { BALCK_COLOR } from "../resources/constants_colors";

const Navbar = () => {
  return (
    <Nav>
      <Logo href="#" theme={{color:BALCK_COLOR}}>
        Hacker News
      </Logo>
    </Nav>
  );
};

export default Navbar;

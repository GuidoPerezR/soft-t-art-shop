import Subtitle from "./Subtitle";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <nav className="flex place-content-between px-16 py-5 bg-navbar ">
      <div className="flex items-center gap-6">
        <img src={logo} alt="logo" className="w-24" />
        <Subtitle text="Sof-t-art" />
      </div>
      <div className="flex gap-10 items-center">
        <Subtitle text="About us" />
        <Subtitle text="Products" />
        <Subtitle text="Contact" />
        <Subtitle text="Register" />
      </div>
    </nav>
  );
}

export default Navbar;

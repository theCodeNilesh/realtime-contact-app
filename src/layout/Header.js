//TODO: DONE set NavbarBrand to go to home page and export Header

import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="nav">
      <NavbarBrand tag={Link} to="/" className="text-white navbrand">
        LCO Contact App
      </NavbarBrand>
      <NavbarText className="text-white float-right navtxt">
        A simple Contact app
      </NavbarText>
    </Navbar>
  );
};

export default Header;

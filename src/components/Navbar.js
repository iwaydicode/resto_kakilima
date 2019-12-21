import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <Link className="navbar-brand" to="/">
      Resto KakiLima
    </Link>
  </nav>
)

export default Navbar;
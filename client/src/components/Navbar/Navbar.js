import React from "react";

const Navbar = () => (
  <div>

    {/* Welcome to DevTinder */}
    <header id="header" class="alt">
      <h4 class="logo">
        <a href="/">DevTinder </a>
        <span>
          by Ricardo Bentin, Juan Varon, Patrick Wang, Matthew Bogard, and Nancy Louda
        </span>
      </h4>
    </header>

    <nav id="menu">
      <ul class="links">
        <li>
          <a href="index.html">Home</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;

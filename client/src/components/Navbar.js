// We currently aren't using a Navbar but I think the app might need it later 
// So this file is being purposefully unused because it might help with future development. -MB

import React from "react";
import { Link } from "react-router-dom";
import DeveloperPage from "./DeveloperPage";
import CustomerPage from "./CustomerPage";

const Navbar = () => (
  <div>
    <header>
      <div className="row">
        <nav>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/developer">A Developer</Link>
            </li>
            <li>
              <Link to="/customer">A Customer</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
);

export default Navbar;

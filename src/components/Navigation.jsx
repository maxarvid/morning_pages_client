import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="w-screen flex justify-evenly mt-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link data-cy="morning-pages-btn" to="/morning_pages">
            Morning Pages
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

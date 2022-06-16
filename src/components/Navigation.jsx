import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link data-cy="morning-pages-btn" to="/morning_pages">
            Morning Pages
          </Link>
        </li>
        <li>
        <button>
        <Link data-cy="morning-page-new-btn" to="morning_pages/create">
          New Morning Page
        </Link>
      </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

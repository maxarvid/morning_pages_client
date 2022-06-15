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
        <li>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import MorningPagesService from "../modules/MorningPagesService";

const MorningPages = () => {
  const { morningPages } = useSelector((state) => state.morningPages);

  useEffect(() => {
    MorningPagesService.index();
  }, []);

  return (
    <div className="fixed top-2 left-2 h-screen w-56 flex flex-col justify-center">
      <Outlet />
      <ul data-cy="morning-pages-list">
        {morningPages.map((morningPage) => {
          return (
            <li key={morningPage.id}>
              <Link
                data-cy="morning-page"
                to={`/morning_pages/${morningPage.id}`}
              >
                {morningPage.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MorningPages;

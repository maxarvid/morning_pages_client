import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { List } from "semantic-ui-react";
import MorningPagesService from "../modules/MorningPagesService";

const MorningPages = () => {
  const { morningPages } = useSelector((state) => state.morningPages);

  useEffect(() => {
    MorningPagesService.index();
  }, []);

  return (
    <>
      <Outlet />
      <List data-cy="morning-pages-list">
        {morningPages.map((morningPage) => {
          return (
            <List.Item
              data-cy="morning-page"
              key={morningPage.id}
              as={Link}
              to={`/morning_pages/${morningPage.id}`}
              content={morningPage.title}
            />
          );
        })}
      </List>
    </>
  );
};

export default MorningPages;

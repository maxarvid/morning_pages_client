import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

const MorningPagesList = () => {
  const { morningPages } = useSelector((state) => state.morningPages);

  return (
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
  );
};

export default MorningPagesList;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("home");
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Menu secondary>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={() => setActiveItem("home")}
        content="Home"
        as={Link}
        to="/"
      />
      {currentUser && (
        <>
          <Menu.Item
            data-cy="morning-pages-btn"
            name="morningPages"
            active={activeItem === "morningPages"}
            onClick={() => setActiveItem("morningPages")}
            content="Morning Pages"
            as={Link}
            to="/morning_pages"
          />
          <Menu.Item
            data-cy="morning-page-new-btn"
            name="createMorningPage"
            active={activeItem === "createMorningPage"}
            onClick={() => setActiveItem("createMorningPage")}
            content="New Morning Page"
            as={Link}
            to="morning_pages/create"
          />
        </>
      )}
    </Menu>
  );
};

export default Navigation;

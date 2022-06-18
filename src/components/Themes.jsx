import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { List } from "semantic-ui-react";
import ThemesService from "../modules/ThemesService";

const Themes = () => {
  const { themes } = useSelector((state) => state.themes);

  useEffect(() => {
    ThemesService.index();
  }, []);

  return (
    <List data-cy="themes-list">
      {themes.map((theme) => {
        return <List.Item key={theme.id}>{theme.name}</List.Item>;
      })}
    </List>
  );
};

export default Themes;

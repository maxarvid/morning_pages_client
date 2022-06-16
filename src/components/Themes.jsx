import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ThemesService from "../modules/ThemesService";

const Themes = () => {
  const { themes } = useSelector((state) => state.themes);

  useEffect(() => {
    ThemesService.index();
  }, []);

  return (
    <div>
      <ul data-cy="themes-list">
        {themes.map((theme) => {
          return (
            <li key={theme.id}>
              {theme.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Themes;

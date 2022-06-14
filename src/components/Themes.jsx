import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ThemesService from "../modules/ThemesService";

const Themes = () => {
  const { themes } = useSelector((state) => state.themes);

  useEffect(() => {
    ThemesService.index();
  }, []);

  return (
    <ul data-cy="themes-list" className="list-none flex justify-around">
      {themes.map((theme) => {
        return <li className="" key={theme.id}>{theme.name}</li>;
      })}
    </ul>
  );
};

export default Themes;

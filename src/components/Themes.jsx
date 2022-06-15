import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ThemesService from "../modules/ThemesService";

const Themes = () => {
  const { themes } = useSelector((state) => state.themes);

  useEffect(() => {
    ThemesService.index();
  }, []);

  return (
    <div className="fixed top-2 left-2 h-screen w-56 flex flex-col justify-center">
      <ul data-cy="themes-list">
        {themes.map((theme) => {
          return (
            <li className="" key={theme.id}>
              {theme.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Themes;

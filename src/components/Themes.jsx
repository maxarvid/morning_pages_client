import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ApiService from "../modules/ApiService";

const Themes = () => {
  const { themes } = useSelector((state) => state.themes);

  useEffect(() => {
    ApiService.index('themes');
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

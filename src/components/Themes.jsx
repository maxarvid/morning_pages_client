import React, { useEffect, useState } from "react";
import axios from "axios";

const Themes = () => {
  const [themes, setThemes] = useState([]);

  const fetchThemes = async () => {
    const response = await axios.get("http://localhost:3001/themes");
    setThemes(response.data.themes);
  };

  useEffect(() => {
    fetchThemes();
  }, []);

  return (
    <ul data-cy="themes-list">
      {themes.map((theme) => {
        return <li key={theme.id}>{theme.name}</li>;
      })}
    </ul>
  );
};

export default Themes;

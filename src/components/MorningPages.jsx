import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MorningPagesService from "../modules/MorningPagesService";

const MorningPages = () => {
  const { morningPages } = useSelector((state) => state.morningPages);

  useEffect(() => {
    MorningPagesService.index();
  }, []);

  return (
    <ul data-cy="morning-pages-list">
      {morningPages.map((morningPage) => {
        return <li key={morningPage.id}>{morningPage.title}</li>;
      })}
    </ul>
  );
};

export default MorningPages;

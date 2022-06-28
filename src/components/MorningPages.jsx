import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import MorningPagesService from "../modules/MorningPagesService";

const MorningPages = () => {
  useEffect(() => {
    MorningPagesService.index();
  }, []);

  return <Outlet />;
};

export default MorningPages;

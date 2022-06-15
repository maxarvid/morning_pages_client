import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MorningPagesService from "../modules/MorningPagesService";

const MorningPage = () => {
  let { morningPageId } = useParams();
  const { morningPage } = useSelector((state) => state.morningPages);

  useEffect(() => {
    MorningPagesService.show(morningPageId);
  }, []);

  return (
    <div>
      <h3>{morningPage.title}</h3>
      <p data-cy="morning-page-body">{morningPage.body}</p>
    </div>
  );
};

export default MorningPage;

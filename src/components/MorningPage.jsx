import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ApiService from "../modules/ApiService";

const MorningPage = () => {
  let { morningPageId } = useParams();
  const { morningPage } = useSelector((state) => state.morningPages);

  useEffect(() => {
    ApiService.show('morning_pages', morningPageId);
  }, [morningPageId]);

  return (
    <div>
      <h3>{morningPage.title}</h3>
      <p data-cy="morning-page-body">{morningPage.body}</p>
    </div>
  );
};

export default MorningPage;
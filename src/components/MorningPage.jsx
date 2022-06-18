import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import MorningPagesService from "../modules/MorningPagesService";

const MorningPage = () => {
  let { morningPageId } = useParams();
  const { morningPage } = useSelector((state) => state.morningPages);

  useEffect(() => {
    MorningPagesService.show(morningPageId);
  }, [morningPageId]);

  return (
    <Segment>
      <h3>{morningPage.title}</h3>
      <p data-cy="morning-page-body">{morningPage.body}</p>
    </Segment>
  );
};

export default MorningPage;

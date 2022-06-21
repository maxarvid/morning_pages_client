import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";
import MorningPagesService from "../modules/MorningPagesService";

const MorningPage = () => {
  let navigate = useNavigate();
  let { morningPageId } = useParams();
  const { morningPage } = useSelector((state) => state.morningPages);

  const handleDelete = async () => {
    await MorningPagesService.delete(morningPageId);
    navigate("/morning_pages", { replace: true });
  };

  useEffect(() => {
    MorningPagesService.show(morningPageId);
  }, [morningPageId]);

  return (
    <Segment>
      <Button
        data-cy="delete-btn"
        icon="trash alternate"
        floated="right"
        onClick={handleDelete}
      />
      <h3>{morningPage.title}</h3>
      <p data-cy="morning-page-body">{morningPage.body}</p>
    </Segment>
  );
};

export default MorningPage;

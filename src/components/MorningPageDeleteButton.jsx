import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";
import MorningPagesService from "../modules/MorningPagesService";

const MorningPageDeleteButton = () => {
  let navigate = useNavigate();
  let { morningPageId } = useParams();
  
  const handleDelete = async () => {
    await MorningPagesService.delete(morningPageId);
    navigate("/morning_pages", { replace: true });
  };

  return (
    <Button
      data-cy="delete-btn"
      icon="trash alternate"
      floated="right"
      onClick={handleDelete}
    />
  );
};

export default MorningPageDeleteButton;

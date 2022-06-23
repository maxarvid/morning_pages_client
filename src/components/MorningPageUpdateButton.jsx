import React from "react";
import { Link } from "react-router-dom";
import { store } from "../state/store";
import { Button } from "semantic-ui-react";
import { setEditMode } from "../state/features/morningPagesSlice";

const MorningPageUpdateButton = () => {
  return (
    <Button
      data-cy="update-btn"
      icon="edit"
      floated="right"
      as={Link}
      to="update"
      onClick={() => store.dispatch(setEditMode(true))}
    />
  );
};

export default MorningPageUpdateButton;

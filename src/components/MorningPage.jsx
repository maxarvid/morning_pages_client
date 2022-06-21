import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams, Outlet } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";
import MorningPagesService from "../modules/MorningPagesService";
import { setEditMode } from "../state/features/morningPagesSlice";
import { store } from "../state/store";

const MorningPage = () => {
  let navigate = useNavigate();
  let { morningPageId } = useParams();
  const { morningPage, editMode } = useSelector((state) => state.morningPages);

  const handleDelete = async () => {
    await MorningPagesService.delete(morningPageId);
    navigate("/morning_pages", { replace: true });
  };

  useEffect(() => {
    MorningPagesService.show(morningPageId);
  }, [morningPageId]);

  return (
    <Segment>
      {editMode ? (
        <Outlet />
      ) : (
        <>
          <Button
            data-cy="delete-btn"
            icon="trash alternate"
            floated="right"
            onClick={handleDelete}
          />
          <Button
            data-cy="update-btn"
            icon="edit"
            floated="right"
            as={Link}
            to="update"
            onClick={() => store.dispatch(setEditMode(true))}
          />
          <h3>{morningPage.title}</h3>
          <p data-cy="morning-page-body">{morningPage.body}</p>
        </>
      )}
    </Segment>
  );
};

export default MorningPage;

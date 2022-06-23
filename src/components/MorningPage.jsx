import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Outlet } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import MorningPagesService from "../modules/MorningPagesService";
import MorningPageDeleteButton from "./MorningPageDeleteButton";
import MorningPageUpdateButton from "./MorningPageUpdateButton";

const MorningPage = () => {
  let { morningPageId } = useParams();
  const { morningPage, editMode } = useSelector((state) => state.morningPages);

  useEffect(() => {
    MorningPagesService.show(morningPageId);
  }, [morningPageId]);

  return (
    <Segment>
      {editMode ? (
        <Outlet />
      ) : (
        <>
          <MorningPageDeleteButton />
          <MorningPageUpdateButton />
          <h3>{morningPage.title}</h3>
          <p data-cy="morning-page-body">{morningPage.body}</p>
        </>
      )}
    </Segment>
  );
};

export default MorningPage;

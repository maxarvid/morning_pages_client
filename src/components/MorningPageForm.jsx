import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MorningPagesService from "../modules/MorningPagesService";
import MorningPageFormDropdown from "./MorningPageFormDropdown";
import MorningPageFormTextInputs from "./MorningPageFormTextInputs";
import { Button, Form } from "semantic-ui-react";

const MorningPageForm = () => {
  const { editMode, morningPage, selectedTheme } = useSelector(
    (state) => state.morningPages
  );
  let navigate = useNavigate();

  const MorningPageForm = (event, data) => {
    event.preventDefault();
    const morningPost = {
      title: event.target.title.value,
      body: event.target.body.value,
      themeId: selectedTheme,
    };
    if (editMode) {
      MorningPagesService.update(morningPage.id, morningPost);
      navigate(`/morning_pages/${morningPage.id}`, { replace: true });
    } else {
      MorningPagesService.create(morningPost);
    }
  };

  return (
    <Form onSubmit={MorningPageForm}>
      <MorningPageFormTextInputs />
      <MorningPageFormDropdown />
      <Button data-cy="morning-page-submit-btn" type="submit" content="Save" />
    </Form>
  );
};

export default MorningPageForm;

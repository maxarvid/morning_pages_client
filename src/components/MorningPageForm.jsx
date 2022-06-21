import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MorningPagesService from "../modules/MorningPagesService";
import MorningPageFormDropdown from "./MorningPageFormDropdown";
import MorningPageFormTextInputs from "./MorningPageFormTextInputs";
import { Button, Form } from "semantic-ui-react";
import { setEditMode } from "../state/features/morningPagesSlice";
import { store } from "../state/store";

const MorningPageForm = () => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [textInputs, setTextInputs] = useState({});
  const { editMode, morningPage } = useSelector((state) => state.morningPages);
  let navigate = useNavigate();

  useEffect(() => {
    if (editMode) {
      setSelectedTheme(morningPage.theme_id);
      setTextInputs({ title: morningPage.title, body: morningPage.body });
    }
  }, []);

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
      store.dispatch(setEditMode(false));
    } else {
      MorningPagesService.create(morningPost);
    }
  };

  return (
    <Form onSubmit={MorningPageForm}>
      <MorningPageFormTextInputs textInputs={textInputs} />
      <MorningPageFormDropdown
        selectedTheme={selectedTheme}
        onChange={(event, data) => setSelectedTheme(data.value)}
      />
      <Button data-cy="morning-page-submit-btn" type="submit" content="Save" />
    </Form>
  );
};

export default MorningPageForm;

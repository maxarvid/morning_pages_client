import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import MorningPagesService from "../modules/MorningPagesService";
import NewMorningPageFormDropdown from "./NewMorningPageFormDropdown";
import NewMorningPageFormTextInputs from "./NewMorningPageFormTextInputs";

const NewMorningPageForm = () => {
  const [selectedTheme, setSelectedTheme] = useState("");

  const newMorningPageForm = (event, data) => {
    event.preventDefault();
    const morningPost = {
      title: event.target["title"].value,
      body: event.target["body"].value,
      themeId: selectedTheme,
    };
    MorningPagesService.create(morningPost);
  };

  return (
    <Form onSubmit={newMorningPageForm}>
      <NewMorningPageFormTextInputs />
      <NewMorningPageFormDropdown
        selectedTheme={selectedTheme}
        onChange={(event, data) => setSelectedTheme(data.value)}
      />
      <Button data-cy="morning-page-submit-btn" type="submit" content="Save" />
    </Form>
  );
};

export default NewMorningPageForm;

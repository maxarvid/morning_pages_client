import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import MorningPagesService from "../modules/MorningPagesService";
import NewMorningPageFormDropdown from "./NewMorningPageFormDropdown";

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
      <Form.Input
        label="Title"
        data-cy="morning-page-title-input"
        type="text"
        id="title"
      />
      <Form.Input
        label="Body"
        data-cy="morning-page-body-input"
        type="text"
        id="body"
      />
      <NewMorningPageFormDropdown
        selectedTheme={selectedTheme}
        onChange={(event, data) => setSelectedTheme(data.value)}
      />
      <Button data-cy="morning-page-submit-btn" type="submit" content="Save" />
    </Form>
  );
};

export default NewMorningPageForm;

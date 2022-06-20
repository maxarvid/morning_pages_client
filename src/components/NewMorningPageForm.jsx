import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import MorningPagesService from "../modules/MorningPagesService";

const NewMorningPageForm = () => {
  const { themes } = useSelector((state) => state.themes);
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

  const themeOptions = themes.map((theme) => {
    return { key: theme.id, text: theme.name, value: theme.id };
  });

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
      <Form.Dropdown
        selection
        data-cy="morning-page-dropdown"
        options={themeOptions}
        placeholder="Choose a theme"
        value={selectedTheme}
        onChange={(event, data) => setSelectedTheme(data.value)}
      />
      <Button data-cy="morning-page-submit-btn" type="submit" content="Save" />
    </Form>
  );
};

export default NewMorningPageForm;

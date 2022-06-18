import React from "react";
import { Button, Form } from "semantic-ui-react";
import MorningPagesService from "../modules/MorningPagesService";

const NewMorningPageForm = () => {
  const newMorningPageForm = (event) => {
    event.preventDefault();
    const morningPost = {
      title: event.target["title"].value,
      body: event.target["body"].value,
    };
    MorningPagesService.create(morningPost);
  };

  return (
    <Form onSubmit={newMorningPageForm}>
      <Form.Field>
        <label>Title</label>
        <input data-cy="morning-page-title-input" type="text" id="title" />
      </Form.Field>
      <Form.Field>
        <label>Body</label>
        <input data-cy="morning-page-body-input" type="text" id="body" />
      </Form.Field>
      <Button data-cy="morning-page-submit-btn" type="submit" content="Save" />
    </Form>
  );
};

export default NewMorningPageForm;

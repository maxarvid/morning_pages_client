import React from "react";
import { Form } from "semantic-ui-react";

const NewMorningPageFormTextInputs = () => {
  return (
    <>
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
    </>
  );
};

export default NewMorningPageFormTextInputs;

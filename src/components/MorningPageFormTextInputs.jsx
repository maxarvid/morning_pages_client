import React from "react";
import { Form } from "semantic-ui-react";

const MorningPageFormTextInputs = ({ textInputs }) => {
  return (
    <>
      <Form.Input
        label="Title"
        data-cy="morning-page-title-input"
        type="text"
        id="title"
        defaultValue={textInputs.title}
      />
      <Form.Input
        label="Body"
        data-cy="morning-page-body-input"
        type="text"
        id="body"
        defaultValue={textInputs.body}
      />
    </>
  );
};

export default MorningPageFormTextInputs;

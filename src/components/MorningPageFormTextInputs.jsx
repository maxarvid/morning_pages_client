import React from "react";
import { useSelector } from "react-redux";
import { Form } from "semantic-ui-react";

const MorningPageFormTextInputs = () => {
  const { morningPage } = useSelector((state) => state.morningPages);

  return (  
    <>
      <Form.Input
        label="Title"
        data-cy="morning-page-title-input"
        type="text"
        id="title"
        defaultValue={morningPage.title}
      />
      <Form.Input
        label="Body"
        data-cy="morning-page-body-input"
        type="text"
        id="body"
        defaultValue={morningPage.body}
      />
    </>
  );
};

export default MorningPageFormTextInputs;

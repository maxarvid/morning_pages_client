import React from "react";
import { Form } from "semantic-ui-react";
import Authentication from "../modules/auth";

const SignUp = () => {
  const handleAccountCreate = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    Authentication.signUp(data);
  };

  return (
    <Form onSubmit={handleAccountCreate}>
      <Form.Input data-cy="create-account-email" label="Email" id="email" />
      <Form.Input
        data-cy="create-account-password"
        label="Password"
        type="password"
        id="password"
      />
      <Form.Button data-cy="create-account-submit-btn" content="Submit" />
    </Form>
  );
};

export default SignUp;

import React from "react";
import { Form } from "semantic-ui-react";
import Authentication from "../modules/auth";

const SignIn = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.login_email.value,
      password: event.target.login_password.value,
    };
    Authentication.signIn(data);
  };

  return (
    <Form onSubmit={handleSignIn}>
      <Form.Input data-cy="login-email" label="Email" id="login_email" />
      <Form.Input
        data-cy="login-password"
        label="Password"
        type="password"
        id="login_password"
      />
      <Form.Button data-cy="login-submit-btn" content="Submit" />
    </Form>
  );
};

export default SignIn;

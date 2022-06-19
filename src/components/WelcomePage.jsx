import React from "react";
import { Form, Grid } from "semantic-ui-react";
import Authentication from "../modules/auth";

const WelcomePage = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.login_email.value,
      password: event.target.login_password.value
    }
    Authentication.signIn(data);
  };

  const handleAccountCreate = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    Authentication.signUp(data)
  };

  return (
    <>
      <div data-cy="welcome">Welcome to Morning Pages</div>
      <Grid columns={2}>
        <Grid.Column>
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
        </Grid.Column>
        <Grid.Column>
          <Form onSubmit={handleAccountCreate}>
            <Form.Input
              data-cy="create-account-email"
              label="Email"
              id="email"
            />
            <Form.Input
              data-cy="create-account-password"
              label="Password"
              type="password"
              id="password"
            />
            <Form.Input
              data-cy="create-account-password-confirm"
              label="Confirm Password"
              type="password"
              id="password-confirm"
            />
            <Form.Button data-cy="create-account-submit-btn" content="Submit" />
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default WelcomePage;

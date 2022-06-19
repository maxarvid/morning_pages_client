import React from "react";
import { Form, Grid } from "semantic-ui-react";
import Authentication from "../modules/auth";

const WelcomePage = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    Authentication.signIn(event.target);
  };

  return (
    <>
      <div data-cy="welcome">Welcome to Morning Pages</div>
      <Grid>
        <Grid.Column>
          <Form onSubmit={handleSignIn}>
            <Form.Input data-cy="login-email" label="Email" id="email" />
            <Form.Input
              data-cy="login-password"
              label="Password"
              type="password"
              id="password"
            />
            <Form.Button data-cy="login-submit-btn" content="Submit" />
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default WelcomePage;

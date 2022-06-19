import React from "react";
import { Grid, Header } from "semantic-ui-react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Welcome = () => {
  return (
    <>
      <Header data-cy="welcome" as="h1" content="Welcome to Morning Pages" />
      <Grid columns={2}>
        <Grid.Column>
          <Header as="h3" content="Sign in" />
          <SignIn />
        </Grid.Column>
        <Grid.Column>
          <Header as="h3" content="Create your account" />
          <SignUp />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Welcome;

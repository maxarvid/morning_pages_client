import React from "react";
import { Grid } from "semantic-ui-react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const WelcomePage = () => {
  return (
    <>
      <div data-cy="welcome">Welcome to Morning Pages</div>
      <Grid columns={2}>
        <Grid.Column>
          <SignIn />
        </Grid.Column>
        <Grid.Column>
          <SignUp />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default WelcomePage;

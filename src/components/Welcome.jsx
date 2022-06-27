import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Dimmer, Grid, Header, Loader } from "semantic-ui-react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Welcome = () => {
  const { isLoading } = useSelector((state) => state.loader);
  const { currentUser } = useSelector((state) => state.auth);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header data-cy="welcome" as="h1" content="Welcome to Morning Pages" />
      {isLoading && (
        <Dimmer data-cy="loader-container" active>
          <Loader active>Loading</Loader>
        </Dimmer>
      )}
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

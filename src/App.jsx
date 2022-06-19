import React from "react";
import { Route, Routes } from "react-router-dom";
import MorningPage from "./components/MorningPage";
import MorningPages from "./components/MorningPages";
import NewMorningPageForm from "./components/NewMorningPageForm";
import Navigation from "./components/Navigation";
import Themes from "./components/Themes";
import { ToastContainer } from "react-toastify";
import { Container } from "semantic-ui-react";
import { useSelector } from "react-redux";
import Welcome from "./components/Welcome";

const App = () => {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Container>
      <Navigation />
      {currentUser ? (
        <Routes>
          <Route path="/" element={<Themes />} />
          <Route path="/morning_pages" element={<MorningPages />}>
            <Route path=":morningPageId" element={<MorningPage />} />
            <Route path="create" element={<NewMorningPageForm />} />
          </Route>
        </Routes>
      ) : (
        <Welcome />
      )}
      <div data-cy="toast-container">
        <ToastContainer />
      </div>
    </Container>
  );
};

export default App;

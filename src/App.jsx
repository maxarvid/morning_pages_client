import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Authentication from "./modules/auth";
import Welcome from "./components/Welcome";
import MorningPage from "./components/MorningPage";
import MorningPages from "./components/MorningPages";
import MorningPageForm from "./components/MorningPageForm";
import Navigation from "./components/Navigation";
import Themes from "./components/Themes";
import { ToastContainer } from "react-toastify";
import { Container } from "semantic-ui-react";

const App = () => {
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("J-tockAuth-Storage"));
    token && Authentication.validateToken(token);
  }, []);

  return (
    <Container>
      <Navigation />
      {currentUser ? (
        <Routes>
          <Route path="/" element={<Themes />} />
          <Route path="/morning_pages" element={<MorningPages />}>
            <Route path=":morningPageId" element={<MorningPage />}>
              <Route path="update" element={<MorningPageForm />} />
            </Route>
            <Route path="create" element={<MorningPageForm />} />
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

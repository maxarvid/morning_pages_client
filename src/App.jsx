import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./modules/auth";
import Welcome from "./components/Welcome";
import MorningPage from "./components/MorningPage";
import MorningPages from "./components/MorningPages";
import MorningPageForm from "./components/MorningPageForm";
import Navigation from "./components/Navigation";
import Themes from "./components/Themes";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import { Container } from "semantic-ui-react";

const App = () => {
  useEffect(() => {
    Authentication.validateToken();
  }, []);

  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/login" element={<Welcome />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Themes />} />
          <Route path="/morning_pages" element={<MorningPages />}>
            <Route path=":morningPageId" element={<MorningPage />}>
              <Route path="update" element={<MorningPageForm />} />
            </Route>
            <Route path="create" element={<MorningPageForm />} />
          </Route>
        </Route>
      </Routes>

      <div data-cy="toast-container">
        <ToastContainer />
      </div>
    </Container>
  );
};

export default App;

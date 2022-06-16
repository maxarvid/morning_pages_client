import React from "react";
import { Route, Routes } from "react-router-dom";
import MorningPage from "./components/MorningPage";
import MorningPages from "./components/MorningPages";
import NewMorningPageForm from "./components/NewMorningPageForm";
import Navigation from "./components/Navigation";
import Themes from "./components/Themes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Themes />} />
        <Route path="/morning_pages" element={<MorningPages />}>
          <Route path=":morningPageId" element={<MorningPage />} />
          <Route path="create" element={<NewMorningPageForm />} />
        </Route>
      </Routes>
      <div data-cy="toast-container">
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import MorningPage from "./components/MorningPage";
import MorningPages from "./components/MorningPages";
import Navigation from "./components/Navigation";
import Themes from "./components/Themes";

const App = () => {
  return (
    <div className="container mx-auto py-2">
      <Navigation />
      <Routes>
        <Route path="/" element={<Themes />} />
        <Route path="/morning_pages" element={<MorningPages />}>
          <Route path=":morningPageId" element={<MorningPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

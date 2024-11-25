import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Movies from "./homepage/pages/backend/movies/Movies";
import Settings from "./homepage/pages/backend/settings/Settings";
import { StoreProvider } from "./store/StoreContext";
import HomePage from "./homepage/pages/frontend/homepage/HomePage";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="/admin/movies" element={<Movies />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;

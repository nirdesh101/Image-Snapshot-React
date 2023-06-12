import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../components/Home";
import Search from "../components/Search/Search";
import SelectedImage from "../components/Image/SelectedImage";
import SearchSelectedImage from "../components/Image/SearchSelectedImage";
import ImageSnapshotContextProvider from "../components/context";
import HomeButtons from "../components/Buttons/HomeButtons";

function App() {
  return (
    <ImageSnapshotContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
          <Route path="/food/:id" element={<SelectedImage />} />
          <Route path="/mountains/:id" element={<SelectedImage />} />
          <Route path="/animals/:id" element={<SelectedImage />} />
          <Route path="/birds/:id" element={<SelectedImage />} />
          <Route
            exact
            path="/food"
            element={<HomeButtons buttonName="food" />}
          />
          <Route path="/birds" element={<HomeButtons buttonName="birds" />} />
          <Route
            path="/mountains"
            element={<HomeButtons buttonName="mountains" />}
          />
          <Route
            path="/animals"
            element={<HomeButtons buttonName="animals" />}
          />
          <Route path="/search/*" element={<Search />} />
          <Route path="/search/*/:id" element={<SearchSelectedImage />} />
        </Routes>
      </Router>
    </ImageSnapshotContextProvider>
  );
}

export default App;

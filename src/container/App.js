import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../components/Home";
import Buttons from "../components/Buttons/Buttons";
import Mountains from "../components/Buttons/Mountains";
import Animals from "../components/Buttons/Animals";
import Birds from "../components/Buttons/Birds";
import Food from "../components/Buttons/Food";
import Search from "../components/Search/Search";
import SelectedImage from "../components/Image/SelectedImage";
import SearchSelectedImage from "../components/Image/SearchSelectedImage";
import ImageSnapshotContextProvider from "../components/context";

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
          <Route exact path="/food" element={<Food />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/mountains" element={<Mountains />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="/search/*/:id" element={<SearchSelectedImage />} />
        </Routes>
      </Router>
    </ImageSnapshotContextProvider>
  );
}

export default App;

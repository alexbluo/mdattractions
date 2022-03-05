import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  AttractionsPage,
  DetailsPage,
  HelpPage,
  Error404Page,
  MapPage,
} from "./pages/pageExports";
import "./index.css"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/attractions" element={<AttractionsPage />} />
      <Route exact path="/attractions/:id" element={<DetailsPage />} />
      <Route exact path="/map" element={<MapPage />} />
      <Route exact path="/help" element={<HelpPage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
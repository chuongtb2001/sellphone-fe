import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function RouteMap() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

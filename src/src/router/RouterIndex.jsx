import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import NotFoundPage from "../pages/notFound/NotFoundPage";

function RouterIndex() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default RouterIndex;

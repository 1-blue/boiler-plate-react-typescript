import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// layout
import Layout from "@src/layouts/Layout";

// page-components
import Home from "@src/pages/Home";
import LogIn from "@src/pages/LogIn";
import SignUp from "@src/pages/SignUp";
import NotFound from "@src/pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;

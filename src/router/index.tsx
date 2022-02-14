import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Main from "../views/Main";
import Article from "../views/Article";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="/article/:category/:id" element={<Article />} />
    </Routes>
  );
};

export default AppRouter;

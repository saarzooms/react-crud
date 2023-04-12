import React from "react";
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddBlog />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

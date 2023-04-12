import React from "react";
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";

const App = () => {
  return (
    <div className="container-fluid">
      <AddBlog />
      <Home />
    </div>
  );
};

export default App;

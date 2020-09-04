import React from "react";
import HomePage from "./components/home/HomePage";
import { Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  library.add(fab, faCheckSquare, faCoffee);
  return <Route path="" component={HomePage} />;
}

export default App;

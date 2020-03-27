import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";

import GetAPI from "./api/GetAPI";
export default function App() {
  return (
    <Router>
      <Route path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/portfolio" component={GetAPI} />
    </Router>
  );
}

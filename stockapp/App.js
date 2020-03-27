import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import GetAPI from "./components/GetAPI";
export default function App() {
  return (
    <Router>
      <Route path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/getinfo" component={GetAPI} />
    </Router>
  );
}

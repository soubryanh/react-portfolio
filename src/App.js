import React from "react";

import { About, Header, Technologies, Projects, Contact } from "./container";
import { Navbar } from "./components/";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Projects />
    <Technologies />
    <Contact />
  </div>
);

export { App };

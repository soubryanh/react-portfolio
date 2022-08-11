import React from "react";

import { About, Footer, Header, Technologies, Projects } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Projects />
    <Technologies />
    <Footer />
  </div>
);

export { App };

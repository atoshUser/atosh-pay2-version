import React from "react";
import "./App.css";
import {
  Billing,
  Business,
  Contract,
  Header,
  Hero,
  Statistics,
} from "./components";
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Statistics />
      <Contract />
      <Billing />
      <Business />
    </div>
  );
};

export default App;

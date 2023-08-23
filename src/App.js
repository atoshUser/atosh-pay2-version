import React from "react";
import "./App.css";
import { Billing, Contract, Header, Hero, Statistics } from "./components";
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Statistics />
      <Contract />
      <Billing />
    </div>
  );
};

export default App;

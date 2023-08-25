import React from "react";
import "./App.css";
import {
  Billing,
  Business,
  Clients,
  Contract,
  Cta,
  Footer,
  Header,
  Hero,
  Statistics,
  Testimonials,
} from "./components";
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Statistics />
      <Contract />
      <Billing />
      <Clients />
      <Business />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;

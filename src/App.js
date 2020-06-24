import React from "react";
import ServiceCrud from "./components/ServiceCrud";
import ServiceList from "./components/ServiceList";
import ServiceFilter from "./components/ServiceFilter";
import "./App.css";

function App() {
  return (
    <>
      <ServiceCrud />
      <ServiceFilter />
      <ServiceList />
    </>
  );
}

export default App;

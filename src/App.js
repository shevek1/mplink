import React from "react";
import Home from "./components/Home";
import Nava from "./components/Nava";
import Card from "./components/Card";
import Detail from "./components/Detail";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Nava />
      <Card />
      <Home />
      <Footer />
    </div>
  );
}

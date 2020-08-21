import React from "react";
import "./App.scss";
import { EstateCard } from "./components/EstateCard";

function App() {
  return (
    <div className="home">
      <EstateCard type="create" />
      <EstateCard type="configure" />
      <EstateCard type="handover" />
    </div>
  );
}

export default App;

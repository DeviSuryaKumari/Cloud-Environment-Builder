import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="home">
      <div className="home__create-estate-card estate-card">
        <span className="card-text">Create Estate</span>
      </div>
      <div className="home__configure-estate-card estate-card">
        <span className="card-text">Configure Estate</span>
      </div>
      <div className="home__handover-estate-card estate-card">
        <span className="card-text">Handover Estate</span>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./home.scss";
import { EstateCard } from "./EstateCard";

function Home() {
  return (
    <div className="home">
      <div className="home__content">
        {/* Grid Item - 1 (Services Header) */}
        <div className="home__content__header">Estate Services</div>
        {/* Grid Item - 2 (Services) */}
        <div className="home__content__services">
          <EstateCard type="create hiera" />
          <EstateCard type="create estate" />
          <EstateCard type="configure" />
          <EstateCard type="handover" />
        </div>
        {/* Grid Item - 3 (Recents Header) */}
        <div className="home__content__header">Recent Estates</div>
        {/* Grid Item - 4 (Recent Estates) */}
        <div className="home__content__recent-estates"></div>
      </div>
    </div>
  );
}

export default Home;

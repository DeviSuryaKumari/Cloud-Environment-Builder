import React from "react";
import "./home.scss";
import { EstateCard } from "./EstateCard";
import { RecentEstatesList } from "./recent-estates-list/RecentEstatesList";

function Home() {
  let mockRecentEstates = [
    { name: "Estate 1", status: "Created", operations: "View" },
    { name: "Estate 2", status: "Configured", operations: "View" },
    { name: "Estate 3", status: "Creating", operations: "View" },
    { name: "Estate 4", status: "Handed Over", operations: "View" },
  ];
  mockRecentEstates = mockRecentEstates.concat(mockRecentEstates);
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
        <div className="home__content__recent-estates">
          <RecentEstatesList recentEstates={mockRecentEstates} />
        </div>
      </div>
    </div>
  );
}

export default Home;

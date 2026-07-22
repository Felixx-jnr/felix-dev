import React from "react";
import JourneyHeader from "./JourneyHeader";
import { Timeline } from "./Timeline";

const JourneySection = () => {
  const customEvents = [
    { year: "2000", description: "Company Founded" },
    { year: "2005", description: "Global Expansion" },
    { year: "2010", description: "Product V1 Launch" },
    { year: "2015", description: "Cloud Migration" },
    { year: "2020", description: "Next-Gen Platform" },
  ];
  return (
    <div>
      <JourneyHeader />
      <Timeline events={customEvents} />
    </div>
  );
};

export default JourneySection;

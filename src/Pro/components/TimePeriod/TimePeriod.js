import React from "react";
import Experience from "./components/Experience/Experience";

const TimePeriod = ({ period }) => (
  <div className="mt-2">
    <div>
      {period.start} - {period.end || "Now"}
    </div>
    <div>
      {period.experiences.map((xp) => (
        <Experience experience={xp} />
      ))}
    </div>
  </div>
);

export default TimePeriod;

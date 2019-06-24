import React from "react";

const Experience = ({ experience }) => (
  <div>
    <div>{experience.sum_up}</div>
    <div className="pl-2">
      {experience.projects.map(project => (
        <div className="text-sm flex">
          <div className="pr-1">-</div>
          <div>{project}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;

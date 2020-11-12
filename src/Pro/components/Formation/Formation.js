import React from "react";

const Formation = ({ formation }) => (
  <div className="flex mt-2">
    <div className="font-bold text-sm w-24 flex-shrink-0">
      {formation.start} {!formation.end ? "" : `- ${formation.end}`}
    </div>
    <div className="pl-1">
      <div className="text-sm">{formation.name}</div>
      {formation.precision && (
        <div className="text-xs">{formation.precision}</div>
      )}
    </div>
  </div>
);

export default Formation;

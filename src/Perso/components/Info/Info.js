import React from "react";

const Info = ({ label, children }) => (
  <div className="my-4">
    <div className="font-bold">{label}</div>
    <div className="text-xs">{children}</div>
  </div>
);

export default Info;

import React from "react";
import data from "./data/data-en";
import Pro from "./Pro/Pro";
import Perso from "./Perso/Perso";

function App() {
  return (
    <div className="flex flex-col h-full">
      <div className="text-4xl font-bold text-orange-500">
        {data.firstname} {data.lastname}
      </div>
      <div className="text-xl">{data.wanted_job}</div>
      <div className="flex-1 flex mt-6">
        <div className="bg-gray-200" style={{ flex: 2 }}>
          <Perso data={data} />
        </div>
        <div style={{ flex: 5 }}>
          <Pro data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;

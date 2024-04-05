import React from "react";
import Photo from "../assets/tom.jpg";
import Info from "./components/Info/Info";

const Perso = ({ data }) => (
  <div className="p-6">
    <div className="w-full">
      <img src={Photo} alt="tom" />
    </div>
    <div className="p-2 text-xs mt-2">{data.presentation}</div>
    <div className="text-right">
      <Info label="Birth date">{data.birthDate}</Info>
      <Info label="Address">
        {data.address.street} <br />
        {data.address.zip} {data.address.city}
      </Info>
      <Info label="Phone">{data.phone}</Info>
      <Info label="Email">{data.email}</Info>
      <Info label="Languages">{data.langs.join(", ")}</Info>
      <Info label="Hobbies">{data.hobbies.join(", ")}</Info>
      <Info label="Github">
        <a href={data.github}>{data.github}</a>
      </Info>
      <Info label="LinkedIn">
        <a href={data.linkedin}>{data.linkedin}</a>
      </Info>
    </div>
  </div>
);

export default Perso;

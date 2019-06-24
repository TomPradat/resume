import React from "react";
import Photo from "../assets/tom.png";
import Info from "./components/Info/Info";

const Perso = ({ data }) => (
  <div className="p-6">
    <div className="w-full">
      <img src={Photo} alt="tom" />
    </div>
    <div className="p-2 text-xs mt-2">{data.presentation}</div>
    <div className="text-right">
      <Info label="Date de naissance">{data.birthDate}</Info>
      <Info label="Adresse">
        {data.address.street} <br />
        {data.address.zip} {data.address.city}
      </Info>
      <Info label="Téléphone">{data.phone}</Info>
      <Info label="Adresse email">{data.email}</Info>
      <Info label="Mobilité">Permis B</Info>
      <Info label="Langues">{data.langs.join(", ")}</Info>
      <Info label="Centres d'intêret">{data.hobbies.join(", ")}</Info>
      <Info label="Github">{data.github}</Info>
    </div>
  </div>
);

export default Perso;

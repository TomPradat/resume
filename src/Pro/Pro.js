import React from "react";
import Title from "./components/Title/Title";
import TimePeriod from "./components/TimePeriod/TimePeriod";
import Formation from "./components/Formation/Formation";
import SkillField from "./components/SkillField/SkillField";

const Pro = ({ data }) => (
  <div className="pl-8">
    <Title>Experiences</Title>
    {data.timeline.map((period) => (
      <TimePeriod period={period} />
    ))}
    <Title>Education</Title>
    {data.formations.map((formation) => (
      <Formation formation={formation} />
    ))}
    <Title>Technical skills</Title>
    <div className="flex flex-col">
      {data.skill_fields.map((skill_field) => (
        <SkillField skill_field={skill_field} />
      ))}
    </div>
    <div className="mt-2 text-sm">
      See more on : <a href={data.stackshare}>{data.stackshare}</a>
    </div>
  </div>
);

export default Pro;

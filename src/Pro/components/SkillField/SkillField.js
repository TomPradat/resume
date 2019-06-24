import React from "react";

const SkillField = ({ skill_field }) => (
  <div className="flex-1 mb-2">
    <div className="font-bold">{skill_field.field_name}</div>
    <div>{skill_field.skills.join(", ")}</div>
  </div>
);

export default SkillField;

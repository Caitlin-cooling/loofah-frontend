import groupBy from "lodash/groupBy";

export const groupSkillsByTitle = (skills) => {
  return skills ? groupBy(skills, (skill) => skill.title) : null;
};

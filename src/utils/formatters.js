import groupBy from "lodash/groupBy";

export const groupSkillsByTitleAndGrade = (skills) => {
  if (skills) {
    const groups =  groupBy(skills, (skill) => skill.topic);
    return Object.keys(groups)
    .sort()
    .reduce((acc, key) => ({
        ...acc, [key]: groups[key]
    }), {});

  } else {
    return null;
  }
};

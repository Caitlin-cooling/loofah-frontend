import groupBy from "lodash/groupBy";

export const groupSkillsByTitleAndGrade = (skills) => {
  if (skills) {
    const groups =  groupBy(skills, (skill) => skill.category.title);
    return Object.keys(groups)
    .sort()
    .reduce((acc, key) => ({
        ...acc, [key]: groups[key]
    }), {});

  } else {
    return null;
  }
};

import groupBy from "lodash/groupBy";


export const groupSkillsByCategory = (skills) => {
  if (skills) {
    const groups =  groupBy(skills, (skill) => skill.category);
    return Object.keys(groups)
    .sort()
    .reduce((acc, key) => ({
        ...acc, [key]: groups[key]
    }), {});

  } else {
    return null;
  }
};


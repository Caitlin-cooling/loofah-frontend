import groupBy from "lodash/groupBy";

export const groupSkillsByTitle = (skills) => {
  if (skills) {
    const unorderedGroups = groupBy(skills, (skill) => skill.title);
    return Object.keys(unorderedGroups)
    .sort()
    .reduce(function (acc, title) {
        acc[title] = unorderedGroups[title];
        return acc;
    }, {});
  } else {
    return null;
  }
};

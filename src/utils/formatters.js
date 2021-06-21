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

export const orderCraftTitles = (crafts) => {
  const craftsCopy = [...crafts];
  const coreIndex = crafts.findIndex((craft) => craft.title === "core");
  craftsCopy.splice(coreIndex, 1);
  craftsCopy.unshift(crafts[coreIndex]);
  return craftsCopy;
};

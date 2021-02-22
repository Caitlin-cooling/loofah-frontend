import groupBy from "lodash/groupBy";

export const groupSkillsByTitleAndGrade = (skills) => {
  if (skills) {
    const groupedByTitle = groupBy(skills, (skill) => skill.title);
    const groupedByGrade = {};
    Object.keys(groupedByTitle).forEach((title) => {
      groupedByGrade[title] = groupBy(groupedByTitle[title], (skill) => skill.grade.title);
    });
    return groupedByGrade;
  } else {
    return null;
  }
};

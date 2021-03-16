import groupBy from "lodash/groupBy";

export const groupSkillsByTitleAndGrade = (skills) => {
  if (skills) {
    const groupedByTopic = groupBy(skills, (skill) => skill.topic);
    const groupedByGrade = {};
    Object.keys(groupedByTopic).forEach((topic) => {
      groupedByGrade[topic] = groupBy(groupedByTopic[topic], (skill) => skill.grade.title);
    });
    return groupedByGrade;
  } else {
    return null;
  }
};

import { groupSkillsByTitleAndGrade } from "../formatters";

describe("formatters.groupSkillsByTitleAndGrade", () => {
  it("returns null if no skills are passed in", () => {
    expect(groupSkillsByTitleAndGrade()).toEqual(null);
  });

  it("returns correctly grouped skills", () => {
    const result = groupSkillsByTitleAndGrade([
      {
        category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
        description: "You understand a wide range of design patterns and how they solve common recurring problems",
        grade: {id: "5feca323bce133e744d09b2d", title: "analystDeveloper", __typename: "Grade"},
        id: "5feca323bc67214a38e40710",
        topic: "running and deploying",
        __typename: "SkillDTO"
      },
      {
        category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
        description: "You understand algorithmic (time and space) and code (cyclomatic) complexity",
        grade: {id: "5feca323bce133e744d09b2d", title: "developer", __typename: "Grade"},
        id: "5feca323bc67214a38e4070d",
        topic: "algorithms and data structures",
        __typename: "SkillDTO"
      },
      {
        category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
        description: "You understand a wide range of design patterns and how they solve common recurring problems",
        grade: {id: "5feca323bce133e744d09b2d", title: "developer", __typename: "Grade"},
        id: "5feca323bc67214a38e40710",
        topic: "code quality",
        __typename: "SkillDTO"
      },
      {
        category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
        description: "You have an awareness of common data structures and their benefits / limitations",
        grade: {id: "5feca323bce133e744d09b2d", title: "analystDeveloper", __typename: "Grade"},
        id: "5feca323bc67214a38e4070e",
        topic: "algorithms and data structures",
        __typename: "SkillDTO"
      }
    ]);
    expect(result).toEqual({
      "algorithms and data structures": {
        "analystDeveloper": [
          {
            category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
            description: "You have an awareness of common data structures and their benefits / limitations",
            grade: {id: "5feca323bce133e744d09b2d", title: "analystDeveloper", __typename: "Grade"},
            id: "5feca323bc67214a38e4070e",
            topic: "algorithms and data structures",
            __typename: "SkillDTO"
          }
        ],
        "developer": [
          {
            category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
            description: "You understand algorithmic (time and space) and code (cyclomatic) complexity",
            grade: {id: "5feca323bce133e744d09b2d", title: "developer", __typename: "Grade"},
            id: "5feca323bc67214a38e4070d",
            topic: "algorithms and data structures",
            __typename: "SkillDTO"
          }
        ]
      },
      "code quality": {
        "developer": [
          {
            category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
            description: "You understand a wide range of design patterns and how they solve common recurring problems",
            grade: {id: "5feca323bce133e744d09b2d", title: "developer", __typename: "Grade"},
            id: "5feca323bc67214a38e40710",
            topic: "code quality",
            __typename: "SkillDTO"
          }
        ]
      },
      "running and deploying": {
        "analystDeveloper": [
          {
            category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
            description:
              "You understand a wide range of design patterns and how they solve common recurring problems",
            grade: {id: "5feca323bce133e744d09b2d", title: "analystDeveloper", __typename: "Grade"},
            id: "5feca323bc67214a38e40710",
            topic: "running and deploying",
            __typename: "SkillDTO"
          }
        ]
      }
    });
  });
});
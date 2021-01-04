import { groupSkillsByTitle } from "../formatters";

describe("formatters.groupSkillsByTitle", () => {
  it("returns null if no skills are passed in", () => {
    expect(groupSkillsByTitle()).toEqual(null);
  });

  it("returns correctly grouped and ordered skills", () => {
    const result = groupSkillsByTitle([
      {
        category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
        description: "You understand a wide range of design patterns and how they solve common recurring problems",
        grade: {id: "5feca323bce133e744d09b2d", title: "analystDeveloper", __typename: "Grade"},
        id: "5feca323bc67214a38e40710",
        title: "running and deploying",
        __typename: "SkillDTO"
      },
      {
        category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
        description: "You understand algorithmic (time and space) and code (cyclomatic) complexity",
        grade: {id: "5feca323bce133e744d09b2d", title: "analystDeveloper", __typename: "Grade"},
        id: "5feca323bc67214a38e4070d",
        title: "algorithms and data structures",
        __typename: "SkillDTO"
      },
      {
        category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
        description: "You understand a wide range of design patterns and how they solve common recurring problems",
        grade: {id: "5feca323bce133e744d09b2d", title: "analystDeveloper", __typename: "Grade"},
        id: "5feca323bc67214a38e40710",
        title: "code quality",
        __typename: "SkillDTO"
      },
      {
        category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
        description: "You have an awareness of common data structures and their benefits / limitations",
        grade: {id: "5feca323bce133e744d09b2d", title: "analystDeveloper", __typename: "Grade"},
        id: "5feca323bc67214a38e4070e",
        title: "algorithms and data structures",
        __typename: "SkillDTO"
      }
    ]);
    expect(result).toEqual({
      "algorithms and data structures": [
        {
          category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
          description: "You understand algorithmic (time and space) and code (cyclomatic) complexity",
          grade: {id: "5feca323bce133e744d09b2d", title: "analystDeveloper", __typename: "Grade"},
          id: "5feca323bc67214a38e4070d",
          title: "algorithms and data structures",
          __typename: "SkillDTO"
        },
        {
          category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
          description: "You have an awareness of common data structures and their benefits / limitations",
          grade: {id: "5feca323bce133e744d09b2d", title: "analystDeveloper", __typename: "Grade"},
          id: "5feca323bc67214a38e4070e",
          title: "algorithms and data structures",
          __typename: "SkillDTO"
        },
      ],
      "code quality": [
        {
          category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
          description: "You understand a wide range of design patterns and how they solve common recurring problems",
          grade: {id: "5feca323bce133e744d09b2d", title: "analystDeveloper", __typename: "Grade"},
          id: "5feca323bc67214a38e40710",
          title: "code quality",
          __typename: "SkillDTO"
        }
      ],
      "running and deploying": [
        {
          category: {id: "5feca3235c775b1ddfe93a68", title: "technical", __typename: "Category"},
          description: "You understand a wide range of design patterns and how they solve common recurring problems",
          grade: {id: "5feca323bce133e744d09b2d", title: "analystDeveloper", __typename: "Grade"},
          id: "5feca323bc67214a38e40710",
          title: "running and deploying",
          __typename: "SkillDTO"
        },
      ]
    });
    expect(Object.keys(result)).toEqual(["algorithms and data structures", "code quality", "running and deploying"]);
  });
});
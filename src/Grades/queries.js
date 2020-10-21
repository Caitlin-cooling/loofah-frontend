import { gql } from 'apollo-boost';

export const GET_GRADES_QUERY = gql`
  query GetGrades {
    grades {
      id
      title
    }
  }
`;

export const GET_SKILLS_BY_GRADE_QUERY = gql`
  query SkillsByGrade($gradeId: String) {
    skillsByGrade(gradeId: $gradeId) {
      id
      title
    }
  }
`;
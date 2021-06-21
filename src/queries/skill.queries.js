import { gql } from "@apollo/client";

export const GET_SKILLS_QUERY = gql`
  query Skills($filter: SkillFilter) {
    skills(filter: $filter) {
      id
      description
      category {
        id
        title
      }
      grade {
        id
        title
      }
    }
  }
`;
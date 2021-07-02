import { gql } from "@apollo/client";

export const GET_SKILLS_QUERY = gql`
  query Skills($filter: SkillFilter) {
    skills(filter: $filter) {
      id
      headline
      description
      examples
      crafts {
        title
      }
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
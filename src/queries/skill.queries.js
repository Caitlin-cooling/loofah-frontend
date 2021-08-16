import { gql } from "@apollo/client";

// TODO this needs to be changed when we migrate to hosted backend
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
        title
      }
      grade {
        title
      }
    }
  }
`;
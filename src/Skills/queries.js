import { gql } from 'apollo-boost';

export const GET_SKILLS_QUERY = gql`
  query Skills($filter: SkillFilter) {
    skills(filter: $filter) {
      id
      title
    }
  }
`;
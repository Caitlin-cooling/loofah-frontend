import { gql } from 'apollo-boost';

export const GET_GRADES_QUERY = gql`
  query GetGrades {
    grades {
      id
      title
    }
  }
`;

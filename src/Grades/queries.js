import { gql } from '@apollo/client';

export const GET_GRADES_QUERY = gql`
  query GetGrades {
    grades {
      id
      title
    }
  }
`;

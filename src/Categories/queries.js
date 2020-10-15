import { gql } from 'apollo-boost';

export const GET_CATEGORIES_QUERY = gql`
  query GetCategories {
    categories {
      id
      title
      description
    }
  }
`;
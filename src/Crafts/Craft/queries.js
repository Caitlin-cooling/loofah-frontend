import { gql } from 'apollo-boost';

export const GET_CRAFT_BY_ID = gql`
  query Craft($id: String) {
    craft(id: $id) {
      title
      description
    }
  }
`;
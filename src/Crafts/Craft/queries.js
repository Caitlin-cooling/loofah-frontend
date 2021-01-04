import { gql } from "@apollo/client";

export const GET_CRAFT_BY_ID = gql`
  query Craft($id: String) {
    craft(id: $id) {
      title
      description
    }
  }
`;
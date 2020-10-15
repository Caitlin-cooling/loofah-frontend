import { gql } from 'apollo-boost';

export const GET_SKILLS_BY_CATEGORY_QUERY = gql`
  query SkillsByCategory($categoryId: String) {
    skillsByCategory(categoryId: $categoryId) {
      id
      title
    }
  }
`;
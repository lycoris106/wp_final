import { gql } from '@apollo/client';

export const SEARCH_QUERY = gql`
  query recipes($ingredients: [String!]) {
    recipes(ingredients: $ingredients) {
      recipe {
        id
        title
        url
        ingredients # null
        instructions # null
      }
    }
  }
`;
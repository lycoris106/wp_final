import { gql } from '@apollo/client';

export const SEARCH_QUERY = gql`
  query recipes($ingredients: [String!]) {
    recipes(ingredients: $ingredients) {
      id
      title
      image_url
      ingredients
      instructions {
          title
          contents
      }
      tags
      time {
          preparation
          cook
          cleanup
      }
    }
  }
`;
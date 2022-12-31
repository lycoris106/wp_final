import { gql } from '@apollo/client';

export const SEARCH_QUERY = gql`
    query recipes($ingredients: [String]!) {
        recipes(ingredients: $ingredients) {
            id
            title
            image_url
            ingredients
            tags
        }
    }
`;

export const GET_RECIPE_QUERY = gql`
    query recipe($id: ID!) {
        recipe(id: $id) {
            id
            title
            content
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
`
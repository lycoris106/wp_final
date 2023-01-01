import { gql } from '@apollo/client';

export const SEARCH_QUERY = gql`
    query recipes($ingredients: [String]!) {
        recipes(ingredients: $ingredients) {
            id
            title
            image_url
            tags
            prev
            next
        }
    }
`;

export const GET_RECIPE_QUERY = gql`
    query recipe($id: ID!, $ingredients: [String]!) {
        recipe(id: $id, ingredients: $ingredients) {
            id
            title
            content
            image_url
            ingredients
            matches
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
import { gql } from '@apollo/client';

export const SEARCH_QUERY = gql`
    query recipes($ingredients: [String]!) {
        recipes(ingredients: $ingredients) {
            id
            title
            image_url
            tags
            matches
            prev
            next
        }
    }
`;

export const GET_RECIPE_QUERY = gql`
    query recipe($id: ID!) {
        recipe(id: $id) {
            content
            instructions {
                title
                contents
            }
            ingredients
            time {
                preparation
                cook
                cleanup
            }
        }
    }
`
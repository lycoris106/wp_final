import { gql } from '@apollo/client';

export const SEARCH_QUERY = gql`
    query recipes($ingredients: [String]!) {
        recipes(ingredients: $ingredients) {
            prev
            id
            next
            title
            image_url
            ingredients {
                content
                match
            }
            tags
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
            time {
                preparation
                cook
                cleanup
            }
        }
    }
`
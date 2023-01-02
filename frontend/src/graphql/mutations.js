import { gql } from '@apollo/client';

export const CREATE_RECIPE_MUTATION = gql`
    mutation CreateRecipe($input: CreateRecipeInput!) {
        createRecipe(input: $input) {
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
`;

export const UPDATE_RECIPE_MUTATION = gql`
    mutation UpdateRecipe($input: UpdateRecipeInput!) {
        updateRecipe(input: $input) {
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
`;

export const DELETE_RECIPE_MUTATION = gql`
    mutation DeleteRecipe($id: ID!) {
        deleteRecipe(id: $id)
    }
`;
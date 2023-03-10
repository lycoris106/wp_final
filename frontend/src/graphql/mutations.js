import { gql } from '@apollo/client';

export const CREATE_RECIPE_MUTATION = gql`
    mutation CreateRecipe($input: CreateRecipeInput!) {
        createRecipe(input: $input) {
            prev
            id
            next
            title
            content
            image_url
            ingredients {
                content
                match
            }
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
            prev
            id
            next
            title
            content
            image_url
            ingredients {
                content
                match
            }
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

export const CREATE_USER_MUTATION = gql`
    mutation CreateUser($name: String!, $password: String!) {
        createUser(name: $name, password: $password) {
            ok
            user {
                token
                name
                contributions
                favorites
            }
            error
        }
    }
`;

export const LOGIN_USER_MUTATION = gql`
    mutation LoginUser($name: String!, $password: String!) {
        loginUser(name: $name, password: $password) {
            ok
            user {
                token
                name
                contributions
                favorites
            }
            error
        }
    }
`;

export const UPDATE_USER_MUTATION = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
            ok
            user {
                token
                name
                contributions
                favorites
            }
            error
        }
    }
`;
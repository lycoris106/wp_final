import { gql } from '@apollo/client';

export const RECIPE_CREATED_SUBSCRIPTION = gql`
    subscription RecipeCreated {
        recipeCreated {
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

export const RECIPE_UPDATED_SUBSCRIPTION = gql`
    subscription RecipeUpdated {
        recipeUpdated {
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

export const RECIPE_DELETED_SUBSCRIPTION = gql`
    subscription RecipeDeleted {
        recipeDeleted
    }
`;
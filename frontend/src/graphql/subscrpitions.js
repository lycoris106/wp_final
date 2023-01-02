import { gql } from '@apollo/client';

export const RECIPE_CREATED_SUBSCRIPTION = gql`
    subscription RecipeCreated {
        recipeCreated {
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

export const RECIPE_UPDATED_SUBSCRIPTION = gql`
    subscription RecipeUpdated {
        recipeUpdated {
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

export const RECIPE_DELETED_SUBSCRIPTION = gql`
    subscription RecipeDeleted {
        recipeDeleted
    }
`;
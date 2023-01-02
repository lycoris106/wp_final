const Subscription = {
    recipeCreated: {
        subscribe: (parent, args, {pubSub}) => {
            return pubSub.subscribe('RECIPE_CREATED');
        }
    },

    recipeUpdated: {
        subscribe: (parent, args, {pubSub}) => {
            return pubSub.subscribe('RECIPE_UPDATED');
        }
    },

    recipeDeleted: {
        subscribe: (parent, args, {pubSub}) => {
            return pubSub.subscribe('RECIPE_DELETED');
        }
    },
};

export default Subscription;
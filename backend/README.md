# 1111 Web Programming Final Project Backend

## PreWork
### scrapy
- crawl recipes from [Asian Food Network](https://asianfoodnetwork.com/) by `scrapy`
#### 1. data example
- refer to submodule `scraper`
#### 2. git submodule management
- update to the version recorded in current repository (for all collaborator)
```
git pull --rebase
git submodule update
```
- update to the latest version of remote submodule repository (for developer only)
```
git submodule update --remote
git add .
git commit -m "..."
git push
```

### dataset (deprecated)
#### 1. raw data example
- download `layer1.json` from [Recipe1M+](http://pic2recipe.csail.mit.edu/) (non-commercial use only)
```
{
    "ingredients": [{"text": "8 ounces, weight Light Fat Free Vanilla Yogurt (I Used Activia)"}, {...}],
    "url": "http://tastykitchen.com/recipes/breakfastbrunch/yogurt-parfaits/",
    "partition": "train",
    "title": "Yogurt Parfaits",
    "id": "000095fc1d",
    "instructions": [{"text": "Layer all ingredients in a serving dish."}, {...}]
}
```
#### 2. filtered data example
- extracted by `filter.py`
```
{
    "id": "000095fc1d",
    "title": "Yogurt Parfaits",
    "url": "http://tastykitchen.com/recipes/breakfastbrunch/yogurt-parfaits/",
    "ingredients": ["8 ounces, weight Light Fat Free Vanilla Yogurt (I Used Activia)", "..."],
    "instructions": ["Layer all ingredients in a serving dish.", "..."]
}
```

## Query
### 1. query allrecipes
```
query {
    allrecipes {
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
```

### 2. query recipes
#### invalid query
```
query {
    recipes {
        id
        title
        image_url
        tags
        prev
        next
    }
}
```
#### query no recipes
```
query {
    recipes (ingredients: []) {
        id
        title
        image_url
        tags
        prev
        next
    }
}
```
#### query recipes with `sugar` included in `ingredients`
```
query {
    recipes (ingredients: ["sugar"]) {
        id
        title
        image_url
        tags
        prev
        next
    }
}
```

### 2. query recipe
#### `id` dose not exist
```
query {
    recipe (
        id: "does not exist"
        ingredients: ["CHILI", "shallots", "Sugar"]
    ) {
        id
        title
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
```
#### `id` exists
```
query {
    recipe (
        id: "11d40156893b11eda36d8b51443f2256"
        ingredients: ["CHILI", "shallots", "Sugar"]
    ) {
        id
        title
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
```

## Mutation
### 1. mutation createRecipe
```
mutation {
    createRecipe (input: {
        id: "create"
        title: "Recipe for creating"
    }) {
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
```

### 2. mutation updateRecipe
```
mutation {
    updateRecipe (input: {
        id: "update"
    }) {
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
```

### 3. mutation deleteRecipe
```
mutation {
    deleteRecipe(id: "delete") {
        id
    }
}
```

## Subscription
### 1. subscription recipeCreated
### 2. subscription recipeUpdated
### 3. subscription recipeDeleted
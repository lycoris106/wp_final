# 1111 Web Programming Final Project Backend

## PreWork
### scrapy
- crawl recipes from [Asian Food Network](https://asianfoodnetwork.com/) by `scrapy`
#### 1. data example
- refer to submodule `scraper`
#### 2. git submodule management
- update to the version recorded in current repository (for collaborators)
```
git pull --rebase
git submodule update
```
- update to the latest version of remote submodule repository (for developer)
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

## Recipe
### query
#### 1. recipes
```
query {
    recipes (ingredients: ["beef", "garlic"]) {
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
```

#### 2. recipe
```
query {
    recipe (
        id: "f62f10108aae11eda9ecf19f891c3f45"
    ) {
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
```

### mutation
#### 1. createRecipe
```
mutation {
    createRecipe (input: {
        title: "Recipe for creating"
    }) {
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
```

#### 2. updateRecipe
```
mutation {
    updateRecipe (input: {
        id: "fc38c37c8ac011eda9ecf19f891c3f45"
        title: "update"
    }) {
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
```

#### 3. deleteRecipe
```
mutation {
    deleteRecipe(
      	id: "fc38c37c8ac011eda9ecf19f891c3f45"
    )
}
```
## User
### mutation
#### 1. createUser
```
mutation {
    createUser (
        name: "victorkuoz"
        password: "b08902069"
    ) {
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
```

#### 2. loginUser
```
mutation {
    loginUser (
        name: "victorkuoz"
        password: "b08902069"
    ) {
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
```

#### 3. updateUser
```
mutation {
    updateUser ( input: {
        token: "necessary but doesn't care"
        name: "victorkuoz"
        contribution: "recipeID"
        favorite: "recipeID"
    }) {
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
```
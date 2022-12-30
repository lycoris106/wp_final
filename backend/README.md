# 1111 Web Programming Final Project Backend

## PreWork
### scrapy
- crawl recipes from [Asian Food Network](https://asianfoodnetwork.com/) by `scrapy`
#### 1. data example
- refer to submodule `scraper`
#### 2. git submodule management
- update to the version recorded in current repository (for collaborator)
```
git pull --rebase
git submodule update --init
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
- `python3 filter.py --input downloaded_file --output output_file`
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
### 1. recipes
#### query all recipes
```
query {
    recipes {
        id
        title
        image_url
        ingredients
        instructions {
            title
            content
        }
        tags
        difficulty
        time {
            preparation
            cook
            cleanup
        }
    }
}
```

#### query recipes by `ingredients`
- no recipes
```
query {
    recipes (ingredients: []) {
        id
        title
        image_url
        ingredients
        instructions {
            title
            content
        }
        tags
        difficulty
        time {
            preparation
            cook
            cleanup
        }
    }
}
```
- recipes with `sugar` included in `ingredients`
```
query {
    recipes (ingredients: ["sugar"]) {
        id
        title
        image_url
        ingredients
        instructions {
            title
            content
        }
        tags
        difficulty
        time {
            preparation
            cook
            cleanup
        }
    }
}
```

### 2. recipe
#### query a recipe by `id`
```
query {
    recipe (id: "908b26ad87ef11eda55847b92c10f584") {
        id
        title
        image_url
        ingredients
        instructions {
            title
            content
        }
        tags
        difficulty
        time {
            preparation
            cook
            cleanup
        }
    }
}
```
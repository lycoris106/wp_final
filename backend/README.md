# 1111 Web Programming Final Project Backend

## PreWork
### 1. scrapy
- crawl recipes from [asian food network](https://asianfoodnetwork.com/) by `scrapy`
#### git submodule management
- how to initialize scrapy submodule
```
git submodule init
```
- how to update scrapy submodule
```
git submodule update --remote
```
- reference
```
https://blog.puckwang.com/posts/2020/git-submodule-vs-subtree/
```
```
http://shachiku.life/posts/difference-between-subtree-and-submodule/
```

### 2. dataset
#### raw data example
- download `layer1.json` from [Recipe1M+](http://pic2recipe.csail.mit.edu/) (non-commercial use only)
```
[
    {
        "ingredients": [{"text": "8 ounces, weight Light Fat Free Vanilla Yogurt (I Used Activia)"}, {...}],
        "url": "http://tastykitchen.com/recipes/breakfastbrunch/yogurt-parfaits/",
        "partition": "train",
        "title": "Yogurt Parfaits",
        "id": "000095fc1d",
        "instructions": [{"text": "Layer all ingredients in a serving dish."}, {...}]
    },
]
```

#### filtered data example
- `python3 filter.py --input downloaded_file --output output_file`
```
[
    {
        "id": "000095fc1d",
        "title": "Yogurt Parfaits",
        "url": "http://tastykitchen.com/recipes/breakfastbrunch/yogurt-parfaits/",
        "ingredients": ["8 ounces, weight Light Fat Free Vanilla Yogurt (I Used Activia)", "..."],
        "instructions": ["Layer all ingredients in a serving dish.", "..."]
    },
]
```

## Query
### 1. recipes
#### all recipes
```
query {
    recipes {
        id
        title
        url
        ingredients # null
        instructions # null
    }
}
```

#### recipes with `ingredients`
- all recipes
```
query {
    recipes (ingredients: null) {
        id
        title
        url
        ingredients # null
        instructions # null
    }
}
```
- no recipes
```
query {
    recipes (ingredients: []) {
        id
        title
        url
        ingredients # null
        instructions # null
    }
}
```
- target recipes
```
query {
    recipes (ingredients: ["water", "cheese"]) {
        id
        title
        url
        ingredients # null
        instructions # null
    }
}
```

### 2. recipe
- by `id`
```
query {
    recipe (id: "000033e39b") {
        id
        title
        url
        ingredients
        instructions
    }
}
```
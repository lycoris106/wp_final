# 1111 Web Programming Final Project Backend

## PreWork

### raw data example
- Download `layer1.json` from [Recipe1M+](http://pic2recipe.csail.mit.edu/) (non-commercial use only)
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

### filtered data example
- `python3 filter.py --input path2downloaded_file --output path2output_file`
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

## Query - recipes
- all
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

- with `ingredients`
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

## Query - recipe
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


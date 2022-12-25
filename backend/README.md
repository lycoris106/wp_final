# 1111 Web Programming Final Project Backend

## PreWork

### Raw Data Example
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

### Filtered Data Example
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



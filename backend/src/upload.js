import recipeModel from "./models/recipe.js"

const example = [
    {
        "id": "000033e39b",
        "title": "Dilly Macaroni Salad Recipe",
        "url": "http://cookeatshare.com/recipes/dilly-macaroni-salad-49166",
        "ingredients": ["1 c. elbow macaroni", "1 c. cubed American cheese (4 ounce.)", "1/2 c. sliced celery", "1/2 c. minced green pepper", "3 tbsp. minced pimento", "1/2 c. mayonnaise or possibly salad dressing", "1 tbsp. vinegar", "3/4 teaspoon salt", "1/2 teaspoon dry dill weed"],
        "instructions": ["Cook macaroni according to package directions; drain well.", "Cold.", "Combine macaroni, cheese cubes, celery, green pepper and pimento.", "Blend together mayonnaise or possibly salad dressing, vinegar, salt and dill weed; add in to macaroni mix.", "Toss lightly.", "Cover and refrigeratewell.", "Serve salad in lettuce lined bowl if you like.", "Makes 6 servings."]
    },
    {
        "id": "000035f7ed",
        "title": "Gazpacho",
        "url": "http://www.foodnetwork.com/recipes/gazpacho1.html",
        "ingredients": ["8 tomatoes, quartered", "Kosher salt", "1 red onion, cut into small dice", "1 green bell pepper, cut into small dice", "1 red bell pepper, cut into small dice", "1 yellow bell pepper, cut into small dice", "1/2 cucumber, cut into small dice", "Extra-virgin olive oil, for drizzling", "3 leaves fresh basil, finely chopped"],
        "instructions": ["Add the tomatoes to a food processor with a pinch of salt and puree until smooth.", "Combine the onions, bell peppers and cucumbers with the tomato puree in a large bowl.", "Chill at least 1 hour.", "Drizzle with olive oil, garnish with chopped basil and serve."]
    },
    {
        "id": "00003a70b1", 
        "title": "Crunchy Onion Potato Bake",
        "url": "http://www.food.com/recipe/crunchy-onion-potato-bake-479149",
        "ingredients": ["2 12 cups milk", "1 12 cups water", "14 cup butter", "mashed potatoes, 1 box, homestyle", "1 (8 ounce) can whole kernel corn (drained)", "1 cup cheddar cheese", "1 cup French-fried onions"],
        "instructions": ["Preheat oven to 350 degrees Fahrenheit.", "Spray pan with non stick cooking spray.", "Heat milk, water and butter to boiling; stir in contents of both pouches of potatoes; let stand one minute.", "Stir in corn.", "Spoon half the potato mixture in pan.", "Sprinkle half each of cheese and onions; top with remaining potatoes.", "Sprinkle with remaining cheese and onions.", "Bake 10 to 15 minutes until cheese is melted.", "Enjoy !"]},
    {
        "id": "00004320bb",
        "title": "Cool 'n Easy Creamy Watermelon Pie",
        "url": "http://www.food.com/recipe/cool-n-easy-creamy-watermelon-pie-66340",
        "ingredients": ["1 (3 ounce) package watermelon gelatin", "14 cup boiling water", "1 (12 ounce) package Cool Whip, thawed", "2 cups cubed seedless watermelon", "1 graham cracker crust"],
        "instructions": ["Dissolve Jello in boiling water.", "Allow to cool to room temp.", "Whisk in Cool Whip.", "Fold in watermelon.", "Spoon into crust.", "Chill for 2-3 hours or overnight.", "Yum!"]},
    {
        "id": "0000631d90",
        "title": "Easy Tropical Beef Skillet",
        "url": "http://www.food.com/recipe/easy-tropical-beef-skillet-75863",
        "ingredients": ["12 cup shredded coconut", "1 lb lean ground beef", "1 -2 tablespoon minced fresh garlic (or to taste)", "salt and black pepper", "1 tablespoon lemon juice", "1 tablespoon soy sauce", "2 tablespoons cornstarch", "1 (8 ounce) can pineapple chunks, drained, reserving the liquid", "1 (16 ounce) can mandarin oranges, drained, reserving the liquid", "12 cup cashew nuts"],
        "instructions": ["In a large skillet, toast the coconut over medium heat, until golden and crisp; set aside.", "Brown ground beef and garlic in the same skillet; drain well.", "Add salt, pepper lemon juice and soy sauce.", "In a small bowl combine the cornstarch with reserved pineapple and mandarin orange liquids; stir well until smooth then add to ground beef and cook over medium heat for 5 mins, stirring constantly, until mixture is thickened.", "Stir in the pineapple and mandarin oranges; cook 2-3 mins, or until thoroughly heated.", "Serve over noodles or rice, and sprinkle with more toasted coconut and cashew nuts."]},
    {
        "id": "000075604a",
        "title": "Kombu Tea Grilled Chicken Thigh",
        "url": "https://cookpad.com/us/recipes/150100-kombu-tea-grilled-chicken-thigh",
        "ingredients": ["2 Chicken thighs", "2 tsp Kombu tea", "1 White pepper"],
        "instructions": ["Pierce the skin of the chicken with a fork or knife.", "Sprinkle with kombu tea evenly on both sides of the chicken, about 1 teaspoon per chicken thigh.", "Brown the skin side of the chicken first over high heat until golden brown.", "Sprinkle some pepper on the meat just before flipping over.", "Then brown the other side until golden brown."]},
    {
        "id": "00007bfd16",
        "title": "Strawberry Rhubarb Dump Cake",
        "url": "http://www.food.com/recipe/strawberry-rhubarb-dump-cake-408694",
        "ingredients": ["6 -8 cups fresh rhubarb, or", "6 -8 cups frozen rhubarb, thawed", "1 12 cups granulated sugar", "6 ounces strawberry Jell-O gelatin dessert", "1 white cake mix (2 layer size)", "1 12 cups water", "12 cup butter or 12 cup margarine, melted"],
        "instructions": ["Put ingredients in a buttered 9 x 12 x 2-inch pan in even layers in the order that they are given - DO NOT MIX.", "Bake in a 350 oven for 1 hour."]},
    {
        "id": "000095fc1d",
        "title": "Yogurt Parfaits",
        "url": "http://tastykitchen.com/recipes/breakfastbrunch/yogurt-parfaits/",
        "ingredients": ["8 ounces, weight Light Fat Free Vanilla Yogurt (I Used Activia)", "1 cup Fresh Sliced Strawberries", "1/4 cups Low-fat Granola"],
        "instructions": ["Layer all ingredients in a serving dish."]
    },
];

const dataInit = async () => {
    await recipeModel.deleteMany({});
    await recipeModel.insertMany(example);
    console.log("Database initialized!");
};

export { dataInit };
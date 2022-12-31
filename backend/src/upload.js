import recipeModel from "./models/recipe.js"
import recipes from "./recipes.js"

const example = [
    {
        "id": "11d40156893b11eda36d8b51443f2256",
        "title": "Thai Twist Onsen Eggs",
        "content": "We all know the flavourful shoyu-based onsen tamago, but here\u2019s one perfumed with heady Thai flavours of sprity lemongrass and gingery galangal, crisp fried shallots, Thai chillies and coriander. Salty fish sauce, lightly sweetened with earthy palm sugar forms the broth of this refreshing infusion and pulls the whole thing together. Our way of eating it? Slice the soft-boiled egg in half and first plop in the jammy yolk, tongue down for a creamy mouthfeel, then sip on the broth and repeat for the other half \u2013 this way you get to taste this twice! ",
        "image_url": "https://asianfoodnetwork.com/content/dam/afn/global/en/recipes/thai-twist-onsen-egg/Thai_Twist_Onsen_Tamago_Sauce_article_1920x1280_7.jpg.transform/recipestep-img/img.jpg",
        "ingredients": [
            "4 large-sized eggs (keep cold and refrigerated till needed)",
            "1 liter + 150ml of cool water",
            "\u00a0",
            "For the sauce:",
            "150ml water",
            "1 tbsp fish sauce",
            "\u00bc inch piece galangal, peeled",
            "1 lemongrass, outer leaves trimmed",
            "2 kaffir lime leaves",
            "1 red bird\u2019s eye chili",
            "1 tsp palm sugar",
            "\u00a0",
            "Garnish:",
            "1 tbsp fried shallots",
            "1 sprig coriander",
            "1 red bird\u2019s eye chili, sliced",
            "\u00a0"
        ],
        "instructions": [
            {
                "title": "Cook The Egg",
                "contents": [
                    "Put the 1 liter of water in a medium lidded pot and bring to a boil.",
                    "When boiling, turn off the heat, add the 200ml of cool water.",
                    "Gently add the cold eggs and cover, leaving for 18 minutes."
                ]
            },
            {
                "title": "Make The Broth",
                "contents": [
                    "While the eggs are cooking, make the broth.",
                    "Bash the galangal and lemongrass, tear the kaffir lime leaves and slice the chili thinly.",
                    "Add galangal, lemongrass and kaffir lime leaves to a small pot with 150ml of water and bring to a gentle simmer for 10 minutes.",
                    "Add the chili, palm sugar and fish sauce, stir and turn off the heat, allowing this to cool completely."
                ]
            }
        ],
        "tags": [
            "Thai",
            "Easy"
        ],
        "time": {
            "preparation": "5 min",
            "cook": "30 min",
            "cleanup": "5 min"
        }
    },
    {
        "id": "11d40157893b11eda36d8b51443f2256",
        "title": "Khao Pad Poo (Thai-style Crab Fried Rice)",
        "content": "The next time you have leftover rice, give this Thai-style crab-studded fried rice, the Bib Gourmand awarded dish on Michelin Guide a go! It\u2019s a go-to order at any street food stall in Thailand, and surprisingly easy to make. In a hot oiled pan, throw in the rice and break up the grains with fast, rapid stirs of the spatula. Then, toss in sweet crabmeat, chopped spring onions, sizzling garlic, a splash of savoury fish sauce and sharp lime juice (some use vinegar, too). If you're feeling extra hungry, we'd recommend bubbling up an egg in the same pan. ",
        "image_url": "https://asianfoodnetwork.com/content/dam/afn/global/en/recipes/crab-fried-rice/Crab_Fried_Rice_main_article_1920x1280_6.jpg.transform/recipestep-img/img.jpg",
        "ingredients": [
            "2 tbsp vegetable oil",
            "2 eggs",
            "360g cold cooked jasmine rice (2 rice bowls)",
            "4 cloves garlic",
            "1 small yellow onion",
            "10g spring onion",
            "150g cooked crab meat",
            "1 tbsp light soy sauce",
            "2 tsp light fish sauce",
            "\u00bd tsp fine white pepper",
            "\u00bc tsp white sugar",
            "\u00a0",
            "Sauce:",
            "1 clove garlic",
            "2 red bird\u2019s eye chilli",
            "1 tbsp fish sauce",
            "1 tsp fresh lime juice",
            "\u00a0",
            "Garnish:",
            "2 small cucumbers",
            "1 lime",
            "10g spring onion \u2013 bottom 4-inches only",
            "\u00a0"
        ],
        "instructions": [
            {
                "title": "Chop and Slice",
                "contents": [
                    "First, roughly chop the garlic, thinly slice the onions and cut the spring onion into \u00bc inch lengths.",
                    "For the rice \u2013 mix the light soy sauce, fish sauce, white pepper and white sugar together in a small bowl.",
                    "For the sauce \u2013 roughly chop the garlic, slice the bird\u2019s eye chilli and place in a sauce bowl, then add the fish sauce and lime juice."
                ]
            },
            {
                "title": "Start frying!",
                "contents": [
                    "Heat the oil over high heat in a wok or medium frying pan.",
                    "When hot, break in the eggs and allow to fry for 20 seconds before breaking the yolks. After 10 seconds, add the rice, garlic and onions, on top of the egg and begin to toss and stir breaking up any clumps.",
                    "After 1 minute, add the sauce and continue to toss and stir for 30 seconds.",
                    "Now add \u00bd\u00a0 the crab, toss for another 30 seconds and remove from heat."
                ]
            }
        ],
        "tags": [
            "Thai",
            "Easy"
        ],
        "time": {
            "preparation": "10 min",
            "cook": "8 min",
            "cleanup": "5 min"
        }
    },
    {
        "id": "11d40158893b11eda36d8b51443f2256",
        "title": "Pad Thai Goong (Shrimp Pad Thai)",
        "content": "This shrimp pad thai recipe has a lot of ingredients \u2013 but it\u2019s really an easy stir-fry where everything comes together quickly. Some ingredients can be substituted, like palm sugar for honey, but others, like tamarind paste, rice noodles, and of course, fish sauce, are essential to getting Thailand\u2019s most popular dish right. Rice noodles, because its neutral taste soaks up all the intense flavours readily. Tamarind paste too, used widely in Thai cooking, adds a sour-sweet buzz to this dish. Besides prawns, you\u2019ll often see pad thai with chicken, beef, a mix of seafood, or all-vegetarian.",
        "image_url": "https://asianfoodnetwork.com/content/dam/afn/global/en/recipes/pad-thai-goong-shrimp-pad-thai/Shrimp%20Pad%20Thai_article_1920x1280_4.jpg.transform/recipestep-img/img.jpg",
        "ingredients": [
            "120 g dried flat rice noodles, soaked till tender",
            "10 medium shrimps, tails left on, deveined",
            "2 tbsp sweet preserved radish, chopped",
            "150 g bean sprouts, tailed",
            "60 g garlic chives, cut into 2-inch lengths",
            "2 tbsp shallots, chopped",
            "2 tbsp dried shrimp, chopped",
            "2 tbsp roasted salted peanuts, chopped",
            "2 eggs",
            "Sauce:",
            "1 tbsp tamarind paste mixed with 4 tbsp hot water",
            "3 tbsp water",
            "3 tbsp palm sugar",
            "2 tbsp fish sauce",
            "1 tbsp roasted chili flakes",
            "Garnish:",
            "2 garlic chives, cut into 4-inch lengths",
            "60 g bean sprouts, tailed",
            "1 tbsp roasted, salted peanuts",
            "2 tsp chili flakes",
            "2 lime wedges"
        ],
        "instructions": [
            {
                "title": "Make the sauce",
                "contents": [
                    "Mix the tamarind-water mixture thoroughly then strain into a saucepan.",
                    "Add the fish sauce, water and palm sugar, then bring to a simmer. Stir well and turn off the heat."
                ]
            },
            {
                "title": "Fry the beancurd",
                "contents": [
                    "Add the garlic, shallots, dried shrimp and radish together in a small bowl.",
                    "In a wok or frying pan, heat the oil over medium high heat and fry the bean curd till golden. Remove with a slotted spoon, then fry the prawns till cooked - about 2-3 minutes.",
                    "Add the garlic mixture and stir-fry till fragrant, about 1-2 minutes."
                ]
            },
            {
                "title": "Add the noodles and sauce",
                "contents": [
                    "Add the noodles and sauce, and turn the heat up. Toss till the sauce is absorbed, then move the noodles to one side of the pan and crack in the eggs.",
                    "Put the noodles on top of the eggs, and add the peanuts, chili flakes, bean sprouts, chives, prawns and bean curd. Toss well until the eggs are cooked and in curds - about 1 minute - turn the heat off.",
                    "Instead of prawns, use mixed seafood, or chicken, pork or beef. You can also keep it vegetarian by adding mushrooms.",
                    " ",
                    "This dish needs to be cooked fast to ensure nothing is overcooked - so make sure you prepare all your ingredients in advance before frying."
                ]
            }
        ],
        "tags": [
            "Under 30 mins",
            "Thai",
            "Sweet and sour",
            "Savory",
            "Easy"
        ],
        "time": {
            "preparation": "10 min",
            "cook": "8 min",
            "cleanup": "10 min"
        }
    },
    {
        "id": "11d40159893b11eda36d8b51443f2256",
        "title": "Thai Fried Chicken Wings",
        "content": "Fried. Chicken. Wings. If that alone isn\u2019t enough to make you make it, this one\u2019s deep-fried with an addictive toss of intense Thai flavours. Think a kick of kaffir lime leaves, punchy peppercorns and bashed garlicky bits. The hardest ingredient to find might be coriander roots, or cilantro roots, depending on where you are. But it\u2019s worth the while \u2013 this warming herb gives a fresh grassy-minty aroma that\u2019s often a scent of many Thai dishes. If wings are too messy, drumettes work too. ",
        "image_url": "https://asianfoodnetwork.com/content/dam/afn/global/en/recipes/thai-fried-chicken-wings/Fried%20Chicken%20Wings_article_1920x1280_6.jpg.transform/recipestep-img/img.jpg",
        "ingredients": [
            "500 g chicken wings / 6 pcs",
            "1 head garlic",
            "\u00bd tsp white peppercorns",
            "1 tbsp coriander roots and stems",
            "1 tsp salt",
            "8 pcs kaffir lime leaves",
            "500 ml vegetable oil (for frying)"
        ],
        "instructions": [
            {
                "title": "Make the Marinade",
                "contents": [
                    "Split the head of garlic into half. Peel half the garlic, leaving the other half unpeeled.",
                    "Add the peeled garlic to a mortar and pestle/or food processor with the white peppercorns and coriander roots. Grind till pulpy, then add salt.\u00a0",
                    "Rub the paste over the chicken wing and cover or place in ziploc bag.",
                    "Leave to marinate in the refrigerator for 12-24 hours."
                ]
            },
            {
                "title": "Prep the Remaining Aromatics",
                "contents": [
                    "Put the remaining unpeeled garlic into a mortar and roughly crush with the pestle.",
                    "Remove the ribs from the kaffir lime leaves."
                ]
            },
            {
                "title": "Fry the chicken",
                "contents": [
                    "Wipe the residual paste off the chicken with a paper towel and bring the chicken to room temperature.",
                    "Heat the oil in a heavy based pan over high heat till shimmering, then add the chicken wings and fry until golden, turning with chopsticks or tongs - about 6-8 minutes.",
                    "Remove the chicken wings from the oil and drain on absorbent paper.\u00a0",
                    "Then, add the garlic to the hot oil. After 12 seconds, add the kaffir lime leaves as well, using a metal skimmer to stir and straining them out as soon as they are crispy and golden - about 30 seconds.",
                    "Make sure your oil is hot enough as failing to do so will result in soggy, oil chicken. ",
                    "Ensure the oil is hot enough by placing a wooden chopstick upright inside the oil, if bubbles appear on the chopstick, it\u2019s ready. ",
                    "Use chicken drumsticks or thighs instead of wings, but increase the cook time accordingly."
                ]
            }
        ],
        "tags": [
            "Snacks",
            "Thai",
            "Savory",
            "Easy"
        ],
        "time": {
            "preparation": "10 min",
            "cook": "20 min",
            "cleanup": "15 min"
        }
    },
    {
        "id": "11d4015a893b11eda36d8b51443f2256",
        "title": "Steamed Red Snapper with Lime",
        "content": "This Thai steamed fish dish is stunningly simple, but swimming in flavour. You get a zap of sour and sweet from lime slices, heat from the chillies, a great garlicky kick, and hints of lemongrass to round it all up. Best if your fish is fresh too \u2013 it adds a subtle sweetness to the whole dish. In Thai restaurants, a whole fish is often used. Here though, we\u2019ve used a fillet-sized portion that makes preparation fast, easy and satisfyingly manageable. ",
        "image_url": "https://asianfoodnetwork.com/content/dam/afn/global/en/recipes/steamed-red-snapper-with-lime/Steamed%20Red%20Snapper%20with%20Lime_article_1920x1280_6.jpg.transform/recipestep-img/img.jpg",
        "ingredients": [
            "2 red snapper fillets, 160 g each",
            "4 large cloves of garlic",
            "4 red bird's eye chili",
            "\u00bd a green lime",
            "1 lemongrass",
            "3 tbsp fresh lime juice",
            "2 tbsp light fish sauce",
            "\u00be tsp white sugar",
            "10 g fresh coriander leaves, picked"
        ],
        "instructions": [
            {
                "title": "Prepare the aromatics and sauce",
                "contents": [
                    "First, roughly chop the garlic and bird\u2019s eye chilli.",
                    "Thinly slice the lime.",
                    "Trim the lemongrass of its outer leaves and top half, leaving the bottom 4 inches, lightly smash the bulb with the back of a knife.",
                    "Mix the garlic, chilli, lemongrass, lime slices, lime juice, fish sauce and sugar in a small bowl."
                ]
            },
            {
                "title": "Steam away",
                "contents": [
                    "Prepare a steamer.",
                    "Place the fish fillets on the steamer dish, and pour the sauce over.",
                    "Steam for 6-8 mins until opaque and just firm, and remove from the steamer.",
                    "Do not overcook the fish, it will be firm and flake easily when done."
                ]
            }
        ],
        "tags": [
            "Under 30 mins",
            "Thai",
            "Sweet and sour",
            "Easy"
        ],
        "time": {
            "preparation": "5 min",
            "cook": "10 min",
            "cleanup": "10 min"
        }
    },
    {
        "id": "update",
        "title": "update",
        "content": "update",
        "image_url": "update",
        "ingredients": [
            "update",
        ],
        "instructions": [
            {
                "title": "update",
                "contents": [
                    "update",
                ]
            },
            {
                "title": "update",
                "contents": [
                    "update",
                ]
            }
        ],
        "tags": [
            "update",
        ],
        "time": {
            "preparation": "update",
            "cook": "update",
            "cleanup": "update",
        }
    },
    {
        "id": "delete",
        "title": "delete",
        "content": "delete",
        "image_url": "delete",
        "ingredients": [
            "delete",
        ],
        "instructions": [
            {
                "title": "delete",
                "contents": [
                    "delete",
                ]
            },
            {
                "title": "delete",
                "contents": [
                    "delete",
                ]
            }
        ],
        "tags": [
            "delete",
        ],
        "time": {
            "preparation": "delete",
            "cook": "delete",
            "cleanup": "delete",
        }
    }
];

const dataInit = async () => {
    // develop
    await recipeModel.deleteMany({});
    await recipeModel.insertMany(example);

    // online
    // if (!recipeModel.findOne({}))
    //     await recipeModel.insertMany(recipes);
    console.log("Database initialized!");
};

export { dataInit };
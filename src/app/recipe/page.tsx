import Image from "next/image";
import { ArrowRight, Instagram, Clock, Users, ChefHat } from "lucide-react";

export const metadata = {
    title: "Authentic Naga Recipes | Chef Salang Yanger",
    description:
        "Discover Chef Salang's traditional Naga recipes including Smoked Pork in Axone and Beans Family with dry bamboo shoot. Authentic cooking methods passed down through generations.",
};

const recipes = [
    {
        id: 1,
        name: "Smoked Pork in Axone",
        category: "Main Course",
        cookingTime: "1 hrs 20 min",
        serves: "3-4",

        image: "/images/recipe1.jpg",
        description: "A traditional Naga delicacy featuring tender smoked pork cooked with fermented soybeans (axone), creating a rich umami flavor profile.",
        ingredients: [
            "Smoked Pork: 500 gms",
            "Fermented Soybean (axone): 50 gms",
            "Dried Red Chilli: 10 pieces",
            "Tomato: 3 pieces",
            "Salt to Taste"
        ],
        methods: [
            "Cook the Fermented Soy Bean in a pot with water for about 1 to 2 hours",
            "Now add the remaining ingredients i.e., smoked pork, dried red chilli and tomato",
            "Cook until the meat is tender",
            "Grind the tomato and red chilli",
            "Mix all the ingredients and bring it to boil for about 1 to 2 minutes and ready to serve"
        ], 
        instagramLink: "https://www.instagram.com/p/DM-LqCqJW2L/?img_index=1"
    },
    {
        id: 2,
        name: "Naga Chicken with Cherry Tomatoes",
        category: "Main Course",
        cookingTime: "2 hrs",
        serves: "4-5",

        image: "/images/Lang.jpg",
        description: "A flavorful whole chicken marinated with traditional Naga garlic and mejanga seeds, slow-cooked with cherry tomatoes for an authentic feast.",
        ingredients: [
            "Chicken: one whole Chicken about 2kg",
            "Cherry Tomatoes: 1/2 kg",
            "Alu Lasüng (Naga Garlic): 250gms",
            "Mejanga Seeds Powder: 2 tbs",
            "Garlic: 100gms",
            "Oil",
            "Salt to taste"
        ],
        marinade: [
            "Grind garlic & mejanga seeds together with tablespoon of oil and marinate the whole chicken and keep overnight"
        ],
        methods: [
            "Fry the marinated chicken in a pan in less oil with covered lid for 1hr 30 min basting every 20 minutes",
            "Heat oil in a pan and add the whole cherry tomatoes and Alu Lasüng, and fry (sauté)",
            "Now, add the whole chicken and continue to fry about 5 minutes in low flames with covered lid. Garnish with mejanga seeds powder and its ready to serve"
        ], 
        instagramLink: "https://www.instagram.com/reel/DMKOC66pH6p/?igsh=ZDF2bnNzMmdmNnYy"
    },
    {
        id: 3,
        name: "Beans Family",
        category: "Vegetarian",
        cookingTime: "25-30 mins",
        serves: "2-3",

        image: "/images/recipe3.jpg",
        description: "A nutritious variety of beans cooked in dry bamboo shoot, showcasing the diverse flavors of Naga vegetarian cuisine.",
        ingredients: [
            "Kidney Beans: 50 gms",
            "Runner beans: 50 gms",
            "Black eyed beans: 50 gms",
            "Dry bamboo shoot: 10 gms",
            "Spring onion for garnish",
            "Salt to Taste"
        ],
        methods: [
            "Soak black eyed beans and kidney beans overnight (dried one)",
            "Take a cooking pot, cook kidney beans, black eyed beans with dry bamboo shoot until the beans are soft",
            "Add runner beans and cook for a minute. Serve garnish with spring onion"
        ], 
        instagramLink: "https://www.instagram.com/p/DOa5p5tCQCE/?img_index=1"
    },
    {
        id: 4,
        name: "Black & White (Grilled Chicken with stuffed nüoshi paste)",
        category: "Main Course",
        cookingTime: "25 min",
        serves: "4-5",

        image: "/images/recipe4.png",
        description: "Juicy chicken breast butterflied and stuffed with a flavorful nüoshi paste, then grilled to perfection for a smoky and spicy treat.",
        ingredients: [
            "Chicken breast: 1kg",
            "Nüoshi: 2 pieces",
            "Red Chilli: 5 pieces",
            "Tomato: 1 piece",
            "Garlic: 10 cloves",
            "Salt to taste"
        ],
        methods: [
            "Cook nüoshi with red chilli, tomato and salt and grind. Marinate the chicken with garlic and salt for 10 mins and keep aside",
            "Butterfly each breast by slicing in half horizontally through the centre, cutting almost but not completely through. Now stuff the chicken with nüoshi paste",
            "Grill the chicken breast for 10 mins on each side"
        ], 
        instagramLink: "https://www.instagram.com/p/DMcsJlypM2O/"
    }
];


export default function RecipePage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            {/* <section className="section-padding bg-card">
                <div className="container-custom text-center">
                    <h1 className="heading-xl mb-6">
                        Traditional <span className="text-primary">Naga Recipes</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                        Discover Chef Salang's authentic Naga recipes, passed down through generations and perfected with traditional cooking methods
                    </p>
                </div>
            </section> */}

            {/* Recipes Section */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="grid grid-cols-1 gap-12">
                        {recipes.map((recipe) => (
                            <div
                                key={recipe.id}
                                className="card-hover overflow-hidden rounded-lg bg-card"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="relative h-96 lg:h-auto">
                                        <Image
                                            src={recipe.image}
                                            alt={recipe.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        <div className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                                            {recipe.category}
                                        </div>

                                    </div>

                                    <div className="p-8">
                                        <h3 className="mb-4 text-2xl font-semibold">{recipe.name}</h3>
                                        <p className="mb-6 text-muted-foreground">
                                            {recipe.description}
                                        </p>

                                        {/* Recipe Info */}
                                        <div className="mb-6 flex flex-wrap gap-4">
                                            <div className="flex items-center">
                                                <Clock className="mr-2 h-4 w-4 text-primary" />
                                                <span className="text-sm font-medium">{recipe.cookingTime}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Users className="mr-2 h-4 w-4 text-primary" />
                                                <span className="text-sm font-medium">Serves {recipe.serves}</span>
                                            </div>
                                            {/* <div className="flex items-center">
                                                <ChefHat className="mr-2 h-4 w-4 text-primary" />
                                                <span className="text-sm font-medium">{recipe.difficulty}</span>
                                            </div> */}
                                        </div>

                                        {/* Ingredients */}
                                        <div className="mb-6">
                                            <h4 className="mb-3 text-lg font-semibold">Ingredients</h4>
                                            <ul className="space-y-1">
                                                {recipe.ingredients.map((ingredient, index) => (
                                                    <li key={index} className="text-sm text-muted-foreground">
                                                        • {ingredient}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Marinating Instructions (if exists) */}
                                        {recipe.marinade && (
                                            <div className="mb-6">
                                                <h4 className="mb-3 text-lg font-semibold">For Marinating</h4>
                                                <ul className="space-y-1">
                                                    {recipe.marinade.map((step, index) => (
                                                        <li key={index} className="text-sm text-muted-foreground">
                                                            • {step}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Methods */}
                                        <div className="mb-6">
                                            <h4 className="mb-3 text-lg font-semibold">Cooking Method</h4>
                                            <ol className="space-y-2">
                                                {recipe.methods.map((step, index) => (
                                                    <li key={index} className="text-sm text-muted-foreground">
                                                        <span className="font-medium text-primary">Step {index + 1}:</span> {step}
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>

                                        <div className="rounded-md bg-primary/10 p-4">
                                            <p className="text-center text-sm font-medium text-primary mb-3">
                                                Enjoy Cooking!
                                            </p>
                                            <div className="flex justify-center">
                                                <a
                                                    href={recipe.instagramLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-red-600 hover:to-red-800 transition-all duration-300"
                                                >
                                                    <Instagram className="mr-2 h-4 w-4" />
                                                    View on Instagram
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instagram Section */}
            {/* <section className="section-padding bg-card">
                <div className="container-custom text-center">
                    <div className="mb-6 flex items-center justify-center">
                        <Instagram className="mr-3 h-8 w-8 text-primary" />
                        <h2 className="heading-lg">Follow for More Recipes</h2>
                    </div>
                    <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
                        Follow Chef Salang on Instagram for more authentic Naga recipes, cooking tips, and behind-the-scenes content from the kitchen.
                    </p>
                    <a
                        href="https://www.instagram.com/salangyanger/?igsh=a3VkMzM4dW1pdHRj#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center"
                    >
                        Follow on Instagram
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </section> */}

            {/* Cooking Classes */}
            {/* <section className="section-padding bg-primary">
                <div className="container-custom text-center">
                    <h2 className="heading-lg mb-6 text-white">
                        Learn to Cook Authentic Naga Cuisine
                    </h2>
                    <p className="mx-auto mb-10 max-w-2xl text-xl text-white opacity-90">
                        Join Chef Salang for hands-on cooking classes where you'll learn traditional Naga cooking techniques and family recipes.
                    </p>
                    <a
                        href="https://wa.me/+918798769559?text=I'm interested in learning more about Naga cooking classes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center"
                    >
                        Inquire About Cooking Classes
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </section> */}

            {/* Culinary Philosophy */}
            {/* <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div className="relative h-[400px] overflow-hidden rounded-lg">
                            <Image
                                src="/detailing.jpg"
                                alt="Chef Salang preparing traditional dishes"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        <div>
                            <h2 className="heading-lg mb-6">
                                Our Culinary <span className="text-primary">Heritage</span>
                            </h2>
                            <p className="mb-6 text-lg text-muted-foreground">
                                These recipes represent the heart of Naga cuisine, preserved through generations of careful cooking and cultural tradition. Each dish tells a story of our ancestors and their connection to the land.
                            </p>
                            <p className="mb-6 text-lg text-muted-foreground">
                                Chef Salang's approach honors these time-tested methods while ensuring that modern cooks can recreate these authentic flavors in their own kitchens. Every ingredient has significance, from the fermented soybeans that add umami depth to the bamboo shoots that connect us to our forests.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                We invite you to experience the rich culinary heritage of Nagaland through these carefully preserved recipes.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
}
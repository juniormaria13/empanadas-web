const menuData = {
  meat: [
    { name: "Beef", desc: "Ground beef, onions & green olives", price: 4.50 },
    { name: "Soft Beef", desc: "Ground beef simmered with onions", price: 4.50 },
    { name: "Spicy Beef", desc: "Ground beef, onions & green olives (mild)", price: 4.50, badges: ["hot"] },
    { name: "Sweet Beef", desc: "Ground beef simmered with raisins", price: 4.50 },
    { name: "Signature Steak", desc: "Signature steak with onions & peppers", price: 4.50 },
    { name: "Chorizo", desc: "Argentinian sausage, onion & red pepper", price: 4.50 },
    { name: "Pork BBQ", desc: "Pork, onions & bbq sauce", price: 4.50 },
    { name: "Cuban", desc: "Pork, ham, pickles, mustard, mozzarella & ranch", price: 4.50, badges: ["hot"] },
    { name: "Carnitas", desc: "Pork, onions, cilantro, black beans & chipotle", price: 4.50, badges: ["hot"] },
    { name: "Chicken", desc: "Chicken breast, onions & red pepper", price: 4.50 },
    { name: "Spicy Chicken", desc: "Chicken breast, onions & red pepper (mild)", price: 4.50, badges: ["spicy"] },
    { name: "Chicken BBQ", desc: "Chicken breast, onions, red pepper & bbq sauce", price: 4.50 },
    { name: "Buffalo Chicken", desc: "Buffalo sauce, chicken & cheese", price: 4.50, badges: ["spicy"] },
    { name: "Cashew Chicken", desc: "Chicken with cashews", price: 4.50 },
    { name: "Cheeseburger", desc: "Ground beef, bacon, cheddar, pickles & ketchup", price: 4.50 },
    { name: "Taco", desc: "Seasoned taco-style beef with classic toppings", price: 4.50 },
    { name: "Quesadilla", desc: "Chicken breast, mozzarella & cheddar", price: 4.50 },
    { name: "Mac & Cheese", desc: "Elbow pasta, mozzarella & cheddar", price: 4.50, badges: ["veg"] }
  ],
  cheese: [
    { name: "Onion & Cheese", desc: "Onion, oregano & mozzarella", price: 4.50, badges: ["veg"] },
    { name: "Spinach", desc: "Spinach, onions & mozzarella", price: 4.50, badges: ["veg", "hot"] },
    { name: "Ham & Cheese", desc: "Diced ham & mozzarella", price: 4.50 },
    { name: "Hawaiian", desc: "Ham, pineapple & mozzarella", price: 4.50 },
    { name: "Palm Heart", desc: "Palm heart, mayo, ketchup & mozzarella", price: 4.50, badges: ["veg"] },
    { name: "Caprese", desc: "Tomatoes, basil & mozzarella", price: 4.50, badges: ["veg"] },
    { name: "Mushroom", desc: "Mushroom, onions & mozzarella", price: 4.50, badges: ["veg"] },
    { name: "Sweet Corn", desc: "Corn, bechamel, nutmeg & mozzarella", price: 4.50, badges: ["veg"] },
    { name: "Pepperoni", desc: "Pepperoni & mozzarella", price: 4.50 }
  ],
  sweet: [
    { name: "Dulce De Leche", desc: "Dulce de leche & cream cheese", price: 4.50 },
    { name: "Nutella", desc: "Nutella, Oreos & cream cheese", price: 4.50 },
    { name: "Apple Pie", desc: "Red apple, cinnamon & sugar", price: 4.50 },
    { name: "Banana Split", desc: "Dulce de leche, cream cheese & bananas", price: 4.50 },
    { name: "Guava", desc: "Guava & cream cheese", price: 4.50 }
  ],
  kids: [
    { name: "Pampa Kids Combo", desc: "2 Empanadas + 12oz Can", price: 10.60 },
    { name: "7in Pizza w/ Mozzarella", desc: "Classic cheese pizza", price: 9.00 },
    { name: "7in Pizza w/ Pepperoni", desc: "Classic pepperoni pizza", price: 9.00 },
    { name: "Chicken Fingers", desc: "3 units", price: 6.99 },
    { name: "Chicken Fingers", desc: "4 units", price: 8.50 }
  ],
  combos: [
    { name: "Pampa Kids", desc: "2 Empanadas + Soda", price: 10.60, save: "Save $0.90" },
    { name: "Pampa 1", desc: "3 Empanadas + Soda", price: 15.00, save: "Save $1.00" },
    { name: "Pampa 2", desc: "4 Empanadas + Soda", price: 19.00, save: "Save $1.50" },
    { name: "Pampa 3", desc: "6 Empanadas + Soda", price: 28.40, save: "Save $1.10" },
    { name: "Pampa 4", desc: "8 Empanadas + Soda", price: 37.40, save: "Save $1.10" },
    { name: "Pampa 5", desc: "12 Empanadas + 4 Sauces", price: 47.00, save: "Save $9.00" }
  ],
  drinks: [
    { name: "Canned Soda", desc: "Coca-Cola, Coke Diet, Coke Zero, Dr Pepper, Sprite, etc.", price: 2.50 },
    { name: "Bottled Drink", desc: "Sprite, Mexican Coke, Gold Peak Tea, Lemonade, Perrier", price: 3.50 }
  ],
  sauces: [
    { name: "Chimichurri", desc: "Classic Argentine herb sauce (1oz)", price: 0.50 },
    { name: "Salsa Roja", desc: "Red sauce (1oz)", price: 0.50 },
    { name: "Salsa Verde", desc: "Tomatillo & cilantro (mild) (1oz)", price: 0.50 },
    { name: "Garlic", desc: "Blended creamy garlic & olive oil (1oz)", price: 0.50 },
    { name: "Criolla", desc: "Bell pepper, onion & tomato in olive oil (1oz)", price: 0.50 }
  ],
  desserts: [
    { name: "Chocolate Cake", desc: "Large slice", price: 6.99 },
    { name: "Tres Leches", desc: "Traditional moist cake", price: 5.99 },
    { name: "Coco Alfajor", desc: "Argentine cookie sandwich", price: 2.50 }
  ]
};

// Also popular items for homepage
const popularItems = [
  { name: "Carnitas", desc: "Pork, onions, cilantro, black beans & chipotle", price: 4.50, badges: ["hot"] },
  { name: "Spicy Beef", desc: "Ground beef, onions & green olives (mild)", price: 4.50, badges: ["spicy"] },
  { name: "Cuban", desc: "Pork, ham, pickles, mustard & mozzarella", price: 4.50, badges: ["hot"] },
  { name: "Dulce De Leche", desc: "Dulce de leche & cream cheese", price: 4.50 }
];

export const menuData = {
  meat: [
    { id: 'beef',            name: { en: 'Beef',            es: 'Carne'           }, desc: { en: 'Ground beef, onions & green olives',                  es: 'Carne molida, cebollas y aceitunas verdes'            }, price: 4.50, img: '/img/beef.jpg' },
    { id: 'soft-beef',       name: { en: 'Soft Beef',       es: 'Carne Suave'     }, desc: { en: 'Ground beef simmered with onions',                    es: 'Carne molida cocinada con cebollas'                   }, price: 4.50, img: '/img/soft_beef.jpg' },
    { id: 'spicy-beef',      name: { en: 'Spicy Beef',      es: 'Carne Picante'   }, desc: { en: 'Ground beef, onions & green olives (mild)',            es: 'Carne molida, cebollas y aceitunas verdes (suave)'    }, price: 4.50, img: '/img/spicy_beef.jpg', badges: ['hot'] },
    { id: 'sweet-beef',      name: { en: 'Sweet Beef',      es: 'Carne Dulce'     }, desc: { en: 'Ground beef simmered with raisins',                   es: 'Carne molida cocinada con pasas'                      }, price: 4.50, img: '/img/sweet_beef.jpg' },
    { id: 'signature-steak', name: { en: 'Signature Steak', es: 'Bife Especial'   }, desc: { en: 'Signature steak with onions & peppers',               es: 'Bife especial con cebollas y pimientos'               }, price: 4.50, img: '/img/signature_steak.jpg' },
    { id: 'chorizo',         name: { en: 'Chorizo',         es: 'Chorizo'         }, desc: { en: 'Argentinian sausage, onion & red pepper',             es: 'Chorizo argentino, cebolla y pimiento rojo'           }, price: 4.50, img: '/img/chorizo.jpg' },
    { id: 'pork-bbq',        name: { en: 'Pork BBQ',        es: 'Cerdo BBQ'       }, desc: { en: 'Pork, onions & bbq sauce',                            es: 'Cerdo, cebollas y salsa BBQ'                          }, price: 4.50, img: '/img/pork_bbq.jpg' },
    { id: 'cuban',           name: { en: 'Cuban',           es: 'Cubana'          }, desc: { en: 'Pork, ham, pickles, mustard, mozzarella & ranch',     es: 'Cerdo, jamón, pepinillos, mostaza, mozzarella y ranch'}, price: 4.50, img: '/img/cuban.jpg', badges: ['hot'] },
    { id: 'carnitas',        name: { en: 'Carnitas',        es: 'Carnitas'        }, desc: { en: 'Pork, onions, cilantro, black beans & chipotle',      es: 'Cerdo, cebollas, cilantro, frijoles negros y chipotle'}, price: 4.50, img: '/img/carnitas.jpg', badges: ['hot'] },
    { id: 'chicken',         name: { en: 'Chicken',         es: 'Pollo'           }, desc: { en: 'Chicken breast, onions & red pepper',                 es: 'Pechuga de pollo, cebollas y pimiento rojo'           }, price: 4.50, img: '/img/chicken.jpg' },
    { id: 'spicy-chicken',   name: { en: 'Spicy Chicken',   es: 'Pollo Picante'   }, desc: { en: 'Chicken breast, onions & red pepper (mild)',          es: 'Pechuga de pollo, cebollas y pimiento rojo (suave)'   }, price: 4.50, img: '/img/spicy_chicken.jpg', badges: ['spicy'] },
    { id: 'chicken-bbq',     name: { en: 'Chicken BBQ',     es: 'Pollo BBQ'       }, desc: { en: 'Chicken breast, onions, red pepper & bbq sauce',     es: 'Pollo, cebollas, pimiento rojo y salsa BBQ'           }, price: 4.50, img: '/img/chicken_bbq.jpg' },
    { id: 'buffalo-chicken', name: { en: 'Buffalo Chicken', es: 'Pollo Buffalo'   }, desc: { en: 'Buffalo sauce, chicken & cheese',                    es: 'Salsa buffalo, pollo y queso'                         }, price: 4.50, img: '/img/buffalo_chicken.jpg', badges: ['spicy'] },
    { id: 'cashew-chicken',  name: { en: 'Cashew Chicken',  es: 'Pollo con Cajú'  }, desc: { en: 'Chicken with cashews',                               es: 'Pollo con castañas de cajú'                           }, price: 4.50, img: '/img/cashew_chicken.jpg' },
    { id: 'cheeseburger',    name: { en: 'Cheeseburger',    es: 'Cheeseburger'    }, desc: { en: 'Ground beef, bacon, cheddar, pickles & ketchup',     es: 'Carne molida, tocino, cheddar, pepinillos y ketchup'  }, price: 4.50, img: '/img/cheeseburger.jpg' },
    { id: 'taco',            name: { en: 'Taco',            es: 'Taco'            }, desc: { en: 'Seasoned taco-style beef with classic toppings',     es: 'Carne estilo taco con ingredientes clásicos'          }, price: 4.50, img: '/img/taco.jpg' },
    { id: 'quesadilla',      name: { en: 'Quesadilla',      es: 'Quesadilla'      }, desc: { en: 'Chicken breast, mozzarella & cheddar',               es: 'Pechuga de pollo, mozzarella y cheddar'               }, price: 4.50, img: '/img/quesadilla.jpg' },
    { id: 'mac-cheese',      name: { en: 'Mac & Cheese',    es: 'Mac & Queso'     }, desc: { en: 'Elbow pasta, mozzarella & cheddar',                  es: 'Pasta codo, mozzarella y cheddar'                     }, price: 4.50, img: '/img/mac__cheese.jpg', badges: ['veg'] },
  ],

  cheese: [
    { id: 'onion-cheese',  name: { en: 'Onion & Cheese', es: 'Cebolla y Queso' }, desc: { en: 'Onion, oregano & mozzarella',              es: 'Cebolla, orégano y mozzarella'               }, price: 4.50, img: '/img/onion__cheese.jpg', badges: ['veg'] },
    { id: 'spinach',       name: { en: 'Spinach',        es: 'Espinaca'        }, desc: { en: 'Spinach, onions & mozzarella',             es: 'Espinaca, cebollas y mozzarella'              }, price: 4.50, img: '/img/spinach.jpg', badges: ['veg', 'hot'] },
    { id: 'ham-cheese',    name: { en: 'Ham & Cheese',   es: 'Jamón y Queso'   }, desc: { en: 'Diced ham & mozzarella',                  es: 'Jamón en cubos y mozzarella'                  }, price: 4.50, img: '/img/ham__cheese.jpg' },
    { id: 'hawaiian',      name: { en: 'Hawaiian',       es: 'Hawaiana'        }, desc: { en: 'Ham, pineapple & mozzarella',             es: 'Jamón, piña y mozzarella'                     }, price: 4.50, img: '/img/hawaiian.jpg' },
    { id: 'palm-heart',    name: { en: 'Palm Heart',     es: 'Palmito'         }, desc: { en: 'Palm heart, mayo, ketchup & mozzarella',  es: 'Palmito, mayonesa, ketchup y mozzarella'      }, price: 4.50, img: '/img/palm_heart.jpg', badges: ['veg'] },
    { id: 'caprese',       name: { en: 'Caprese',        es: 'Caprese'         }, desc: { en: 'Tomatoes, basil & mozzarella',            es: 'Tomates, albahaca y mozzarella'               }, price: 4.50, img: '/img/caprese.jpg', badges: ['veg'] },
    { id: 'mushroom',      name: { en: 'Mushroom',       es: 'Champiñones'     }, desc: { en: 'Mushroom, onions & mozzarella',           es: 'Champiñones, cebollas y mozzarella'           }, price: 4.50, img: '/img/mushroom.jpg', badges: ['veg'] },
    { id: 'sweet-corn',    name: { en: 'Sweet Corn',     es: 'Choclo'          }, desc: { en: 'Corn, bechamel, nutmeg & mozzarella',     es: 'Maíz, bechamel, nuez moscada y mozzarella'   }, price: 4.50, img: '/img/sweet_corn.jpg', badges: ['veg'] },
    { id: 'pepperoni',     name: { en: 'Pepperoni',      es: 'Pepperoni'       }, desc: { en: 'Pepperoni & mozzarella',                  es: 'Pepperoni y mozzarella'                       }, price: 4.50, img: '/img/pepperoni.jpg' },
  ],

  sweet: [
    { id: 'dulce-de-leche', name: { en: 'Dulce De Leche', es: 'Dulce de Leche' }, desc: { en: 'Dulce de leche & cream cheese',    es: 'Dulce de leche y queso crema'         }, price: 4.50, img: '/img/dulce_de_leche.jpg' },
    { id: 'nutella',        name: { en: 'Nutella',         es: 'Nutella'        }, desc: { en: 'Nutella, Oreos & cream cheese',    es: 'Nutella, Oreos y queso crema'         }, price: 4.50, img: '/img/nutella.jpg' },
    { id: 'apple-pie',      name: { en: 'Apple Pie',       es: 'Pay de Manzana' }, desc: { en: 'Red apple, cinnamon & sugar',      es: 'Manzana roja, canela y azúcar'        }, price: 4.50, img: '/img/apple_pie.jpg' },
    { id: 'banana-split',   name: { en: 'Banana Split',    es: 'Banana Split'   }, desc: { en: 'Dulce de leche, cream cheese & bananas', es: 'Dulce de leche, queso crema y bananas' }, price: 4.50, img: '/img/banana_split.jpg' },
    { id: 'guava',          name: { en: 'Guava',           es: 'Guayaba'        }, desc: { en: 'Guava & cream cheese',             es: 'Guayaba y queso crema'                }, price: 4.50, img: '/img/guava.jpg' },
  ],

  kids: [
    { id: 'pampa-kids-combo',   name: { en: 'Pampa Kids Combo',        es: 'Combo Pampa Kids'         }, desc: { en: '2 Empanadas + 12oz Can', es: '2 Empanadas + Lata 355ml' }, price: 10.60 },
    { id: 'pizza-mozz',         name: { en: '7in Pizza w/ Mozzarella', es: 'Pizza 7" con Mozzarella'  }, desc: { en: 'Classic cheese pizza',   es: 'Pizza clásica de queso'    }, price: 9.00 },
    { id: 'pizza-pep',          name: { en: '7in Pizza w/ Pepperoni',  es: 'Pizza 7" con Pepperoni'   }, desc: { en: 'Classic pepperoni pizza', es: 'Pizza clásica de pepperoni'}, price: 9.00 },
    { id: 'chicken-fingers-3',  name: { en: 'Chicken Fingers',         es: 'Dedos de Pollo'           }, desc: { en: '3 units',                es: '3 unidades'                }, price: 6.99 },
    { id: 'chicken-fingers-4',  name: { en: 'Chicken Fingers',         es: 'Dedos de Pollo'           }, desc: { en: '4 units',                es: '4 unidades'                }, price: 8.50 },
  ],

  combos: [
    { id: 'pampa-kids',  name: { en: 'Pampa Kids', es: 'Pampa Kids' }, desc: { en: '2 Empanadas + Soda',        es: '2 Empanadas + Refresco'     }, price: 10.60, save: 0.90,  empanadasCount: 2,  drinksCount: 1, saucesCount: 0 },
    { id: 'pampa-1',     name: { en: 'Pampa 1',    es: 'Pampa 1'    }, desc: { en: '3 Empanadas + Soda',        es: '3 Empanadas + Refresco'     }, price: 15.00, save: 1.00,  empanadasCount: 3,  drinksCount: 1, saucesCount: 0 },
    { id: 'pampa-2',     name: { en: 'Pampa 2',    es: 'Pampa 2'    }, desc: { en: '4 Empanadas + Soda',        es: '4 Empanadas + Refresco'     }, price: 19.00, save: 1.50,  empanadasCount: 4,  drinksCount: 1, saucesCount: 0 },
    { id: 'pampa-3',     name: { en: 'Pampa 3',    es: 'Pampa 3'    }, desc: { en: '6 Empanadas + Soda',        es: '6 Empanadas + Refresco'     }, price: 28.40, save: 1.10,  empanadasCount: 6,  drinksCount: 1, saucesCount: 0 },
    { id: 'pampa-4',     name: { en: 'Pampa 4',    es: 'Pampa 4'    }, desc: { en: '8 Empanadas + Soda',        es: '8 Empanadas + Refresco'     }, price: 37.40, save: 1.10,  empanadasCount: 8,  drinksCount: 1, saucesCount: 0 },
    { id: 'pampa-5',     name: { en: 'Pampa 5',    es: 'Pampa 5'    }, desc: { en: '12 Empanadas + 4 Sauces',   es: '12 Empanadas + 4 Salsas'    }, price: 47.00, save: 9.00,  empanadasCount: 12, drinksCount: 0, saucesCount: 4 },
  ],

  // 13 drinks: 7 canned + 6 bottled
  drinks: [
    // Canned Soda – $2.50
    { id: 'coca-cola',   name: { en: 'Coca-Cola',    es: 'Coca-Cola'    }, desc: { en: '12 oz can', es: 'Lata 355ml' }, price: 2.50, category: 'canned', img: '/img/canned_soda.png' },
    { id: 'coke-diet',   name: { en: 'Coke Diet',    es: 'Coca Diet'    }, desc: { en: '12 oz can', es: 'Lata 355ml' }, price: 2.50, category: 'canned', img: '/img/canned_soda.png' },
    { id: 'coke-zero',   name: { en: 'Coke Zero',    es: 'Coca Zero'    }, desc: { en: '12 oz can', es: 'Lata 355ml' }, price: 2.50, category: 'canned', img: '/img/canned_soda.png' },
    { id: 'dr-pepper',   name: { en: 'Dr Pepper',    es: 'Dr Pepper'    }, desc: { en: '12 oz can', es: 'Lata 355ml' }, price: 2.50, category: 'canned', img: '/img/canned_soda.png' },
    { id: 'sprite-can',  name: { en: 'Sprite',       es: 'Sprite'       }, desc: { en: '12 oz can', es: 'Lata 355ml' }, price: 2.50, category: 'canned', img: '/img/canned_soda.png' },
    { id: 'fanta',       name: { en: 'Fanta',        es: 'Fanta'        }, desc: { en: '12 oz can', es: 'Lata 355ml' }, price: 2.50, category: 'canned', img: '/img/canned_soda.png' },
    { id: 'root-beer',   name: { en: 'Root Beer',    es: 'Root Beer'    }, desc: { en: '12 oz can', es: 'Lata 355ml' }, price: 2.50, category: 'canned', img: '/img/canned_soda.png' },
    // Bottled Drink – $3.50
    { id: 'sprite-bot',  name: { en: 'Sprite',       es: 'Sprite'       }, desc: { en: '20 oz bottle', es: 'Botella 591ml' }, price: 3.50, category: 'bottled', img: '/img/bottled_drink.png' },
    { id: 'mex-coke',    name: { en: 'Mexican Coke', es: 'Coca Mexicana'}, desc: { en: '20 oz bottle', es: 'Botella 591ml' }, price: 3.50, category: 'bottled', img: '/img/bottled_drink.png' },
    { id: 'gold-peak',   name: { en: 'Gold Peak Tea',es: 'Gold Peak Tea'}, desc: { en: '20 oz bottle', es: 'Botella 591ml' }, price: 3.50, category: 'bottled', img: '/img/bottled_drink.png' },
    { id: 'lemonade',    name: { en: 'Lemonade',     es: 'Limonada'     }, desc: { en: '20 oz bottle', es: 'Botella 591ml' }, price: 3.50, category: 'bottled', img: '/img/bottled_drink.png' },
    { id: 'perrier',     name: { en: 'Perrier',      es: 'Perrier'      }, desc: { en: '20 oz bottle', es: 'Botella 591ml' }, price: 3.50, category: 'bottled', img: '/img/bottled_drink.png' },
    { id: 'water',       name: { en: 'Bottled Water',es: 'Agua Embotellada'}, desc: { en: '20 oz bottle', es: 'Botella 591ml' }, price: 3.50, category: 'bottled', img: '/img/bottled_drink.png' },
  ],

  sauces: [
    { id: 'chimichurri', name: { en: 'Chimichurri', es: 'Chimichurri' }, desc: { en: 'Classic Argentine herb sauce (1oz)', es: 'Salsa de hierbas argentina clásica (30ml)' }, price: 0.50, img: '/img/Chimichurri.png' },
    { id: 'salsa-roja',  name: { en: 'Salsa Roja',  es: 'Salsa Roja'  }, desc: { en: 'Red sauce (1oz)',                    es: 'Salsa roja (30ml)'                          }, price: 0.50, img: '/img/SALSA ROJA.png' },
    { id: 'salsa-verde', name: { en: 'Salsa Verde', es: 'Salsa Verde'  }, desc: { en: 'Tomatillo & cilantro mild (1oz)',    es: 'Tomatillo y cilantro suave (30ml)'          }, price: 0.50, img: '/img/Salsa-Verde.png' },
    { id: 'garlic',      name: { en: 'Garlic',      es: 'Ajo'          }, desc: { en: 'Creamy garlic & olive oil (1oz)',    es: 'Ajo cremoso con aceite de oliva (30ml)'     }, price: 0.50, img: '/img/Crema-Blanca.png' },
    { id: 'criolla',     name: { en: 'Criolla',     es: 'Criolla'      }, desc: { en: 'Bell pepper, onion & tomato (1oz)', es: 'Morrón, cebolla y tomate en aceite (30ml)' }, price: 0.50, img: '/img/Pico-de-Gallo.png' },
  ],

  desserts: [
    { id: 'choc-cake',  name: { en: 'Chocolate Cake', es: 'Torta de Chocolate' }, desc: { en: 'Large slice',              es: 'Porción grande'         }, price: 6.99, img: '/img/chocolate_cake.png' },
    { id: 'tres-leches',name: { en: 'Tres Leches',    es: 'Tres Leches'        }, desc: { en: 'Traditional moist cake',   es: 'Torta húmeda tradicional'}, price: 5.99, img: '/img/tres_leches.png' },
    { id: 'alfajor',    name: { en: 'Coco Alfajor',   es: 'Alfajor de Coco'    }, desc: { en: 'Argentine cookie sandwich',es: 'Alfajor argentino'       }, price: 2.50, img: '/img/coco_alfajor.png' },
  ],
};

// All empanada-eligible items (meat + cheese + sweet) for combo selection
export const empanadasList = [
  ...menuData.meat,
  ...menuData.cheese,
  ...menuData.sweet,
];

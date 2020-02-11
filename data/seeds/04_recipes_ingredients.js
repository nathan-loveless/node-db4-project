exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients').insert([   
    { recipe_id: 1, ingredient_id: 1, quantity: 1.00 },
    { recipe_id: 1, ingredient_id: 2, quantity: 2.00 },
    { recipe_id: 1, ingredient_id: 3, quantity: 1.00 },
    { recipe_id: 1, ingredient_id: 4, quantity: 3.00 },
    { recipe_id: 2, ingredient_id: 5, quantity: 2.00 },
    { recipe_id: 2, ingredient_id: 6, quantity: 4.00 },
    { recipe_id: 2, ingredient_id: 7, quantity: 2.00 },
    { recipe_id: 2, ingredient_id: 1, quantity: 1.00 },
    { recipe_id: 3, ingredient_id: 2, quantity: 3.00 },
  ]);
};

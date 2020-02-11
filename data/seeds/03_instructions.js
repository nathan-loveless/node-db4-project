exports.seed = function(knex, Promise) {
  return knex('instructions').insert([   
    { recipe_id: 1, step_number: 1, instruction: 'Boil water add a pinch of salt' },
    { recipe_id: 1, step_number: 2, instruction: 'Cut potatoes into 1 inch cubes' },
    { recipe_id: 1, step_number: 3, instruction: 'When water is boiling add potatoes' },
    { recipe_id: 1, step_number: 4, instruction: 'When a fork can break the potatoes, drain water' },
    { recipe_id: 1, step_number: 5, instruction: 'Add milk and butter then mash until you have consistency desired' },
    { recipe_id: 2, step_number: 1, instruction: 'Boil water then add beef base' },
    { recipe_id: 2, step_number: 2, instruction: 'once dissolved, reduce heat to simmer' },
    { recipe_id: 2, step_number: 3, instruction: 'Slowly add flour until you have the desired thickness of gravy' },
    { recipe_id: 3, step_number: 1, instruction: 'Pre-heat overn to 400 deg.' },
    { recipe_id: 3, step_number: 2, instruction: 'Wrap potatoes in aluminum foil' },
    { recipe_id: 3, step_number: 3, instruction: 'Place wrapped potatoes on baking sheet and put in oven' },
    { recipe_id: 3, step_number: 4, instruction: 'Bake for 30 minutes' },
    { recipe_id: 3, step_number: 5, instruction: 'When done let sit for 10 minutes then enjoy!' },
  ]);
};

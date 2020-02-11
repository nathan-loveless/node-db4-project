exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([   
    { name: ' tsp of salt' },
    { name: ' lb of potatoes' },
    { name: ' cup of milk'},
    { name: ' tbsp of butter'},
    { name:' tbsp of beef base'},
    { name: ' cup of water'},
    { name: ' cup of flour'}
  ]);
};

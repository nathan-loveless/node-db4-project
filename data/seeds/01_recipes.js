exports.seed = function(knex, Promise) {
  return knex('recipes').insert([   
    { name: 'Mashed Potatoes' },
    { name: 'Beef Gravy' },
    { name: 'Baked Potato' }
  ]);
};

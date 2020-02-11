
exports.up = function(knex) {
    return(knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('name', 256).unique().notNullable();
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.integer('recipe_id').notNullable().unsigned().references('recipes.id');
            tbl.integer('step_number').notNullable();
            tbl.string('instruction').notNullable();
        })
        
        .createTable('recipes_ingredients', tbl => {
            tbl.integer('recipe_id').notNullable().unsigned().references('recipes.id');
            tbl.integer('ingredient_id').notNullable().unsigned().references('ingredients.id');
            tbl.integer('quantity').notNullable();
            tbl.primary(['recipe_id', 'ingredient_id']);
        }))
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};

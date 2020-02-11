
exports.up = function(knex) {
    return(knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 128).notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.integer('recipe_id').notNullable().unsigned().references('recipes.id');
            tbl.float('quantity').notNullable();
            tbl.string('ingredient', 256).notNullable();
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.integer('recipe_id').notNullable().notNullable().unsigned().references('recipes.id');
            tbl.integer('step_number').notNullable();
            tbl.string('instruction').notNullable();
        }))
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};

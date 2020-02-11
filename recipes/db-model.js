const db = require('../data/db-config');

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('ingredients').join('recipes_ingredients', 'recipes_ingredients.recipe_id', '=', parseInt(id)).select('recipes_ingredients.quantity', 'ingredients.name').whereRaw('recipes_ingredients.ingredient_id = ingredients.id');
    
}

function getInstructions(id) {
    return db('instructions').where('instructions.recipe_id', '=', parseInt(id)).orderBy('instructions.step_number', 'asc');
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}
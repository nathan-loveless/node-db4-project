const express = require('express');

const Recipes = require('./db-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });

  router.get('/shoppinglist/:id', (req, res) => {
      const {id} = req.params
    Recipes.getShoppingList(id)
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get shopping list', err });
    });
  });

  router.get('/instructions/:id', (req, res) => {
    const {id} = req.params
  Recipes.getInstructions(id)
  .then(instructions => {
    res.json(instructions);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get shopping list', err });
  });
});

  module.exports = router;
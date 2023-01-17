const express = require("express");
const pokedex = require("../assets/pokedex.json");
var fs = require('fs');

const router = express.Router();

let pokedexJson = pokedex;


router
  .route("/pokemon")
  .get((req, res) => {
      res.send(pokedexJson);
  });

router
  .route("/pokemon/:id")
  .get((req, res) => {
    let pokemon;
    pokedexJson.pokemon.forEach(e => {
        if (e.id == req.params.id) {
            pokemon = e;
        }

    })
    if (pokemon) {
        res.send(pokemon);
    } else {
        res.sendStatus(301);
    }
  })
  .delete((req, res) => {
    pokedexJson.pokemon = pokedexJson.pokemon.filter((pokemon) => {
        return pokemon.id != req.params.id;
    })
    res.sendStatus(200);
  });

module.exports = router;

const mongoose = require('mongoose')

const Schema = mongoose.Schema


const pokemonSchema = new Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
    pokemonId: {type: String}
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon
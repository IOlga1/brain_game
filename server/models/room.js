const mongoose = require('mongoose')
const Schema = mongoose.Schema

const modelRoom = new Schema({
    idRoom: String,
    player1: {
        id: String
    },
    player2: {
        id: String
    }
},
    { versionKey: false }
)

const Room = mongoose.model('Room', modelRoom)

module.exports = Room
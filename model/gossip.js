const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gossipSchema = Schema({
    title: {type: String},
    body: {type: String},
    likes : {type: Number, default: 0},
    dislikes : {type: Number, default: 0},
    views : {type: Number, default: 0},
    flag : {type: Number, default: 0},
    created_at : {type:Date, default: Date.now},
    images: [String],    
    category: {type: String},
    tags:[{type: String}],
    author: {type: Schema.Types.ObjectId, ref: 'User'},
   	comments: []

});



module.exports = mongoose.model("Gossip", gossipSchema)
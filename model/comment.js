const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const commentSchema =  Schema({
    _commentId: Schema.Types.ObjectId,
    user: { type: Schema.ObjectId, ref: 'User' },
    created_at: {type:Date, default: Date.now},   
    comment : String,
    ancestor: { type: Schema.ObjectId, ref: 'Gossip' },
    ancestors: [{ type: Schema.ObjectId }],
    gossipId: { type: Schema.ObjectId, ref: 'Gossip' }
  });


  module.exports = mongoose.model("Comment", commentSchema)
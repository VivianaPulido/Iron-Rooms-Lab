const { Schema, model } = require('mongoose');


const roomSchema = new Schema({
  name: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  owner: String,//{ type: Schema.Types.ObjectId, ref: 'User' },//No supe como
  reviews:[{ type: Schema.Types.ObjectId, ref: 'Review' } ]
})

module.exports = model('Room', roomSchema);
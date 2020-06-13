const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/cowTA', {useNewUrlParser: true, useUnifiedTopology: true});
// let db = mongoose.connection

let cowSchema = new Schema({
    name: String,
    description: String
})

let Cow = mongoose.model('Cow', cowSchema);


module.exports = Cow;
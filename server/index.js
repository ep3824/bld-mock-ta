const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const Cow = require('./db/db.js');

const app = express();
const port = 8080;

app.use(bp.json())
app.use(cors())

//Get all cows
app.get('/api/cows', function(req, res) {
    Cow.find()
        .then(data => res.send(data))
        .catch(err => console.log('ERROR!', err))
})

//Create new cow
app.post('/api/cows', function(req, res) {
    let newCow = new Cow({
        name: req.body.name,
        description: req.body.description
    })
    newCow.save().then(data => console.log(data)).then(data = res.send('posted'))
})


app.listen(port, () => console.log(`Server is running on port ${port}`));
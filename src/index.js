const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose =require('mongoose')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

mongoose.connect("mongodb+srv://saurabhshete281:JBmRPjzC58VOejIX@cluster0.jih1tjw.mongodb.net/Plutonium", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

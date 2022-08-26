const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://saurabhshete281:JBmRPjzC58VOejIX@cluster0.jih1tjw.mongodb.net/PlutoniumMiddlewareAssignment2", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

// app.use(
//     function (req, res, next) {
//         let Date = moment().format('DD-MM-YYYY')
//         let ip = req.ip
//         let url = req.originalUrl
//         console.log(Date, ip, url)
//         next()
//     });

app.use('/', route);

// app.use(

//     function (req, res, next) {
//         let Date = moment().format('DD-MM-YYYY')
//         let ip = req.ip
//         let url = req.originalUrl
//         console.log(Date, ip, url)
//         next()
//     });


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

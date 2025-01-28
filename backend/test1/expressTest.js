const express = require('express');
const app = express(); // assign express in app container
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


//middleware
// app.use(function(req, res, next){
//     console.log("middleware running ");
//     next();
// });

// app.use(function(req, res, next){
//     console.log("middleware running another time");
//     next();
// });

// Routing

app.get("/" , function(req, res){
    res.render("index");
});

app.get("/profile/:username/:age", function(req, res){
    res.send(req.params);
});

//error handiling

// app.get("/profile", function(req, res, next){
//     return next(new Error ("Something went wrong"))
// });

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
//   })

app.listen(3000);


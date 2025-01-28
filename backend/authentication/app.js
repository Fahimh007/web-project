const express = require('express');
const app = express();
const userModel = require("./models/user")

const cookieParser = require('cookie-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { hash } = require('crypto');

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


//encryption

// app.get('/', function(req, res){
//     // res.cookie("name", "fahim hasan");
//     res.send("Done");
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash('fahimhassan', salt, function(err, hash) {
//             // Store hash in your password DB.
//             console.log(hash);
//         });
//     });
// })



//decryption

// app.get('/', function(req, res){
//     // res.cookie("name", "fahim hasan");
//     res.send("Done");
//     bcrypt.compare('fahimhassan', "$2b$10$ZlSvSCSEyI0ufbn.hYVFEOXfLUki4f7Oarr/o1VcCY/09ONdzqtYu", function(err, result) {
//         console.log(result);
//     });
// })

// app.get('/read', function(req, res){
//     // console.log(req.cookies);
//     res.send("Read page");
// })

//jwt
// app.get('/', function(req, res){  
//     let token = jwt.sign({email: "fahim@gmail.com"}, "secret");
//     console.log(token);
//     res.cookie("token", token);
//     res.send("Done");
// });

// app.get("/read", function(req, res){
//     // console.log(req.cookies.token);
//     let data = jwt.verify(req.cookies.token, "secret");
//     console.log(data);
//     res.send("hi");
// })

app.get('/', (req, res)=>{
    res.render("index");
});

app.post('/create', (req, res)=>{
    let {username, email, password, age} = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async(err, hash) => {
            let createUser = await userModel.create({
                username,
                email,
                password: hash,
                age
            })
            let token = jwt.sign({email}, "peeeeeeee");
            res.cookie("token", token);
            res.send(createUser);
        }) 
    })
});

app.get("/login", (req, res) => {
    res.render('login');
})

app.post("/login", async function(req, res) {
    let user = await userModel.findOne({email: req.body.email})
    if(!user) return res.send("Something is wrong");

    bcrypt.compare(req.body.password, user.password, function(err, result){
        if(result){
            let token = jwt.sign({email: user.email}, "peeeeeeee");
            res.cookie('token', token);
            res.send("Yes you can login");
        }
        else res.send("Something is wrong");
    })
})

app.get("/logout", function(req, res){
    res.cookie("token", "");
    res.redirect("/");
})




app.listen(3000);
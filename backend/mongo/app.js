const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');

// const userModle = require('./usermodel');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) =>{
    res.render('index');
})

app.get('/read', async(req,res) =>{
    let allUsers = await userModel.find();
    res.render("read", {users: allUsers});
})

app.get('/edit/:userid', async(req,res) =>{
    let user = await userModel.findOne({_id: req.params.userid});
    res.render('edit', {user}); 
})

app.post('/update/:userid', async(req,res) =>{
    let {name, email, image} = req.body;
    let Updateuser = await userModel.findOneAndUpdate(
        {_id: req.params.userid},
        {name, email,image},
        {new: true}
    );
    res.redirect('/read');
})

app.get('/delete/:id', async(req,res) =>{
    let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect('/read');
})

app.post('/create',async(req, res) =>{
    let {name, email, image} = req.body;
    let createdUser = await userModel.create({
        name: name,
        email: email,
        image: image
    });
    res.redirect('/read');
})

// //creating a new user
// app.get('/create', async(req, res) => {
//     let createUser = await userModle.create({
//         name: "fahim", 
//         email: 'fahim@gmail.com',
//         username: "fahim007"
//     })
//     res.send(createUser);
// }) 
// //read user data
// app.get('/read', async(req, res) => {
//     let users = await userModle.find();
//     res.send(users);
// }) 
// //update user data
// app.get('/update', async(req, res) => {
//     let updatedUser = await userModle.findOneAndUpdate(
//         {username: 'fahim007'},
//         {name: "Zaddel"},
//         {new: false}
//     )
//     res.send(updatedUser);
// }) 
// //delete any user
// app.get('/delete', async(req, res) =>{
//     let users = await userModle.findOneAndDelete({username: 'fahim007'})
//     res.send(users);
// })

app.listen(3000);


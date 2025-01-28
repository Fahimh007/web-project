const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/create', async(req, res) => {
    let user = await userModel.create({
        username: "Fahim",
        age: 22,
        email: "fahim@gmail.com"
    })
    res.send(user);
})

app.get('/post/create', async(req, res) => {
    let post = await postModel.create({
        postdata: "Hello everyone, Good morning",
        user: "66d8a2f046bdcfa82280ef26",
    })
    let user = await userModel.findOne({_id: "66d8a2f046bdcfa82280ef26"});
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
})

app.listen(3000);
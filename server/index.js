import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv'


import path from 'path'
import session from 'express-session'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import bcrypt from 'bcryptjs'

import User from './models/user.js'
import PostMessage from "./models/posts.js";

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'


const app = express();
dotenv.config()
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes)
app.use('/users', userRoutes)

mongoose.connect((process.env.CONNECTION_URL))
 .then(() => app.listen(PORT, () => console.log("server running on port: 5000")))
 .catch((error) => console.log(error.message));
app.use(cors());

passport.use(
    new LocalStrategy((name, password, done) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPassword)  => {
        password = hashedPassword
    }),
      User.findOne({ name: name }, (err, user) => {
        if (err) {
            console.log("here") 
          return done(err);
        }
        if (!user) {
            console.log("here")
          return done(null, false, { message: "Incorrect username" });
        }
        if (user.password !== password) {
            console.log("here")
          return done(null, false, { message: "Incorrect password" });
        }
        console.log("here")
        return done(null, user);
      })
    })
  );



passport.serializeUser(function(user, done) {
done(null, user.id);
});


passport.deserializeUser(function(id, done) {
User.findById(id, function(err, user) {
    done(err, user);
});
});


app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next();
});


app.get('/user', (req, res) => {
    res.send({user: req.user})
})

//app.get('/', (req, res) => {
//    res.send('hello from nuntia tabula')
//})


app.post(
    "/log-in", (req, res) => {
        console.log(bcrypt.hash(req.body.password, 10))
        User.findOne({ name: req.body.name }, (err, user) => {
            bcrypt.hash(req.body.password, 10, (err, hashedPassword)  => {
            //console.log(hashedPassword)
            if (err) {
                console.log("here") 
            }
            if (!user) {
                console.log("incorrect username")
                return null
            }
           // if (user.password !== hashedPassword) {
            //    console.log(user.password, hashedPassword)
           //     console.log("incorrect password")
           //     return null
           // }
            console.log("signed in")
            res.send(req.body.name)
          })})
})


app.post("/sign-up", (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if (err) { 
            return next(err);
        }
        else {
            const user = new User({
                name: req.body.name,
                password: hashedPassword,
              }).save(err => {
                if (err) { 
                  return next(err);
                }
                res.redirect("/");
              });
            }
        }); 
  });


  app.get("/log-out", (req, res) => {
    req.logout();
    res.redirect("/");
  });


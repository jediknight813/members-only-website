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


import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express();
dotenv.config()


passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) { 
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        bcrypt.compare(password, user.password, (err, res) => {
            if (res) {
              // passwords match! log user in
              return done(null, user)
            } else {
              // passwords do not match!
              return done(null, false, { message: "Incorrect password" })
            }
          })
        return done(null, user);
      });
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

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());


app.use('/posts', postRoutes)
app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.send({user: req.user})
})


app.post(
    "/log-in",
    passport.authenticate("local", {
      successRedirect: "/Login",
      failureRedirect: "/SignUp"
    })
  );


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


const PORT = process.env.PORT || 5000;

mongoose.connect((process.env.CONNECTION_URL))
 .then(() => app.listen(PORT, () => console.log("server running on port: 5000")))
 .catch((error) => console.log(error.message));


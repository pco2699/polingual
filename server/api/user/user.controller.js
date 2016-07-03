'use strict';

import User from './user.model';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

function validationError(res, statusCode) {
  statusCode = statusCode || 422;
  return function(err) {
    res.status(statusCode).json(err);
  }
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

/**
 * Get list of users
 * restriction: 'admin'
 */
export function index(req, res) {
  return User.find({}, '-salt -password').exec()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(handleError(res));
}

/**
 * Creates a new user
 */
export function create(req, res, next) {
  var newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.role = 'user';
  newUser.save()
    .then(function(user) {
      var token = jwt.sign({ _id: user._id }, config.secrets.session, {
        expiresIn: 60 * 60 * 5
      });
      res.json({ token });
    })
    .catch(validationError(res));
}

/**
 * Get a single user
 */
export function show(req, res, next) {
  var userId = req.params.id;

  return User.findById(userId).exec()
    .then(user => {
      if (!user) {
        return res.status(404).end();
      }
      res.json(user.profile);
    })
    .catch(err => next(err));
}

/**
 * Deletes a user
 * restriction: 'admin'
 */
export function destroy(req, res) {
  return User.findByIdAndRemove(req.params.id).exec()
    .then(function() {
      res.status(204).end();
    })
    .catch(handleError(res));
}

/**
 * Change a users password
 */
export function changePassword(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  return User.findById(userId).exec()
    .then(user => {
      if (user.authenticate(oldPass)) {
        user.password = newPass;
        return user.save()
          .then(() => {
            res.status(204).end();
          })
          .catch(validationError(res));
      } else {
        return res.status(403).end();
      }
    });
}

/**
 * Register Profile
 */
export function registerProfile(req, res, next) {
  const userId = req.params.id;
  const country = String(req.body.country);
  const gender = String(req.body.gender);
  const langs = String(req.body.langs);
  const interests = req.body.interests;

  return User.findById(userId).exec()
    .then(user => {
      console.log(user);
      user.country = country;
      user.gender = gender;
      user.language = langs;
      user.interest = interests;
      return user.save()
        .then(() => {
          res.status(204).end();
        })
        .catch(validationError(res));
    });
}

/**
 * Get my info
 */
export function me(req, res, next) {
  var userId = req.user._id;

  return User.findOne({ _id: userId }, '-salt -password').exec()
    .then(user => { // don't ever give out the password or salt
      if (!user) {
        return res.status(401).end();
      }
      res.json(user);
    })
    .catch(err => next(err));
}

/**
 * Authentication callback
 */
export function authCallback(req, res, next) {
  res.redirect('/');
}

/**
 * Get multiple users by him/her language
 */
export function getUsersByLang(req, res, next) {
  var lang = req.params.language;

  return User.find({language:lang}).exec()
    .then(users => {
      if (!users) {
         return res.status(404).end();
      }
      res.json(users);
    })
   .catch(err => next(err));
}

/**
 *  * Get multiple users by him/her language, country, gender, interest
 *   */
export function getUsersByAll(req, res, next) {
   var lang = req.params.language;
   var count = req.params.country;
   var gend = req.params.gender;
   var intr = req.params.interest;
   var qu = 'role:user';
   if(lang != 'NA'){
	   qu += ', language:lang';
   }
   if(count != 'NA'){
	   qu += ', country:count';
   }
   if(gend != 'NA'){
	   qu += ', gender:gend';
   }
   if(intr != 'NA'){
	  // qu += 'interest:intr';
   }
   console.log(qu);
   return User.find({qu}).exec()
    .then(users => {
       if (!users) {
            return res.status(404).end();
        }
       res.json(users);
    })
    .catch(err => next(err));
}


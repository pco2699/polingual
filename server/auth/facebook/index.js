'use strict';

import express from 'express';
import passport from 'passport';
import {setTokenCookie} from '../auth.service';

var router = express.Router();

router
  .get('/', passport.authenticate('facebook', {
    scope: ['email', 'public_profile'],
    failureRedirect: '/signup',
    session: false
  }))
  .get('/callback', (req, res, next) => {
    passport.authenticate('facebook', (err, user, info) => {
      if(err){
        return next(err);
      }
      req.user = user;
      setTokenCookie(req, res);
      if(info == 'registered'){
        return res.redirect('/');
      }
      else{
        return res.redirect('/profile');
      }
    })(req, res, next);
  });

export default router;

import passport from 'passport';
import {Strategy as FacebookStrategy} from 'passport-facebook';
import config from '../../config/environment'

export function initPassport(passport){
  passport.use(new FacebookStrategy(config.oauth.facebook, (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      return done(null, profile);
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });
};

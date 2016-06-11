'use strict';

class LoginController {
  user = {email:'', password:''};
  errors = {other:''};
  submitted = false;
  constructor(public Auth, public $state) {
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Logged in, redirect to home
        this.$state.go('main');
      })
      .catch(err => {
        this.errors.other = err.message;
      });
    }
  }
}

angular.module('polingualApp')
  .controller('LoginController', LoginController);

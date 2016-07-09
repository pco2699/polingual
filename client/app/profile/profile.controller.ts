'use strict';
(function() {

  class ProfileComponent {
    public langs = [];
    public interests = [];

    public message;
    public user;
    public gender;

    public submitted:boolean = false;
    public succeed:boolean = false;

    constructor(public $http, public Auth, public $state, public appConfig) {
    }

    loadItems(query) {
      return this.$http.get('/api/interests/' + query);
    }

    $onInit() {
      this.gender = this.appConfig.gender;
      this.langs = this.appConfig.langs;
    }

    update(form) {
      this.submitted = true;
      if(form.$valid) {
      this.$http.post('/api/interests', this.interests)
        .then(() =>{
          const user1 = this.Auth.getCurrentUser();
          const data = {
            country: this.user.country,
            langs: this.user.langs,
            gender: this.user.gender,
            interests: this.interests
          };
          this.$http.put('/api/users/' + user1._id + '/profile', data)
            .then(() => {
              this.succeed = true;
            })
          });
        }
      }
    }

  angular.module('polingualApp')
    .component('profile', {
      templateUrl: 'app/profile/profile.html',
      controller: ProfileComponent,
      controllerAs: 'prfl'
    });

})();

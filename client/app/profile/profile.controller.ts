'use strict';
(function(){

class ProfileComponent {
  public langs = [];
  public tags = [];

  public message;
  public user;
  public gender;

  constructor(public $http, public Auth, public $state, public appConfig) {
  }

  loadItems(query){
    return this.$http.get('/api/interests/' + query);
  }

  $onInit(){
    this.gender = this.appConfig.gender;
    this.langs = this.appConfig.langs;
  }

  update(){
    this.$http.post('/api/interests', this.tags)
      .then(
        this.Auth.registerProfile(this.user.city, this.user.langs, this.user.gender)
          .then(() => {
            this.$state.go('main');
          }
        )
      )
  }
}

angular.module('polingualApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'prfl'
  });

})();

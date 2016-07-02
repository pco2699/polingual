'use strict';

class NavbarController {
  //start-non-standard

  isCollapsed = true;
  //end-non-standard

  public genders;
  public langs;

  public isLoggedIn;
  public isAdmin;
  public getCurrentUser;
  public menu;
  public dispSearch;

  constructor(public Auth, public appConfig, public $stateParams, public $rootScope, public $scope, public $state) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.menu = [{
      'title': 'Home',
      'state': 'main',
    }
    ];
    NavbarController.$inject = ['Auth', 'appConfig', '$stateParams', '$rootScope', '$scope', '$state'];
    this.submit = function(count, gend, lang, intr){
	              $state.go('teachers', {count:count ,gend:gend ,lang:lang, intr:intr})
     };
  }

  $onInit(){
    this.genders = this.appConfig.gender;
    this.langs = this.appConfig.langs;
    this.dispSearch = this.$rootScope.dispSearch;
  }
}

angular.module('polingualApp')
  .controller('NavbarController', NavbarController);

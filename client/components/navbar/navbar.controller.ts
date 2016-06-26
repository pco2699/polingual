'use strict';

class NavbarController {
  //start-non-standard

  isCollapsed = true;
  //end-non-standard

  public genders = [];
  public langs =  [];
  
  public isLoggedIn;
  public isAdmin;
  public getCurrentUser;
  public menu;

  constructor(public Auth, public appConfig) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.menu = [{
      'title': 'Home',
      'state': 'main',
    }
    ];
  }

  $onInit(){
     this.gender = this.appConfig.gender;
     this.langs = this.appConfig.langs;
  }

}

angular.module('polingualApp')
  .controller('NavbarController', NavbarController);

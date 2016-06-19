'use strict';

class NavbarController {
  //start-non-standard

  isCollapsed = true;
  //end-non-standard

  public genders = [{name:'Male',value:'Male'},
              {name:'Female',value:'Female'},
              {name:'Other',value:'Other'}];

  public langs =  [{name:'Japanese', value:'Japanese'},
	           {name:'English', value:'English'},
                   {name:'Duck',value:'Duck'}];

  //public genders;
  //public langs;

  constructor(Auth, public appConfig) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    //this.genders = this.appConfig.gender;
    //this.langs = this.appConfig.langs;
    this.menu = [{
      'title': 'Home',
      'state': 'main',
    }
    ];
  }

  isCurState(target) {
    if('main' == target){
      return true;
    }
    else {
      return false;
    }
  }
}

angular.module('polingualApp')
  .controller('NavbarController', NavbarController);

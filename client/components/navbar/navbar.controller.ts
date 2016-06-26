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
}

angular.module('polingualApp')
  .controller('NavbarController', NavbarController);

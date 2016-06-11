'use strict';

(function() {

function UserResource($resource) {
  return $resource('/api/users/:id/:controller', {
    id: '@_id'
  }, {
    changePassword: {
      method: 'PUT',
      params: {
        controller: 'password'
      }
    },
    get: {
      method: 'GET',
      params: {
        id: 'me'
      }
    },
    registerProfile: {
      method: 'PUT',
      params: {
        controller: 'profile'
      }
    }
  }
);
}

angular.module('polingualApp.auth')
  .factory('User', UserResource);

})();

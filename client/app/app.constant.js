(function(angular, undefined) {
'use strict';

angular.module('polingualApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin'],gender:['Male','Female','Other'],langs:['English','Japanese','Spanish']})

;
})(angular);

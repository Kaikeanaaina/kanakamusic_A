angular.module('app.settingController', [])

.controller('settingCtrl', function($scope, $rootScope, $state, loginService) {
console.log('this is the settings controller');

  $scope.logOut = function(){
    loginService.logOutUser().success(function(data){
      $rootScope.loggedinUser = null;
      return $state.go('menu.login');
    });
  };

});